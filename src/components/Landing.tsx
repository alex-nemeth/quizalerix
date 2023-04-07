import react, { useState } from "react";

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
            <button className="landing--btn" onClick={props.nextPage}>
                Start
            </button>
        </div>
    );
}
