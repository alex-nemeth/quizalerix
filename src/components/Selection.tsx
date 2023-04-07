import react, { useState } from "react";
import OpenTriviaCategories from "./OpenTriviaCategories";

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
            <p className="selection--label">Category</p>
            <OpenTriviaCategories
                handleChange={changeState}
                selected={state.category}
            />
            <p className="selection--label">{state.numOfQuestions}</p>
            <input
                type="range"
                className="selection--range"
                min="1"
                max="50"
                name="numOfQuestions"
                value={state.numOfQuestions}
                onChange={changeState}
            ></input>
            <p className="selection--label">Type</p>
            <div className="selection--buttons">
                <button name="type" value="" className="selection--btn">
                    Any
                </button>
                <button
                    onClick={changeState}
                    name="type"
                    value="multiple"
                    className="selection--btn"
                >
                    Multiple Choice
                </button>
                <button
                    onClick={changeState}
                    name="type"
                    value="boolean"
                    className="selection--btn"
                >
                    True / False
                </button>
            </div>
            <p className="selection--label">Difficulty</p>
            <div className="selection--buttons">
                <button
                    name="difficulty"
                    value=""
                    onClick={changeState}
                    className="selection--btn"
                >
                    Any
                </button>
                <button
                    name="difficulty"
                    value="easy"
                    onClick={changeState}
                    className="selection--btn"
                >
                    Easy
                </button>
                <button
                    name="difficulty"
                    value="medium"
                    onClick={changeState}
                    className="selection--btn"
                >
                    Medium
                </button>
                <button
                    name="difficulty"
                    value="hard"
                    onClick={changeState}
                    className="selection--btn"
                >
                    Hard
                </button>
            </div>
            <button
                onClick={() => props.loadParams(state)}
                className="selection--btn"
            >
                Start
            </button>
        </div>
    );
}
