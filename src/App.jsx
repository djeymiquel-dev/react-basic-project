import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import "./App.css";

export const App = () => {
  // Your state code here
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return (
    <div className="main-container">
      {selectedRecipe ? (
        <div className="recipe-page">
          <RecipePage
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe()}
          />
        </div>
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} />
      )}
      {/* <RecipePage recipe={"recipe"} /> */}
    </div>
  );
};
