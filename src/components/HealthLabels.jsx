import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({ recipe }) => {
  return (
    <Box>
      <Text fontSize={"lg"} color={"blackAlpha.700"} fontWeight={"bold"}>
        Healt labels:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.healthLabels.map((label, index) => (
          <Tag key={index} bgColor={"purple.300"}>
            {label}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
