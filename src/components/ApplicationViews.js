import React from "react"
import { Route } from "react-router-dom"
import { FacilitatorList } from "./facilitators/FacilitatorList"
import { Homepage } from "./homepage/Homepage"
import { Lab } from "./labs/Lab"
import { LabForm } from "./labs/LabForm"
import { LabList } from "./labs/LabList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path={["/homepage", "/"]}>
                <Homepage />
            </Route>
            <Route exact path="/facilitators">
                <FacilitatorList />
            </Route>

            <Route exact path="/labs">
                <LabList />
            </Route>

            <Route exact path="/labs/:labId(\d+)">
                <Lab />
            </Route>

            <Route path="/lab/create">
                <LabForm />
            </Route>
        </>
    )
}