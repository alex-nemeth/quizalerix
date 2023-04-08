import { useState, useEffect } from "react";

export default function Result(props: any) {
	const [answers, setAnswers] = useState([{ correct: "", selected: "" }]);
	const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

	useEffect(() => {
		setAnswers(props.answers);

		evaluateAnswers();
	});

	function evaluateAnswers(): void {
		let countCorrectAnswers: number = 0;

		answers.forEach((answer) => {
			if (isCorrect(answer.correct, answer.selected)) {
				setNumberOfCorrectAnswers(++countCorrectAnswers);
			}
		});
	}

	function isCorrect(correctAnswer: string, selectedAnswer: string): boolean {
		return correctAnswer === selectedAnswer;
	}

	return (
		<div>
			<p>Number of corect answers {numberOfCorrectAnswers}</p>
		</div>
	);
}
