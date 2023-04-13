import ButtonGroupLabel from "./ButtonGroupLabel";

interface ButtonGroupButtonProps {
    id: string;
    name: string;
    value: string;
    buttonText: string;
    isDefaultValue?: boolean;
    onChange: (event: any) => void;
}

export default function ButtonGroupButton({
    id,
    name,
    value,
    buttonText: text,
    isDefaultValue,
    onChange,
}: ButtonGroupButtonProps) {
    return (
        <>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onClick={onChange}
                className="btn-check"
                defaultChecked={isDefaultValue}
            ></input>
            <ButtonGroupLabel htmlFor={id}>{text}</ButtonGroupLabel>
        </>
    );
}
