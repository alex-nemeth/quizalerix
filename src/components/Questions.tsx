import { useState, useEffect } from "react";
import OpenTriviaApi from "../api/OpenTriviaApi";
import Question from "./Question";

export default function Questions(props: any) {
  const openTriviaApi = new OpenTriviaApi();

  const [state, setState] = useState({ questions: [], params: props.params });

  useEffect(() => {
    fetch(openTriviaApi.constructQuestionsUrl(state.params))
      .then((response) => response.json())
      .then((data) => setState({ ...state, questions: data.results }));

    console.log(openTriviaApi.constructQuestionsUrl(state.params));
    console.log(state.questions);
  }, []);

  function displayQuestions(): JSX.Element[] {
    return state.questions.map((question) => (
      <div>
        <Question data={question} />
      </div>
    ));
  }

  return <div>{displayQuestions()};</div>;
}
