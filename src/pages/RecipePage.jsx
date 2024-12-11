import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Cautions } from "../components/Cautions";
import { DietLabels } from "../components/DietLabels";
import { HealthLabels } from "../components/HealthLabels";
import { NutrientsTable } from "../components/NutrientsTable";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [recipe]);
  return (
    <Center minHeight={"100vh"} flexDir={"column"} m={0}>
      <Box
        width={["base", "lg", "2xl"]}
        bgColor={"white"}
        minHeight={"inherit"}
      >
        <Flex
          flexDir={"row"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          pl={[4]}
          mt={8}
          mb={8}
        >
          <IconButton
            colorScheme="teal"
            icon={<ArrowBackIcon />}
            onClick={onBack}
            w={10}
          />
        </Flex>

        <Image
          src={recipe.image}
          w={"100%"}
          height={"12rem"}
          objectFit={"cover"}
        />

        <Flex
          flexDir={["column", "row"]}
          alignItems={"flex-start"}
          p={4}
          gap={8}
        >
          <Flex flex={1} flexDir={"column"}>
            <Text color={"blackAlpha.600"} fontSize={["xl", "2xl"]}>
              {recipe.mealType}
            </Text>
            <Heading as={"h1"} size={["lg", "xl"]} color={"blackAlpha.800"}>
              {recipe.label}
            </Heading>
            <Text fontSize={"lg"} color={"blackAlpha.700"} fontWeight={"bold"}>
              Total cooking time: {recipe.totalTime} Minutes
            </Text>
            <Text fontSize={"lg"} color={"blackAlpha.700"} fontWeight={"bold"}>
              Servings: {recipe.yield}
            </Text>

            <Text fontSize={"lg"} color={"blackAlpha.700"} fontWeight={"bold"}>
              Ingredients:
            </Text>
            <UnorderedList color={"blackAlpha.600"}>
              {recipe.ingredientLines.map((ingredients) => (
                <ListItem key={ingredients}>{ingredients}</ListItem>
              ))}
            </UnorderedList>
          </Flex>

          <Flex
            flex={1}
            wrap={"wrap"}
            gap={2}
            flexDir={["column", "row"]}
            justifyContent={"flex-start"}
          >
            <Stack spacing={2}>
              <HealthLabels recipe={recipe} />
              <Flex flexDir={"column"} gap={2}>
                {recipe.dietLabels && recipe.dietLabels.length > 0 && (
                  <DietLabels recipe={recipe} />
                )}
                {recipe.cautions && recipe.cautions.length > 0 && (
                  <Cautions recipe={recipe} />
                )}
                <Text
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  color={"blackAlpha.700"}
                >
                  Total nutrients:
                </Text>

                <NutrientsTable recipe={recipe} />
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
};
