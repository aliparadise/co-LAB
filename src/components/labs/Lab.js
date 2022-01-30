import React from "react"
import { useParams } from "react-router-dom"

export const Lab = () => {

    const { labId } = useParams()

    return (
        <>
            <h2>LAB Details</h2>
            <section className="lab"></section>
        </>
    )
}