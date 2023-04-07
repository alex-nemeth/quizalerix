import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {}, [count]);

    function addCount() {
        setCount(count + 1);
    }

    return <div className="App"></div>;
}

export default App;
