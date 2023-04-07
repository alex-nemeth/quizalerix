import { useState, useEffect } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Selection from "./components/Selection";

export default function App() {
    const [page, setPage] = useState(0);

    function nextPage() {
        setPage((prevPage) => prevPage + 1);
        console.log(page);
    }

    return (
        <div className="App">
            <Header />
            {page === 0 && <Landing nextPage={nextPage} />}
            {page === 1 && <Selection nextPage={nextPage} />}
        </div>
    );
}
