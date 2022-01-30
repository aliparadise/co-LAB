import React, { useEffect, useState } from "react"


export const LabList = () => {
    const [labs, getLabs] = useState([])

     useEffect(
        () => {
            fetch("http://localhost:8088/labs")
                .then(res => res.json())
                .then((data) => {
                    getLabs(data)
                })
        },
        []
    )
    
   return (
        <>
            {
                labs.map(
                    (lab) => {
                        return <p key={`lab--${lab.id}`}>{lab.name}</p>
                    }
                )
            }
        </>
    )
}