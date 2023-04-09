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

    useEffect(() => {
        fetch(openTriviaApi.constructQuestionsUrl(params))
            .then((response) => response.json())
            .then((data) =>
                setQuestions(
                    openTriviaApi.mapResponseToQuestionModel(data.results)
                )
            );

        questions.map((question: QuestionModel) => {
            setSelected((prevSelected) => {
                return { ...prevSelected, [question.question]: "" };
            });
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

    return (
        <div>
            {displayQuestions()}
            <Link to="/result">
                <button onClick={() => onSubmit(selected)}>Submit</button>
            </Link>
        </div>
    );
}
