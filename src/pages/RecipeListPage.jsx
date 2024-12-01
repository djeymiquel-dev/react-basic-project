import {
  Center,
  Heading,
  Card,
  CardBody,
  Flex,
  Image,
  Tag,
  Text,
  Input,
  Stack,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { DietLabels } from "../components/DietLabels";

// console.log(data.hits[0].recipe);

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
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading mt={4} mb={[4, 8]} size={["xl", "3xl"]} color={"white"}>
            Winc Recipe Checker
          </Heading>
          <Input
            type="text"
            onChange={handleSearchChange}
            variant={"filled"}
            focusBorderColor="blue.500"
            boxShadow={"lg"}
            placeholder="Search for recipe"
            width={["xs", "lg"]}
            mb={8}
            borderRadius={20}
            _focus={{
              bgColor: "gray.200", // Achtergrondkleur bij focus
            }}
          ></Input>
        </Flex>
      </Stack>

      <Flex
        wrap={"wrap"}
        gap={8}
        justifyContent={"center"}
        alignItems={"flex-start"}
        w={"100%"}
        mt={8}
        mb={4}
      >
        {matchedRecipes.map((hit) => (
          <Card
            key={hit.recipe.label}
            width={["xs"]}
            height={["md"]}
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
                h={"12rem"}
                objectFit={"cover"}
              />
              <Stack spacing={2} p={2}>
                <Flex
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text fontSize={["xl"]} color={"blackAlpha.600"}>
                    {hit.recipe.mealType}
                  </Text>
                  <Heading
                    as={"h1"}
                    size={["md"]}
                    textAlign={"center"}
                    pl={2}
                    pr={2}
                  >
                    {hit.recipe.label}
                  </Heading>
                  <Flex
                    gap={2}
                    flexDir={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {hit.recipe.healthLabels
                      .filter(
                        (healtLabel) =>
                          healtLabel === "Vegan" || healtLabel === "Vegetarian"
                      )
                      .map((healtLabel) => (
                        <Tag
                          key={healtLabel}
                          mt={2}
                          bgColor={"purple.300"}
                          size={["md"]}
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
                  <DietLabels recipe={hit.recipe} display={"none"} />
                  <Text fontSize={["xl"]}>{hit.recipe.dishType}</Text>
                  <Flex
                    gap={2}
                    wrap={"wrap"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {hit.recipe.cautions.map((label) => (
                      <Tag key={label} bgColor={"red.200"} size={["md"]}>
                        {label}
                      </Tag>
                    ))}
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
