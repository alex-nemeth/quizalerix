import react, { useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";
import { Link } from "react-router-dom";

export default function Selection(props: any) {
    const [state, setState] = useState({
        category: "",
        numOfQuestions: 5,
        type: "",
        difficulty: "",
    });

    function changeState(event: any) {
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
                <OpenTriviaCategories
                    handleChange={changeState}
                    selected={state.category}
                />
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
                        onChange={changeState}
                    ></input>
                </div>
            </div>
            <div className="selection--wrapper">
                <p className="selection--label">Type</p>
                <div className="selection--type-buttons">
                    <button
                        onClick={changeState}
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
                        onClick={changeState}
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
                        onClick={changeState}
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
                        onClick={changeState}
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
                        onClick={changeState}
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
                        onClick={changeState}
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
                        onClick={changeState}
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
                    onClick={() => props.loadParams(state)}
                    className="selection--start-btn"
                >
                    Start
                </button>
            </Link>
        </div>
    );
}
