import react, { useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";
import { Link } from "react-router-dom";

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
        <div className="selection--container">
            <div className="selection--wrapper">
                <p className="selection--label">Category</p>
                <OpenTriviaCategories onChange={onChange} />
            </div>
            <div className="selection--wrapper">
                <p className="selection--label">Number of questions</p>
                <div className="selection--range-container">
                    <p className="selection--range-value">
                        {state.numOfQuestions}
                    </p>
                    <input
                        type="range"
                        className="selection--range"
                        min="1"
                        max="50"
                        name="numOfQuestions"
                        value={state.numOfQuestions}
                        onChange={onChange}
                    ></input>
                </div>
            </div>
            <div className="selection--wrapper">
                <p className="selection--label">Type</p>
                <div className="selection--type-buttons">
                    <button
                        onClick={onChange}
                        name="type"
                        value=""
                        className={
                            "selection--btn " +
                            (state.type === "" && "selected")
                        }
                    >
                        Any
                    </button>
                    <button
                        onClick={onChange}
                        name="type"
                        value="multiple"
                        className={
                            "selection--btn " +
                            (state.type === "multiple" && "selected")
                        }
                    >
                        Multiple Choice
                    </button>
                    <button
                        onClick={onChange}
                        name="type"
                        value="boolean"
                        className={
                            "selection--btn " +
                            (state.type === "boolean" && "selected")
                        }
                    >
                        True / False
                    </button>
                </div>
            </div>
            <div className="selection--wrapper">
                <p className="selection--label">Difficulty</p>
                <div className="selection--difficulty-buttons">
                    <button
                        name="difficulty"
                        value=""
                        onClick={onChange}
                        className={
                            "selection--dif-btn " +
                            (state.difficulty === "" && "selected")
                        }
                    >
                        Any
                    </button>
                    <button
                        name="difficulty"
                        value="easy"
                        onClick={onChange}
                        className={
                            "selection--dif-btn " +
                            (state.difficulty === "easy" && "selected")
                        }
                    >
                        Easy
                    </button>
                    <button
                        name="difficulty"
                        value="medium"
                        onClick={onChange}
                        className={
                            "selection--dif-btn " +
                            (state.difficulty === "medium" && "selected")
                        }
                    >
                        Medium
                    </button>
                    <button
                        name="difficulty"
                        value="hard"
                        onClick={onChange}
                        className={
                            "selection--dif-btn " +
                            (state.difficulty === "hard" && "selected")
                        }
                    >
                        Hard
                    </button>
                </div>
            </div>
            <Link to="/quiz">
                <button
                    onClick={() => onLoadParams(state)}
                    className="selection--start-btn"
                >
                    Start
                </button>
            </Link>
        </div>
    );
}
