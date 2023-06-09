interface QuestionWithNumber {
    questionNumber: number;
    question: string;
}

export default function QuestionWithNumber({
    questionNumber,
    question,
}: QuestionWithNumber) {
    return (
        <div className="d-flex mb-3">
            <div>
                <span className="question-number-circle bg-accent d-flex justify-content-center align-items-center">
                    {questionNumber}
                </span>
            </div>
            <div className="mt-1">
                <p
                    className="fw-bold"
                    dangerouslySetInnerHTML={{
                        __html: question,
                    }}
                ></p>
            </div>
        </div>
    );
}
