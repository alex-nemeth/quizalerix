import react from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1 className="header--title">
                <Link to="/">Quizalerix</Link>
            </h1>
        </div>
    );
}
