import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/quizalerix-logo.png";

export default function Landing() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="img-fluid" src={logo} alt="Quizalerix" />
            <Link to="/selection">
                <button
                    type="button"
                    className="btn btn-lg btn-outline-lightblue px-4 my-5"
                >
                    Create a quiz
                </button>
            </Link>
        </div>
    );
}
