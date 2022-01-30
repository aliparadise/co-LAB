import React, { useEffect, useState } from "react"


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
            {
                facilitators.map(
                    (facilitator) => {
                        return <p key={`facilitator--${facilitator.id}`}>{facilitator.name} : {facilitator.specialty}</p>
                    }
                )
            }
        </>
    )
}