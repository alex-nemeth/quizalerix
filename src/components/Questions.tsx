import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OpenTriviaApi from "../api/OpenTriviaApi";
import Question from "./Question";

export default function Questions(props: any) {
    const openTriviaApi = new OpenTriviaApi();

    const [state, setState] = useState({ questions: [], params: props.params });
    const [selected, setSelected] = useState([{}]);

    useEffect(() => {
        fetch(openTriviaApi.constructQuestionsUrl(state.params))
            .then((response) => response.json())
            .then((data) => setState({ ...state, questions: data.results }));
        state.questions.map((question: any) => {
            setSelected((prevSelected) => {
                return { ...prevSelected, [question.question]: "" };
            });
        });
    }, []);

    function selectOption(question: string, answer: string) {
        setSelected((prevSelected) => {
            return {
                ...prevSelected,
                [question]: answer,
            };
        });
        console.log(selected);
    }

    function displayQuestions(): JSX.Element[] {
        return state.questions.map((question) => (
            <div>
                <Question select={selectOption} data={question} />
            </div>
        ));
    }

    return (
        <div>
            {displayQuestions()}
            <Link to="/result">
                <button onClick={() => props.submit(selected)}>Submit</button>
            </Link>
        </div>
    );
}
