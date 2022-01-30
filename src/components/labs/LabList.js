import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


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
                        return <div key={`lab--${lab.id}`}>
                          <p className={`lab ${lab.id}`}><Link to={`/labs/${lab.id}`}>{lab.name}</Link></p>
                          </div>
                    }
                )
            }
        </>
    )
}