import { Box, Text, Flex } from "@chakra-ui/react";

export const Kcal = ({ recipe }) => {
  return (
    <Box>
      <Flex
        gap={2}
        wrap={"wrap"}
        mt={2}
        flexDir={"column"}
        alignItems={"flex-start"}
      >
        <Text fontWeight={"bold"}>
          {recipe.totalNutrients.ENERC_KCAL.label}
        </Text>
        <Text color={"blackAlpha.600"} fontWeight={"bold"}>
          {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit}
        </Text>
      </Flex>
    </Box>
  );
};
