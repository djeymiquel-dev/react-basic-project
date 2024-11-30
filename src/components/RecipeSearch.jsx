import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { RecipePage } from "../pages/RecipePage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
      <TextInput
        changeFn={handleChange}
        variant={"flushed"}
        borderRadius={20}
      />
      <RecipePage clickFn={clickFn} recipe={matchedRecipes} />
    </>
  );
};
