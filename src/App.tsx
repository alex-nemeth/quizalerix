import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Questions from "./components/Questions";
import Result from "./components/Result";

export default function App() {
    const [params, setParams] = useState({});
    const [answers, setAnswers] = useState();

    function loadParams(parameters: any) {
        setParams(parameters);
        console.log(params);
    }

    function sendAnswers(answersData: any) {
        setAnswers(answersData);
        console.log(answers);
    }

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/selection"
                    element={<Selection loadParams={loadParams} />}
                />
                <Route
                    path="/quiz"
                    element={<Questions submit={sendAnswers} params={params} />}
                />
                <Route
                    path="/result"
                    element={
                        <Result
                            testAnswers={answers}
                            answers={[
                                { correct: "True", selected: "False" },
                                { correct: "Prasivec", selected: "Prasivec" },
                                { correct: "False", selected: "False" },
                            ]}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
