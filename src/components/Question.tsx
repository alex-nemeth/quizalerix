import { nanoid } from "nanoid";
import { useState, useEffect, MouseEvent } from "react";
import { shuffleArray } from "../utils/Utils";

interface QuestionProp {
    questionData: QuestionModel;
    onSelected: (questionNumber: number, answer: string) => void;
}

export default function Question({ questionData, onSelected }: QuestionProp) {
    const [question] = useState(questionData);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        let answersArr: string[] = [];

        answersArr.push(question.correctAnswer);
        answersArr.push(...question.incorrectAnswers);

        shuffleArray(answersArr);

        setAnswers(answersArr);
    }, []);

    function renderOptions() {
        return answers.map((answer: string, answerNumber: number) => {
            return (
                <>
                    <input
                        type="radio"
                        className="btn-check variant-dark"
                        name={`"${question.questionNumber}"`}
                        id={`${question.question}-${answerNumber}`}
                        onClick={() =>
                            onSelected(question.questionNumber, answer)
                        }
                    ></input>
                    <label
                        className="btn btn-outline-primary"
                        htmlFor={`${question.question}-${answerNumber}`}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    ></label>
                </>
            );
        });
    }

    return (
        <>
            <p
                dangerouslySetInnerHTML={{
                    __html: question.questionNumber + ". " + question.question,
                }}
            ></p>
            <div className="btn-group gap-4" role="group">
                {renderOptions()}
            </div>
        </>
    );
}
