import { useEffect, useState } from "react";
import OpenTriviaApi from "./api/OpenTriviaApi";

export default function OpenTriviaCategories() {
  let openTriviaApi = new OpenTriviaApi();

  const [categories, setCategories] = useState([{ id: "", name: "" }]);

  useEffect(() => {
    fetch(openTriviaApi.categoriesUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  function createOptions(): JSX.Element[] {
    return categories.map((category) => {
      return <option value={category.id}>{category.name}</option>;
    });
  }

  return (
    <div>
      <select name="open-trivia-categories">{createOptions()}</select>
    </div>
  );
}
