import { Box, Flex, Text } from "@chakra-ui/react";

export const Fat = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>{recipe.totalNutrients.FAT.label}</Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.FAT.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.FAT.unit}
        </Text>
      </Flex>
    </Box>
  );
};
