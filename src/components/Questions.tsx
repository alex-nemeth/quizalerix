import { useState, useEffect } from "react";
import OpenTriviaApi from "../api/OpenTriviaApi";

export default function Questions(props: any) {
  const openTriviaApi = new OpenTriviaApi();

  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch(openTriviaApi.getQuestionsUrl({ numOfQuestions: 5, category: 9 }))
      .then((response) => response.json())
      .then((data) => setQuestions(data));

    console.log(
      openTriviaApi.getQuestionsUrl({ numOfQuestions: 5, category: 9 })
    );
    console.log(questions);
  }, []);

  return <div></div>;
}
