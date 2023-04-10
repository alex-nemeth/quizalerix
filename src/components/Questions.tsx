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
    const [answers, setAnswers] = useState<QuestionAnswerModel[]>([]);
    const [apiError, setApiError] = useState<boolean>(false);

    useEffect(() => {
        fetch(openTriviaApi.constructQuestionsUrl(params))
            .then((response) => response.json())
            .then((data) => {
                if (data.response_code !== 0) {
                    setApiError(true);
                } else {
                    let mappedQuestions =
                        openTriviaApi.mapResponseToQuestionModel(data.results);

                    setQuestions(mappedQuestions);

                    PrepareAnswersArray(mappedQuestions);
                }
            })
            .catch((error) => {
                setApiError(true);
            });
    }, []);

    function PrepareAnswersArray(prepareFrom: QuestionModel[]) {
        let answers: QuestionAnswerModel[] = [];

        prepareFrom.map((question: QuestionModel) => {
            let answer = {
                questionNumber: question.questionNumber,
                correctAnswer: question.correctAnswer,
                selectedAnswer: "",
            } as QuestionAnswerModel;

            answers.push(answer);
        });

        setAnswers(answers);
    }

    function onSelected(questionNumber: number, answer: string) {
        let copyOfAnswers = answers.slice();
        console.log(questionNumber);
        let foundAnswer = copyOfAnswers.find(
            (a) => a.questionNumber === questionNumber
        );

        foundAnswer!.selectedAnswer = answer;

        setAnswers(copyOfAnswers);
    }

    function displayQuestions(): ReactNode[] {
        return questions.map((question) => (
            <div className="d-flex flex-column gap-1">
                <Question onSelected={onSelected} questionData={question} />
            </div>
        ));
    }

    function renderQuestions(): ReactNode {
        return (
            <>
                <div className="d-flex flex-column gap-5">
                    {displayQuestions()}
                </div>
                <Link to="/result">
                    <div className="row my-4">
                        <button
                            className="btn btn-purple"
                            onClick={() => onSubmit(answers)}
                        >
                            Submit
                        </button>
                    </div>
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

    return (
        <div className="d=flex flex-column m-5">
            {apiError ? renderError() : renderQuestions()}
        </div>
    );
}
