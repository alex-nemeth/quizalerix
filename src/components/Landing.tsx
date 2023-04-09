import react, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="landing--container">
            <div className="landing--text">
                <p>
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
            </div>
            <Link to="/selection">
                <button className="landing--btn">Start</button>
            </Link>
        </div>
    );
}
