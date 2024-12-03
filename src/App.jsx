import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import "./App.css";
import { Box } from "@chakra-ui/react";

export const App = () => {
  // Your state code here
  // eslint-disable-next-line no-unused-vars
  const [selectedRecipe, setSelectedRecipe] = useState("");
  return (
    <Box className="main-container">
      {selectedRecipe ? (
        <Box className="recipe-page">
          <RecipePage
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe()}
          />
        </Box>
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} />
      )}
      {/* <RecipePage recipe={"recipe"} /> */}
    </Box>
  );
};
