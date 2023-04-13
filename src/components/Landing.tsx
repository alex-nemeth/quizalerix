import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/quizalerix-logo.png";
import ActionButton from "./inputs/ActionButton";

export default function Landing() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <img className="img-fluid" src={logo} alt="Quizalerix logo" />
            <Link to="/selection">
                <ActionButton text={"Create a quiz"} />
            </Link>
        </div>
    );
}
