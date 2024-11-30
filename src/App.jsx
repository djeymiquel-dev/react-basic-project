import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
// import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return (
    <>
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe()}
        />
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} />
      )}
      {/* <RecipePage recipe={"recipe"} /> */}
    </>
  );
};
