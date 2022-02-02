import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Lab = () => {
    const [ lab, singleLab ] = useState({})
    const [ facilitator, selectFacilitator] = useState([])

    const { labId } = useParams()

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
                    <select id="facilitator">
                        { 
                            facilitator.map(
                                (facilitator) => {
                                    return <option key={`facilitator--${facilitator.id}`}>
                                        { facilitator.name }
                                    </option>
                                }

                            )
                        }
                    </select>
            </section>
        </>
    )
}