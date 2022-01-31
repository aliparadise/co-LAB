import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


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

    const history = useHistory()
    
   return (
        <>
            <h1>LABs</h1>

            {
                labs.map(
                    (lab) => {
                        return <div key={`lab--${lab.id}`}>
                          <p className={`lab ${lab.id}`}><Link to={`/labs/${lab.id}`}>{lab.name}</Link></p>
                          </div>
                    }
                )
            }

            <div>
                <button onClick={() => history.push("/lab/create")}>Create A LAB</button>
            </div>
        </>
    )
}