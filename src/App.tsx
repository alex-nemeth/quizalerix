import { useState, useEffect } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Questions from "./components/Questions";
import Result from "./components/Result";

export default function App() {
    const [page, setPage] = useState(0);
    const [params, setParams] = useState({});
    const [answers, setAnswers] = useState();

    function nextPage() {
        setPage((prevPage) => prevPage + 1);
        console.log(page);
    }

    function loadParams(parameters: any) {
        setParams(parameters);
        setPage((prevPage) => prevPage + 1);
        console.log(params);
    }

    function sendAnswers(answersData: any) {
        setPage((prevPage) => prevPage + 1);
        setAnswers(answersData);
        console.log(answers);
    }

    function navigateTo(pageIndex: number): void {
        setPage(pageIndex);
    }

    return (
        <div className="App">
            <Header />
            {page === 0 && <Landing nextPage={nextPage} />}
            {page === 1 && (
                <Selection nextPage={nextPage} loadParams={loadParams} />
            )}
            {page === 2 && <Questions submit={sendAnswers} params={params} />}
            {page === 3 && (
                <Result
                    navigate={navigateTo}
                    answers={[
                        { correct: "True", selected: "False" },
                        { correct: "Prasivec", selected: "Prasivec" },
                        { correct: "False", selected: "False" },
                    ]}
                />
            )}
            {page === 3 && (
                <button onClick={() => console.log(answers)}>
                    Log submitted
                </button>
            )}
        </div>
    );
}
