import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Question(props: any) {
    const [question, setQuestion] = useState(props.data);
    const [answers, setAnswers] = useState([""]);

    useEffect(() => {
        let answersArr = [];
        answersArr.push(question.correct_answer);
        question.incorrect_answers.map((answer: any) => {
            answersArr.push(answer);
        });
        setAnswers(answersArr);
    }, []);

    function selectAnswer(e: any) {
        const { name, value } = e.target;
        props.select(name, value);
    }

    function renderOptions() {
        return answers.map((answer: any) => {
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
