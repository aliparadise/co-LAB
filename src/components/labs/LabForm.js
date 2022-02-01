import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"




export const LabForm = () => {
    const [labFacilitators, chooseFacilitators] = useState([])
    const [createLab, updateLab] = useState({
        name: "",
        about: "",
        address: "",
        date: "",
        time: "",
        facilitatorId: ""
    })
    const currentUser = parseInt(localStorage.getItem("colab_customer"))
    const history = useHistory()

    const submitLab = (evt) => {
        evt.preventDefault()

        const newLab = {
            name: createLab.name,
            about: createLab.about,
            address: createLab.address,
            date: createLab.date,
            time: createLab.time,
            facilitatorId: createLab.facilitatorId,
            collaboratorId: currentUser
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLab)
        }

        return fetch("http://localhost:8088/labs", fetchOption)
            .then(() => {
                history.push("/labs")
             })
    }
        

    useEffect(
        () => {
            fetch("http://localhost:8088/facilitators")
                .then(res => res.json())
                .then((facilitatorArray) => {
                    chooseFacilitators(facilitatorArray)
                })
        },
        []
    )
    return (
        <form className="labForm">
        <h2 className="labForm__title">Create A LAB</h2>
        <fieldset>
        <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.name = evt.target.value
                            updateLab(copy)
                        }
                    }
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of this LAB"
                />
            </div>
            <div className="form-group">
                <label htmlFor="about">About:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.about = evt.target.value
                            updateLab(copy)
                        }
                    }
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="What do you want to do in this LAB?"
                />
            </div>
            <div className="form-group">
                <label htmlFor="about">Address:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.address = evt.target.value
                            updateLab(copy)
                        }
                    }
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="address"
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.date = evt.target.value
                            updateLab(copy)
                        }
                    }
                    required autoFocus
                    type="date"
                    className="form-control"
                    placeholder="date for the LAB"
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.time = evt.target.value
                            updateLab(copy)
                        }
                    }
                    required autoFocus
                    type="time"
                    className="form-control"
                    placeholder="Time of LAB"
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="facilitator">Facilitator:</label>
                    <select name="facilitator" className="form-control"
                     onChange={
                        (evt) => {
                            const copy = {...createLab}
                            copy.facilitatorId = evt.target.value
                            updateLab(copy)
                        }
                    }>
                        <option value="0">Select A Facilitator</option>
                        {
                            labFacilitators.map(
                                (facilitator) => {
                                    return <option id={`facilitator--${facilitator.id}`} key={facilitator.id} value={facilitator.id}>
                                {facilitator.name}
                                </option>
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>
        <button onClick={submitLab} className="btn btn-primary">
            Create
        </button>
    </form>  
    )
}