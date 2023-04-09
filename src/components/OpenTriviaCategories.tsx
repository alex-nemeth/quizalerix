import { ReactNode, useEffect, useState } from "react";
import OpenTriviaApi from "../api/OpenTriviaApi";
import { nanoid } from "nanoid";

interface OpenTriviaCategoriesProps {
    onChange: (event: any) => void;
}

export default function OpenTriviaCategories({
    onChange,
}: OpenTriviaCategoriesProps) {
    let openTriviaApi = new OpenTriviaApi();

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        fetch(openTriviaApi.categoriesUrl)
            .then((response) => response.json())
            .then((data) => setCategories(data.trivia_categories));
    }, []);

    function createOptions(): ReactNode[] {
        return categories.map((category: CategoryModel) => {
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
            onChange={onChange}
        >
            <option value="" key={nanoid()}>
                Any
            </option>
            {createOptions()}
        </select>
    );
}
