import {
  Center,
  Heading,
  Card,
  CardBody,
  Flex,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { DietLabels } from "../components/DietLabels";
import { RecipeSearchInput } from "../components/RecipeSearchInput";
import { Cautions } from "../components/Cautions";
import "./RecipeListPage.css";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchField, setSearchField] = useState("");

  // Filter recepten op basis van de zoekterm
  const matchedRecipes = data.hits.filter((hit) => {
    const labelMatches = hit.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());

    const healthLabelMatches = hit.recipe.healthLabels.some((healtLabel) =>
      healtLabel.toLowerCase().includes(searchField.toLowerCase())
    );

    return labelMatches || healthLabelMatches;
  });

  // Verander zoekwaarde
  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Center minHeight="100vh" flexDir="column">
      <Flex
        flexDir={"column"}
        bgColor={"teal"}
        minWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        height={["12rem"]}
      >
        <Heading fontSize={"clamp(1.8rem, 8vw, 3rem)"} color={"white"}>
          Winc Recipe Checker
        </Heading>
        <RecipeSearchInput clickFn={handleSearchChange} />
      </Flex>

      <Flex
        flex={1}
        wrap={"wrap"}
        gap={8}
        justifyContent={"center"}
        alignItems={"center"}
        mt={8}
        mb={8}
      >
        {matchedRecipes.length === 0 ? (
          <Text fontSize={["lg"]} color={"red.600"}>
            No recipes found.
          </Text>
        ) : (
          matchedRecipes.map((hit) => (
            <Card
              key={hit.recipe.label}
              width={["18rem"]}
              height={["26rem"]}
              bgColor={"white"}
              borderRadius={"2xl"}
              boxShadow={["lg"]}
              cursor={"pointer"}
              onClick={() => onSelectRecipe(hit.recipe)}
            >
              <CardBody p={0}>
                <Image
                  src={hit.recipe.image}
                  borderTopRadius={"2xl"}
                  w={"100%"}
                  h={["10rem"]}
                  objectFit={"cover"}
                />
                <VStack spacing={0}>
                  <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontSize={["lg"]} color={"blackAlpha.600"} mt={2}>
                      {hit.recipe.mealType}
                    </Text>
                    <Heading
                      as={"h1"}
                      size={["md"]}
                      textAlign={"center"}
                      pr={2}
                      pl={2}
                    >
                      {hit.recipe.label}
                    </Heading>
                    <Flex
                      gap={2}
                      flexDir={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mt={2}
                    >
                      {hit.recipe.healthLabels
                        .filter(
                          (healtLabel) =>
                            healtLabel === "Vegan" ||
                            healtLabel === "Vegetarian"
                        )
                        .map((healtLabel) => (
                          <Tag
                            key={healtLabel}
                            bgColor={"purple.300"}
                            size={["md"]}
                            color={"blackAlpha.600"}
                          >
                            {healtLabel.toUpperCase()}
                          </Tag>
                        ))}
                    </Flex>
                  </Flex>

                  <Flex
                    flexDir={"column"}
                    gap={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <DietLabels
                      recipe={hit.recipe}
                      displayNone={"none"}
                      justifyContent={"center"}
                    />
                    <Text fontSize={["lg"]} color={"blackAlpha.500"}>
                      Dish: <span className="dish">{hit.recipe.dishType}</span>
                    </Text>
                    <Flex
                      flexDir={"row"}
                      gap={2}
                      wrap={"wrap"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Cautions
                        recipe={hit.recipe}
                        displayNone={"none"}
                        justifyContent={"center"}
                      />
                    </Flex>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>
          ))
        )}
      </Flex>
    </Center>
  );
};
