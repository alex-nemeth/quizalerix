import { useState, useEffect } from "react";
import { shuffleArray } from "../../utils/Utils";
import QuestionModel from "../../models/QuestionModel";
import QuestionWithNumber from "./QuestionWithNumber";
import QuestionAnswers from "./QuestionAnswers";

interface QuestionProps {
    questionData: QuestionModel;
    onSelected: (questionNumber: number, answer: string) => void;
}

export default function Question({ questionData, onSelected }: QuestionProps) {
    const [question] = useState(questionData);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        let answersArr: string[] = [];

        answersArr.push(question.correctAnswer);
        answersArr.push(...question.incorrectAnswers);

        shuffleArray(answersArr);

        setAnswers(answersArr);
    }, []);

    return (
        <>
            <QuestionWithNumber
                questionNumber={question.questionNumber}
                question={question.question}
            />

            <QuestionAnswers
                questionNumber={question.questionNumber}
                answers={answers}
                onSelected={onSelected}
            />
        </>
    );
}
