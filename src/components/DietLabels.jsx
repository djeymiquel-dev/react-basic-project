import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {
  return (
    <Box>
      <Text fontSize={"lg"} fontWeight={"bold"} color={"blackAlpha.700"} mt={4}>
        Diet labels:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.dietLabels.map((label, index) => (
          <Tag key={index} bgColor={"green.200"}>
            {label}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
