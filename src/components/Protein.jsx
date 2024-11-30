import { Box, Flex, Text } from "@chakra-ui/react";

export const Protein = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>{recipe.totalNutrients.PROCNT.label}</Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.PROCNT.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.PROCNT.unit}
        </Text>
      </Flex>
    </Box>
  );
};
