import { ReactNode } from "react";

interface ButtonGroupLabelProps {
    htmlFor: string;
    children: string;
}

export default function ButtonGroupLabel({
    htmlFor,
    children,
}: ButtonGroupLabelProps) {
    return (
        <label className="btn btn-outline-lightblue" htmlFor={htmlFor}>
            {children}
        </label>
    );
}
