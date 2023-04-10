import react from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid text-center">
            <h1 className="row-1">
                <Link to="/">Quizalerix</Link>
            </h1>
        </div>
    );
}
