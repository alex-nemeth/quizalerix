interface ActionButtonProps {
    text: string;
    onPress?: () => void;
}

export default function ActionButton({ text, onPress }: ActionButtonProps) {
    return (
        <div className="text-center">
            <button
                className="btn btn-lg btn-outline-lightblue px-5"
                onClick={onPress}
            >
                {text}
            </button>
        </div>
    );
}
