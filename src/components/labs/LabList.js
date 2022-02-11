import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Lab.css"


export const LabList = () => {
    const [labs, getLabs] = useState([])
    
    const currentUser = parseInt(localStorage.getItem("colab_customer"))

     useEffect(
        () => {
            fetch("http://localhost:8088/labs?_expand=facilitator")
                .then(res => res.json())
                .then((data) => {
                    getLabs(data)
                })
        },
        []
    )
   
    const history = useHistory()

    const deleteLab = (id) => 
            fetch(`http://localhost:8088/labs/${id}`, {
            method: "DELETE"
            })
            .then( () => {
                fetch("http://localhost:8088/labs?_expand=facilitator")
                .then(res => res.json())
                .then((data) => {
                    getLabs(data)
                })
        },
        []
    )

    
   return   (
        <>
            <div className="container">
            <h1 className="header">LABs</h1>

            {
                labs.map(
                    (lab) => {
                        return <div key={`lab--${lab.id}`}>
                          <p><Link className="labDetailLink" to={`/labs/${lab.id}`}>{lab.name}</Link> with {lab.facilitator.name}</p>
                { lab.collaboratorId === currentUser ? <button className="btn--delete" onClick={() => {deleteLab(lab.id)}}>Delete</button> : "" }
                          </div>
                    }
                )
            }
            </div>
            <div>
                <button className="createButton" onClick={() => history.push("/lab/create")}>Create A LAB</button>
            </div>
        </>
    )
}