import react, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing(props: any) {
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
                <button className="landing--btn" onClick={props.nextPage}>
                    Start
                </button>
            </Link>
        </div>
    );
}
