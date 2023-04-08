import { useState, useEffect } from "react";

export default function Question(props: any) {
  const [question] = useState(props.data);

  return (
    <div>
      <p>{question.question}</p>
      <p>{question.category}</p>
      <p>{question.type}</p>
      <p>{question.difficulty}</p>
      <p>{question.correct_answer}</p>
      <p>{question.incorrect_answers}</p>
    </div>
  );
}
