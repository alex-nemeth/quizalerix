import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import OpenTriviaApi from "../api/OpenTriviaApi";
import Question from "./Question";

interface QuestionsProp {
    params: QuizSelectionModel;
    onSubmit: (answers: QuestionAnswerModel[]) => void;
}

export default function Questions({ params, onSubmit }: QuestionsProp) {
    const openTriviaApi = new OpenTriviaApi();

    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const [selected, setSelected] = useState<QuestionAnswerModel[]>([]);
    const [apiError, setApiError] = useState<boolean>(false);

    useEffect(() => {
        fetch(openTriviaApi.constructQuestionsUrl(params))
            .then((response) => response.json())
            .then((data) => {
                if (data.response_code !== 0) {
                    setApiError(true);
                } else {
                    setQuestions(
                        openTriviaApi.mapResponseToQuestionModel(data.results)
                    );

                    questions.map((question: QuestionModel) => {
                        setSelected((prevSelected) => {
                            return { ...prevSelected, [question.question]: "" };
                        });
                    });
                }
            })
            .catch((error) => {
                setApiError(true);
            });
    }, []);

    function onSelected(question: string, answer: string) {
        selected.push({
            correctAnswer: question,
            selectedAnswer: answer,
        } as QuestionAnswerModel);

        setSelected(selected);
        console.log(selected);
    }

    function displayQuestions(): ReactNode[] {
        return questions.map((question) => (
            <div>
                <Question onSelected={onSelected} questionData={question} />
            </div>
        ));
    }

    function renderQuestions(): ReactNode {
        return (
            <>
                {displayQuestions()}
                <Link to="/result">
                    <button onClick={() => onSubmit(selected)}>Submit</button>
                </Link>
            </>
        );
    }

    function renderError(): ReactNode {
        return (
            <>
                <h1>Something went wrong.</h1>
                <p>Unable to generate quiz questions. Please try again.</p>
            </>
        );
    }

    return <div>{apiError ? renderError() : renderQuestions()}</div>;
}
