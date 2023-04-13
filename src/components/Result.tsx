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
            <div className="d-flex flex-column my-3">
                <div className="d-flex">
                    <span className="question-number-circle bg-accent d-flex justify-content-center align-items-center">
                        {answer.questionNumber}
                    </span>
                    <h5
                        dangerouslySetInnerHTML={{ __html: answer.question }}
                    ></h5>
                </div>
                <p
                    className="mx-5"
                    dangerouslySetInnerHTML={{
                        __html: displayCorrectAnswer(answer),
                    }}
                ></p>
                <p
                    className={
                        answer.correctAnswer === answer.selectedAnswer
                            ? "mx-5 correct--answer"
                            : "mx-5 wrong--answer"
                    }
                    dangerouslySetInnerHTML={{
                        __html: displaySelectedAnswer(answer.selectedAnswer),
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
                <h4 className="mb-4 result--heading">
                    You answered {numberOfCorrectAnswers} out of{" "}
                    {totalNumberOfAnswers} questions correctly (
                    {(numberOfCorrectAnswers / totalNumberOfAnswers) * 100}%)
                </h4>
                {displayAnswers()}
            </div>
            <Link to="/selection">
                <div className="text-center p-2">
                    <button className="btn btn-outline-lightblue px-5">
                        New quiz
                    </button>
                </div>
            </Link>
        </div>
    );
}
