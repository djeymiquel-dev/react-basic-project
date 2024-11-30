import { Box, Text, Flex } from "@chakra-ui/react";

export const Calories = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text>{recipe.calories.toFixed(0)}</Text>
        <Text>Calories</Text>
      </Flex>
    </Box>
  );
};
