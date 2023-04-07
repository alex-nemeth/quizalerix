import react from "react";

export default function Selection(props: any) {
    return (
        <div className="selection--container">
            <form>
                <p className="selection--label">Category</p>
                <input type="select" className="selection--dropdown"></input>
                <p className="selection--label">Questions</p>
                <input type="range" className="selection--range"></input>
                <p className="selection--label">Type</p>
                <div className="selection--buttons">
                    <button className="selection--btn">Any</button>
                    <button className="selection--btn">Multiple Choice</button>
                    <button className="selection--btn">True / False</button>
                </div>
                <p className="selection--label">Difficulty</p>
                <div className="selection--buttons">
                    <button className="selection--btn">Easy</button>
                    <button className="selection--btn">Medium</button>
                    <button className="selection--btn">Hard</button>
                </div>
            </form>
            <button className="selection--btn">Start</button>
        </div>
    );
}
