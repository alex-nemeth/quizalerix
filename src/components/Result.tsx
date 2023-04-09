import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ResultProps {
    questionAnswers: QuestionAnswerModel[];
}

export default function Result({ questionAnswers }: ResultProps) {
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [totalNumberOfAnswers] = useState(questionAnswers.length);

    useEffect(() => {
        evaluateAnswers();
    }, []);

    function evaluateAnswers(): void {
        let countCorrectAnswers: number = 0;

        questionAnswers.forEach((answer) => {
            if (isCorrect(answer)) {
                setNumberOfCorrectAnswers(++countCorrectAnswers);
            }
        });
    }

    function isCorrect(answer: QuestionAnswerModel): boolean {
        return answer.correctAnswer === answer.selectedAnswer;
    }

    return (
        <div>
            <div>
                <p>
                    Number of corect answers {numberOfCorrectAnswers} out of{" "}
                    {totalNumberOfAnswers}
                </p>
            </div>
            <Link to="/selection">
                <button className="selection--start-btn">New quiz</button>
            </Link>
        </div>
    );
}
