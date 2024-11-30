import { Box, Flex, Text } from "@chakra-ui/react";

export const Sodium = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>{recipe.totalNutrients.NA.label}</Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.NA.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.NA.unit}
        </Text>
      </Flex>
    </Box>
  );
};
