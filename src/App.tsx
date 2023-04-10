import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Questions from "./components/Questions";
import Result from "./components/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/esm/Container";
import QuizSelectionModel from "./models/QuizSelectionModel";
import QuestionAnswerModel from "./models/QuestionAnswerModel";

export default function App() {
    const [params, setParams] = useState<QuizSelectionModel>({
        category: "",
        numOfQuestions: 5,
        type: "",
        difficulty: "",
    });
    const [answers, setAnswers] = useState<QuestionAnswerModel[]>([]);

    function onLoadParams(parameters: QuizSelectionModel) {
        setParams(parameters);
        console.log(params);
    }

    function onSubmit(answersData: QuestionAnswerModel[]) {
        setAnswers(answersData);
        console.log(answers);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/selection"
                    element={<Selection onLoadParams={onLoadParams} />}
                />
                <Route
                    path="/quiz"
                    element={<Questions params={params} onSubmit={onSubmit} />}
                />
                <Route
                    path="/result"
                    element={<Result questionAnswers={answers} />}
                />
            </Routes>
        </div>
    );
}
