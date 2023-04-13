interface ActionButtonProps {
    text: string;
}

export default function ActionButton({ text }: ActionButtonProps) {
    return (
        <div className="text-center">
            <button className="btn btn-lg btn-outline-lightblue px-5">
                {text}
            </button>
        </div>
    );
}
