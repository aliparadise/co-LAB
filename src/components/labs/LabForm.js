import React from "react"

export const LabForm = () => {
    return (
        <form className="labForm">
        <h2 className="labForm__title">Create A LAB</h2>
        <fieldset>
        <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of this LAB"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">About:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="What do you want to do in this LAB?"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Date:</label>
                <input
                    required autoFocus
                    type="date"
                    className="form-control"
                    placeholder="date for the LAB"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Time:</label>
                <input
                    required autoFocus
                    type="time"
                    className="form-control"
                    placeholder="Time of LAB"
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Facilitator:</label>
                    <select name="location" className="form-control">
                        <option value="0">Select A Facilitator</option>
                    </select>
                </div>
            </fieldset>
        <button className="btn btn-primary">
            Create
        </button>
    </form>  
    )
}