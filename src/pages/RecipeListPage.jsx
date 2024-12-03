import {
  Center,
  Heading,
  Card,
  CardBody,
  Flex,
  Image,
  Tag,
  Text,
  Stack,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { DietLabels } from "../components/DietLabels";
import { RecipeSearchInput } from "../components/RecipeSearchInput";
import { Cautions } from "../components/Cautions";

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
      <Stack spacing={2}>
        <Flex
          flexDir={"column"}
          bgColor={"teal"}
          w={"100vw"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading mt={4} mb={8} size={["xl", "3xl"]} color={"white"}>
            Winc Recipe Checker
          </Heading>

          <RecipeSearchInput clickFn={handleSearchChange} />
        </Flex>
      </Stack>

      <Flex
        wrap={"wrap"}
        gap={4}
        justifyContent={"center"}
        alignItems={"flex-start"}
        w={"100vw"}
        p={8}
      >
        {matchedRecipes.map((hit) => (
          <Card
            key={hit.recipe.label}
            width={["16rem"]}
            height={["22rem"]}
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
                h={"8rem"}
                objectFit={"cover"}
              />
              <Stack spacing={2} p={2}>
                <Flex
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text fontSize={["md"]} color={"blackAlpha.600"}>
                    {hit.recipe.mealType}
                  </Text>
                  <Heading as={"h1"} size={["sm"]} textAlign={"center"}>
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
                          healtLabel === "Vegan" || healtLabel === "Vegetarian"
                      )
                      .map((healtLabel) => (
                        <Tag
                          key={healtLabel}
                          bgColor={"purple.300"}
                          size={["sm"]}
                        >
                          {healtLabel}
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
                    mt={0}
                    justifyContent={"center"}
                  />
                  <Text fontSize={["md"]}>{hit.recipe.dishType}</Text>
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
                      mt={0}
                    />
                  </Flex>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Center>
  );
};
