import react, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Landing() {
    return (
        <div className="d-flex flex-column align-items-center">
            <p>Welcome to Quizalerix!</p>
            <p>
                Our trivia app that alows you to choose from various categories
                fueled by API of OpenTrivia.
            </p>
            <p>Click the button below to set up your quiz!</p>
            <Link to="/selection">
                <Button variant="purple">Start</Button>
            </Link>
        </div>
    );
}
