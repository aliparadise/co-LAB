import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/facilitators">Facilitators</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/labs">LABs</Link>
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
    )
}