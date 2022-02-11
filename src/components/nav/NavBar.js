import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
        <header className="header"></header>
        <ul className="navbar">
        <li className="navbar__item">
            co-LAB
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/facilitators">Facilitators</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/labs">LABs</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/lab/create">Create A LAB</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                  onClick={
                      () => {
                          localStorage.removeItem("colab_customer")
                      }
                  }>
                  Logout
                </Link>
            </li>
        </ul>
        </>
    )
}