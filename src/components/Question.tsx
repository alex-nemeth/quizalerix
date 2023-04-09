import { useState, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

interface QuestionProp {
    questionData: QuestionModel;
    onSelected: (question: string, answer: string) => void;
}

export default function Question({ questionData, onSelected }: QuestionProp) {
    const [question] = useState(questionData);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        let answersArr = [];
        answersArr.push(question.correctAnswer);
        question.incorrectAnswers.map((answer: string) => {
            answersArr.push(answer);
        });
        setAnswers(answersArr);
    }, []);

    function selectAnswer(e: any) {
        const { name, value } = e.target;
        onSelected(name, value);
    }

    function renderOptions() {
        return answers.map((answer: string) => {
            return (
                <>
                    <button
                        className={
                            "selection--btn " +
                            (question.question != answer && "selected")
                        }
                        name={question.question}
                        value={answer}
                        onClick={selectAnswer}
                    >
                        {answer}
                    </button>
                </>
            );
        });
    }

    return (
        <>
            {question.question}
            {renderOptions()}
        </>
    );
}
