import { Box, Text, Flex, Tag, Stack } from "@chakra-ui/react";

export const DietLabels = ({ recipe, displayNone, ...props }) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Text
          fontSize={"lg"}
          fontWeight={"semibold"}
          color={"blackAlpha.700"}
          display={displayNone}
        >
          Diet labels:
        </Text>
        <Flex gap={2} wrap={"wrap"} {...props}>
          {recipe.dietLabels.map((dietLabel) => (
            <Tag key={dietLabel} bgColor={"green.200"} size={["sm"]}>
              {dietLabel}
            </Tag>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};
