import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const FacilitatorList = () => {
    const [facilitators, changeFacilitator] = useState([])
    const [facilitatorSpecialty, setSpecialty] = useState("")

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
        //this useEffect function will get only the specialties
    useEffect(() => {
            const onlySpecialties = facilitators.map(fac => fac.specialty)
            setSpecialty(onlySpecialties.join(", "))
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [facilitators])

    const history = useHistory()

    return (
        <>
            <div>
                Specialties: { facilitatorSpecialty}
            </div>
            {
                facilitators.map(
                    (facilitator) => {
                        return <p key={`facilitator--${facilitator.id}`}>{facilitator.name}</p>
                    }
                )
            }
        </>
    )
}