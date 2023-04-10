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
        return answers.map((answer: string) => {
            return (
                <>
                    <button
                        className={
                            "selection--btn " +
                            (question.question != answer && "selected")
                        }
                        name={nanoid()}
                        onClick={() =>
                            onSelected(question.questionNumber, answer)
                        }
                        dangerouslySetInnerHTML={{
                            __html: answer,
                        }}
                    ></button>
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
            {renderOptions()}
        </>
    );
}
