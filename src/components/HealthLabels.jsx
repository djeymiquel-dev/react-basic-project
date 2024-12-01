import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({ recipe, ...props }) => {
  return (
    <Box>
      <Text
        fontSize={"lg"}
        color={"blackAlpha.700"}
        fontWeight={"bold"}
        {...props}
      >
        Healt labels:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.healthLabels.map((healthLabel) => (
          <Tag key={healthLabel} bgColor={"purple.300"}>
            {healthLabel}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
