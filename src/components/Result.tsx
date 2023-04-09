import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Result(props: any) {
    const [answers, setAnswers] = useState([{ correct: "", selected: "" }]);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [totalNumberOfAnswers] = useState(props.answers.length);

    useEffect(() => {
        setAnswers(props.answers);

        evaluateAnswers();
    });

    function evaluateAnswers(): void {
        let countCorrectAnswers: number = 0;

        answers.forEach((answer) => {
            if (isCorrect(answer.correct, answer.selected)) {
                setNumberOfCorrectAnswers(++countCorrectAnswers);
            }
        });
    }

    function isCorrect(correctAnswer: string, selectedAnswer: string): boolean {
        return correctAnswer === selectedAnswer;
    }

    return (
        <div>
            <div>
                <p>
                    Number of corect answers {numberOfCorrectAnswers} out of{" "}
                    {totalNumberOfAnswers}
                </p>
            </div>
            <Link to="/">
                <button
                    onClick={() => props.navigate(1)}
                    className="selection--start-btn"
                >
                    New quiz
                </button>
            </Link>
        </div>
    );
}
