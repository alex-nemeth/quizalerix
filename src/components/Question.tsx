import { useState, useEffect } from "react";

export default function Question(props: any) {
    const [question, setQuestion] = useState(props.data);
    const [answers, setAnswers] = useState([""]);
    const [selected, setSelected] = useState("default");

    useEffect(() => {
        let answersArr = [];
        answersArr.push(question.correct_answer);
        question.incorrect_answers.map((answer: any) => {
            answersArr.push(answer);
        });
        setAnswers(answersArr);
        console.log(answers);
    }, []);

    function selectAnswer(e: any) {
        setSelected(e.target.value);
    }

    function renderOptions() {
        return answers.map((answer: any) => {
            return (
                <>
                    <p>{answer}</p>
                    <input
                        type="radio"
                        name={question.question}
                        checked={selected !== ""}
                        onChange={selectAnswer}
                        value={answer}
                    ></input>
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
//  <p>{question.question}</p>
//  <p>{question.category}</p>
//  <p>{question.type}</p>
//  <p>{question.difficulty}</p>
//  <p>{question.correct_answer}</p>
//  <p>{question.incorrect_answers}</p>
