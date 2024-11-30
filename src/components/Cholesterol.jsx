import { Box, Flex, Text } from "@chakra-ui/react";

export const Cholesterol = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>{recipe.totalNutrients.CHOLE.label}</Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.CHOLE.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.CHOLE.unit}
        </Text>
      </Flex>
    </Box>
  );
};
