import { useEffect, useState } from "react";
import OpenTriviaApi from "../api/OpenTriviaApi";
import { nanoid } from "nanoid";

export default function OpenTriviaCategories(props: any) {
  let openTriviaApi = new OpenTriviaApi();

  const [categories, setCategories] = useState([{ id: "", name: "" }]);

  useEffect(() => {
    fetch(openTriviaApi.categoriesUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  function createOptions(): JSX.Element[] {
    return categories.map((category) => {
      return (
        <option value={category.id} key={nanoid()}>
          {category.name}
        </option>
      );
    });
  }

  return (
    <select
      className="selection--dropdown"
      name="category"
      value={props.selected}
      onChange={props.handleChange}
    >
      <option value="" key={nanoid()}>
        Any
      </option>
      {createOptions()}
    </select>
  );
}
