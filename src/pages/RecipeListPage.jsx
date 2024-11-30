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
        <Heading mt={4} mb={4} size={["xl", "2xl", "3xl"]}>
          Your Recipe App
        </Heading>

        <Input
          type="text"
          onChange={handleSearchChange}
          variant={"filled"}
          placeholder="Search for recipe"
        ></Input>
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
            width={["xl", "md", "xs"]}
            height={"36rem"}
            bgColor={"white.600"}
            borderRadius={"2xl"}
            cursor={"pointer"}
            onClick={() => onSelectRecipe(hit.recipe)}
          >
            <CardBody p={0}>
              <Flex flexDir={"column"}>
                <Image
                  src={hit.recipe.image}
                  borderTopRadius={"2xl"}
                  w={"100%"}
                  h={"15rem"}
                  objectFit={"cover"}
                />

                <Flex
                  gap={2}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {hit.recipe.mealType.map((label) => (
                    <Text key={label} mt={2} fontSize={"xl"} color={"gray.600"}>
                      {label}
                    </Text>
                  ))}
                </Flex>

                <Heading
                  as={"h1"}
                  size={"md"}
                  mt={2}
                  pl={2}
                  pr={2}
                  textAlign={"center"}
                >
                  {hit.recipe.label}
                </Heading>
              </Flex>

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
                    <Tag key={healtLabel} mt={2} bgColor={"purple.600"}>
                      {healtLabel}
                    </Tag>
                  ))}
              </Flex>

              <Flex
                gap={2}
                flexDir={"row"}
                wrap={"wrap"}
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                {hit.recipe.dietLabels.map((label) => (
                  <Tag key={label} bgColor={"green.200"} mt={2}>
                    {label}
                  </Tag>
                ))}
              </Flex>

              <Flex
                gap={2}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {hit.recipe.dishType.map((label) => (
                  <Text key={label} mt={2} fontSize={"xl"}>
                    Dish: {label}
                  </Text>
                ))}
              </Flex>

              <Text fontSize={"lg"} mt={2} textAlign={"center"}>
                Cautions:
              </Text>

              <Flex
                gap={2}
                flexDir={"row"}
                wrap={"wrap"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {hit.recipe.cautions.map((label) => (
                  <Tag key={label} bgColor={"red.200"} mt={2}>
                    {label}
                  </Tag>
                ))}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Center>
  );
};
