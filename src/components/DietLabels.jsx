import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({ recipe, ...props }) => {
  return (
    <Box>
      <Text
        fontSize={"lg"}
        fontWeight={"bold"}
        color={"blackAlpha.700"}
        mt={4}
        {...props}
      >
        Diet labels:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.dietLabels.map((dietLabel) => (
          <Tag key={dietLabel} bgColor={"green.200"} size={["md"]}>
            {dietLabel}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
