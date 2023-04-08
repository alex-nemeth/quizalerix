import { useState, useEffect } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Selection from "./components/Selection";
import Questions from "./components/Questions";

export default function App() {
    const [page, setPage] = useState(0);
    const [params, setParams] = useState({});

    function nextPage() {
        setPage((prevPage) => prevPage + 1);
        console.log(page);
    }

    function loadParams(parameters: any) {
        setParams(parameters);
        setPage((prevPage) => prevPage + 1);
        console.log(params);
    }

    function sendAnswers() {
        setPage((prevPage) => prevPage + 1);
    }

    return (
        <div className="App">
            <Header />
            {page === 0 && <Landing nextPage={nextPage} />}
            {page === 1 && (
                <Selection nextPage={nextPage} loadParams={loadParams} />
            )}
            {page === 2 && <Questions submit={sendAnswers} params={params} />}
        </div>
    );
}
