import { Box, Text, Flex, Tag, Stack } from "@chakra-ui/react";

export const HealthLabels = ({ recipe, ...props }) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Text
          fontSize={"lg"}
          color={"blackAlpha.700"}
          fontWeight={"semibold"}
          {...props}
        >
          Healt labels:
        </Text>
        <Flex gap={2} wrap={"wrap"}>
          {recipe.healthLabels.map((healthLabel) => (
            <Tag key={healthLabel} bgColor={"purple.300"} size={["sm"]}>
              {healthLabel}
            </Tag>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};
