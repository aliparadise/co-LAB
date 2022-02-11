import React, { useEffect, useState } from "react"
import "./Facilitator.css"

export const FacilitatorList = () => {
    const [facilitators, changeFacilitator] = useState([])

     useEffect(
        () => {
            fetch("http://localhost:8088/facilitators")
                .then(res => res.json())
                .then((data) => {
                    changeFacilitator(data)
                })
        },
        []
    )
    
   return (
        <>
        <div className="container">
            <h2>Facilitators</h2>
            {
                facilitators.map(
                    (facilitator) => {
                        return <p className="facilitatorNames" key={`facilitator--${facilitator.id}`}>{facilitator.name} : {facilitator.specialty}</p>
                    }
                )
            }
        </div>
        </>
    )
}