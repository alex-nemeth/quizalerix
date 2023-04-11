import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import QuestionAnswerModel from "../models/QuestionAnswerModel";

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
            <div className="d-flex flex-column border-top">
                <p>Answer for question {answer.questionNumber}</p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: displaySelectedAnswer(answer.selectedAnswer),
                    }}
                ></p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: displayCorrectAnswer(answer),
                    }}
                ></p>
            </div>
        ));
    }

    function displaySelectedAnswer(selectedAnswer: string): string {
        return (
            "Selected answer: " +
            (selectedAnswer === "" ? "No answer was selected" : selectedAnswer)
        );
    }

    function displayCorrectAnswer(answer: QuestionAnswerModel): string {
        return "Correct answer: " + answer.correctAnswer;
    }

    return (
        <div className="row">
            <div>
                <h5 className="mb-4">
                    Number of corect answers {numberOfCorrectAnswers} out of{" "}
                    {totalNumberOfAnswers}
                </h5>
                {displayAnswers()}
            </div>
            <Link to="/selection">
                <div className="row p-2">
                    <button className="btn btn-purple">New quiz</button>
                </div>
            </Link>
        </div>
    );
}
