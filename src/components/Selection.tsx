import react, { ReactNode, useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import QuizSelectionModel from "../models/QuizSelectionModel";
import ButtonGroupButton from "./inputs/ButtonGroupButton";

interface SelectionProps {
    onLoadParams: (model: QuizSelectionModel) => void;
}

export default function Selection({ onLoadParams }: SelectionProps) {
    const [state, setState] = useState<QuizSelectionModel>({
        category: "",
        numOfQuestions: 5,
        type: "",
        difficulty: "",
    });

    function onChange(event: any) {
        setState((prevState) => {
            const { name, value } = event.target;
            return {
                ...prevState,
                [name]: value,
            };
        });
        console.log(state);
    }

    function renderInputName(name: string): ReactNode {
        return <p className="fw-bold">{name}</p>;
    }

    return (
        <div className="d-flex flex-column gap-5 m-4">
            <div>
                {renderInputName("Number of questions")}
                <div>
                    <span>{state.numOfQuestions}</span>
                    <input
                        type="range"
                        className="form-range"
                        min="1"
                        max="50"
                        name="numOfQuestions"
                        value={state.numOfQuestions}
                        onChange={onChange}
                    ></input>
                </div>
            </div>
            <div>
                {renderInputName("Category")}
                <OpenTriviaCategories
                    selected={state.category}
                    onChange={onChange}
                />
            </div>
            <div className="row">
                {renderInputName("Number of questions")}
                <div className="btn-group" role="group">
                    <ButtonGroupButton
                        id="type1"
                        name="type"
                        value=""
                        onChange={onChange}
                        buttonText="Any"
                        isDefaultValue={true}
                    />
                    <ButtonGroupButton
                        id="type2"
                        name="type"
                        value="multiple"
                        onChange={onChange}
                        buttonText="Multiple Choice"
                    />
                    <ButtonGroupButton
                        id="type3"
                        name="type"
                        value="boolean"
                        onChange={onChange}
                        buttonText="True or False"
                    />
                </div>
            </div>
            <div className="row">
                {renderInputName("Difficulty")}
                <div className="btn-group " role="group">
                    <ButtonGroupButton
                        id="difficulty1"
                        name="difficulty"
                        value=""
                        onChange={onChange}
                        buttonText="Any"
                        isDefaultValue={true}
                    />
                    <ButtonGroupButton
                        id="difficulty2"
                        name="difficulty"
                        value="easy"
                        onChange={onChange}
                        buttonText="Easy"
                    />
                    <ButtonGroupButton
                        id="difficulty3"
                        name="difficulty"
                        value="medium"
                        onChange={onChange}
                        buttonText="Medium"
                    />
                    <ButtonGroupButton
                        id="difficulty4"
                        name="difficulty"
                        value="hard"
                        onChange={onChange}
                        buttonText="Hard"
                    />
                </div>
            </div>
            <Link to="/quiz">
                <div className="text-center">
                    <button
                        onClick={() => onLoadParams(state)}
                        className="btn btn-lg btn-outline-lightblue px-5"
                    >
                        Start Quiz
                    </button>
                </div>
            </Link>
        </div>
    );
}
