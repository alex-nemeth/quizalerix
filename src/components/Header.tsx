import logo from "../images/quizalerix-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid text-center mb-4">
            <Link to="/">
                <img className="img-fluid" width={512} src={logo}></img>
            </Link>
        </div>
    );
}
