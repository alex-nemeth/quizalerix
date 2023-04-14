import react, { ReactNode, useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import QuizSelectionModel from "../models/QuizSelectionModel";
import ButtonGroupButton from "./inputs/ButtonGroupButton";
import ActionButton from "./inputs/ActionButton";

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
        <div className="d-flex flex-column gap-5 m-4 container selection-max-width">
            <div>
                {renderInputName("Select number of questions")}
                <div className="row gx-1">
                    <div className="col-sm-1 text-center">
                        <label
                            htmlFor="numOfQuestions-id"
                            className="col-form-label"
                        >
                            {state.numOfQuestions}
                        </label>
                    </div>

                    <div className="col mt-2">
                        <input
                            type="range"
                            className="form-range"
                            min="1"
                            max="50"
                            id="numOfQuestions-id"
                            name="numOfQuestions"
                            value={state.numOfQuestions}
                            onChange={onChange}
                        ></input>
                    </div>
                </div>
            </div>
            <div>
                {renderInputName("Select category")}
                <OpenTriviaCategories
                    selected={state.category}
                    onChange={onChange}
                />
            </div>
            <div className="row">
                {renderInputName("Select type")}
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
                {renderInputName("Select difficulty")}
                <div className="btn-group" role="group">
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
            <ActionButton
                text="Start Quiz"
                linkTo="/quiz"
                onPress={() => onLoadParams(state)}
            />
        </div>
    );
}
