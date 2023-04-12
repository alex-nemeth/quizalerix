interface QuestionAnswersProps {
    questionNumber: number;
    answers: string[];
    onSelected: (questionNumber: number, answer: string) => void;
}

export default function QuestionAnswers({
    questionNumber,
    answers,
    onSelected,
}: QuestionAnswersProps) {
    function renderOptions() {
        return answers.map((answer: string, answerNumber: number) => {
            return (
                <>
                    <input
                        type="radio"
                        className="btn-check"
                        name={`"${questionNumber}"`}
                        id={`${questionNumber}-${answerNumber}`}
                        onClick={() => onSelected(questionNumber, answer)}
                    ></input>
                    <label
                        className="btn btn-outline-lightblue"
                        htmlFor={`${questionNumber}-${answerNumber}`}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    ></label>
                </>
            );
        });
    }

    return (
        <div className="btn-group gap-0" role="group">
            {renderOptions()}
        </div>
    );
}
