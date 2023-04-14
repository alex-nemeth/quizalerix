import { Link } from "react-router-dom";

interface ActionButtonProps {
    text: string;
    linkTo: string;
    onPress?: () => void;
}

export default function ActionButton({
    text,
    linkTo,
    onPress,
}: ActionButtonProps) {
    return (
        <div className="text-center">
            <Link to={linkTo}>
                <button
                    className="btn btn-lg btn-outline-lightblue px-5"
                    onClick={onPress}
                >
                    {text}
                </button>
            </Link>
        </div>
    );
}
