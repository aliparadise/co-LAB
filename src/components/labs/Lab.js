import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"


export const Lab = () => {
    const [ lab, singleLab ] = useState({})
    const [ facilitator, selectFacilitator ] = useState([])
    const { labId } = useParams()
    const history = useHistory()
    const currentUser = parseInt(localStorage.getItem("colab_customer"))

    useEffect (
        () => {
            return fetch(`http://localhost:8088/labs/${labId}?_expand=facilitator`)
                .then(response => response.json())
                .then((data) => {
                    singleLab(data)
            })
        },[ labId ]
    )

    useEffect (
        () => {
            return fetch("http://localhost:8088/facilitators")
                .then(response => response.json())
                .then((data) => {
                    selectFacilitator(data)
                })
        }, []
    )

    const updateFacilitator = (changeEvt) => {
            const newFacilitatorLabObject = {
                "name": lab.name,
                "about": lab.about,
                "address": lab.address,
                "date": lab.date,
                "time": lab.time,
                "facilitatorId": parseInt(changeEvt.target.value),
                "collaboratorId": parseInt(localStorage.getItem("colab_customer"))
              }


        return fetch(`http://localhost:8088/labs/${labId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFacilitatorLabObject)
        })
        .then (() => {
            history.push("/labs")
            
        })
    }

    return (
        <>
            <h2>LAB Details</h2>
            <section className="lab">
                <h3 className="lab__name">{ lab.name }</h3>
                <div className="lab__about">{ lab.about }</div>
                <div className="lab__address">{ lab.address }</div>
                <div className="lab__date">{ lab.date }</div>
                <div className="lab__time">{ lab.time }</div>
                <div className="lab__facilitator">
                    Facilitator will be: { lab.facilitator?.name }</div>
                    { lab.collaboratorId === currentUser ?
                    <select id="facilitator" onChange={ updateFacilitator }>
                        <option value="0">Select A Facilitator</option>
                        { 
                            facilitator.map(
                                (facilitator) => {
                                    return <option value={facilitator.id} key={`facilitator--${facilitator.id}`}>
                                        { facilitator.name }
                                    </option>
                                }

                            )
                        }
                    </select> : "" }
            </section>
        </>
    )
}