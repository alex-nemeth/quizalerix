import react, { useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import QuizSelectionModel from "../models/QuizSelectionModel";

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

    return (
        <div className="container d-flex flex-column gap-5">
            <div className="container">
                <p>Number of questions</p>
                <div className="row d-flex">
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
            <div className="row px-2">
                <p className="selection--label">Category</p>
                <OpenTriviaCategories
                    selected={state.category}
                    onChange={onChange}
                />
            </div>
            <div className="row">
                <p className="px-4">Type</p>
                <div className="btn-group" role="group">
                    <input
                        type="radio"
                        onClick={onChange}
                        value=""
                        name="type"
                        id="type1"
                        className="btn-check variant-dark"
                        defaultChecked
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="type1"
                    >
                        Any
                    </label>
                    <input
                        type="radio"
                        onClick={onChange}
                        value="multiple"
                        name="type"
                        id="type2"
                        className="btn-check"
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="type2"
                    >
                        Multiple Choice
                    </label>
                    <input
                        type="radio"
                        onClick={onChange}
                        value="boolean"
                        name="type"
                        id="type3"
                        className="btn-check"
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="type3"
                    >
                        True or False
                    </label>
                </div>
            </div>
            <div className="row">
                <p className="px-4">Difficulty</p>
                <div className="btn-group" role="group">
                    <input
                        type="radio"
                        id="difficulty1"
                        name="difficulty"
                        value=""
                        onClick={onChange}
                        className="btn-check"
                        defaultChecked
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="difficulty1"
                    >
                        Any
                    </label>
                    <input
                        type="radio"
                        id="difficulty2"
                        name="difficulty"
                        value="easy"
                        onClick={onChange}
                        className="btn-check"
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="difficulty2"
                    >
                        Easy
                    </label>
                    <input
                        type="radio"
                        id="difficulty3"
                        name="difficulty"
                        value="medium"
                        onClick={onChange}
                        className="btn-check"
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="difficulty3"
                    >
                        Medium
                    </label>
                    <input
                        type="radio"
                        id="difficulty4"
                        name="difficulty"
                        value="hard"
                        onClick={onChange}
                        className="btn-check"
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor="difficulty4"
                    >
                        Hard
                    </label>
                </div>
            </div>
            <div className="container p-3 text-center">
                <div className="btn-group">
                    <Link to="/quiz">
                        <button
                            onClick={() => onLoadParams(state)}
                            className="btn btn-lg btn-outline-lightblue px-5"
                        >
                            Start Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
