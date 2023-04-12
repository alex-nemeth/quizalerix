import react, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Link to="/selection">
                <button
                    type="button"
                    className="btn btn-outline-lightblue px-4 my-3"
                >
                    Create a quiz
                </button>
            </Link>
        </div>
    );
}
