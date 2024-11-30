import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Cautions } from "../components/Cautions";
import { DietLabels } from "../components/DietLabels";
import { HealthLabels } from "../components/HealthLabels";
import { Kcal } from "../components/Kcal";
import { Fat } from "../components/Fat";
import { Carbs } from "../components/Carbs";
import { Protein } from "../components/Protein";
import { Cholesterol } from "../components/Cholesterol";
import { Sodium } from "../components/Sodium";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Center minHeight={"100vh"} flexDir={"column"}>
      <Box width={["sm", "lg", "2xl"]} m={0} border={"solid"}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={4}>
          Recipe
        </Heading>
        <Image
          src={recipe.image}
          w={"100%"}
          height={250}
          objectFit={"cover"}
          mt={4}
        />

        {/* main flexbox .............................. */}
        <Flex
          flexDir={["column", "row"]}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
        >
          {/* first flexbox part ............................... */}
          <Flex flex={1} flexDir={"column"} p={8}>
            <Text color={"blackAlpha.600"} fontSize={["2xl", "3xl"]}>
              {recipe.mealType}
            </Text>
            <Heading
              as={"h1"}
              size={["md", "xl"]}
              color={"blackAlpha.800"}
              mt={2}
            >
              {recipe.label}
            </Heading>
            <Text
              mt={2}
              fontSize={"lg"}
              color={"blackAlpha.700"}
              fontWeight={"bold"}
            >
              Total cooking time: {recipe.totalTime} Minutes
            </Text>
            <Text
              mt={2}
              fontSize={"lg"}
              color={"blackAlpha.700"}
              fontWeight={"bold"}
            >
              Servings: {recipe.yield}
            </Text>
            <UnorderedList mt={2} color={"blackAlpha.600"}>
              {recipe.ingredientLines.map((element, index) => (
                <ListItem key={index}>{element}</ListItem>
              ))}
            </UnorderedList>
          </Flex>

          {/* Tags Section ................................. */}
          <Flex
            flex={1}
            wrap={"wrap"}
            gap={2}
            p={8}
            flexDir={["column", "row"]}
            justifyContent={"flex-start"}
            mt={4}
          >
            <Stack spacing={3}>
              <HealthLabels recipe={recipe} />
              <Flex flexDir={"column"}>
                <DietLabels recipe={recipe} />
                <Cautions recipe={recipe} />
                <Text
                  fontSize={"lg"}
                  mt={4}
                  fontWeight={"bold"}
                  color={"blackAlpha.700"}
                >
                  Total nutrients:
                </Text>
                <Flex flexDir={"row"} gap={4} wrap={"wrap"}>
                  <Kcal recipe={recipe} />
                  <Fat recipe={recipe} />
                  <Carbs recipe={recipe} />
                  <Protein recipe={recipe} />
                  <Cholesterol recipe={recipe} />
                  <Sodium recipe={recipe} />
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
        <Flex flexDir={"row"} mt={8} mb={4} justifyContent={"center"}>
          <Button
            colorScheme="teal"
            size={"md"}
            onClick={onBack}
            alignSelf={"center"}
          >
            Back to overview
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
