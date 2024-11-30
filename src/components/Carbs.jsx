import { Box, Flex, Text } from "@chakra-ui/react";

export const Carbs = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>{recipe.totalNutrients.CHOCDF.label}</Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.CHOCDF.unit}
        </Text>
      </Flex>
    </Box>
  );
};
