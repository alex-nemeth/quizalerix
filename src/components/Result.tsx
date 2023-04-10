import { useState, useEffect, ReactNode } from "react";
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

    function displayAnswers(): ReactNode {
        return questionAnswers.map((answer) => (
            <div className="border-top">
                <p>Answer for question {answer.questionNumber}</p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: "Selected answer:" + answer.selectedAnswer,
                    }}
                ></p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: "Correct answer:" + answer.correctAnswer,
                    }}
                ></p>
            </div>
        ));
    }

    return (
        <div>
            <div>
                <h5 className="mb-4">
                    Number of corect answers {numberOfCorrectAnswers} out of{" "}
                    {totalNumberOfAnswers}
                </h5>
                {displayAnswers()}
            </div>
            <Link to="/selection">
                <button className="selection--start-btn">New quiz</button>
            </Link>
        </div>
    );
}
