import { Box, Text, Flex, Tag, Stack } from "@chakra-ui/react";

export const Cautions = ({ recipe, displayNone, ...props }) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Text
          fontSize={"lg"}
          fontWeight={"semibold"}
          color={"blackAlpha.700"}
          display={displayNone}
        >
          Cautions:
        </Text>
        <Flex gap={2} wrap={"wrap"} {...props}>
          {recipe.cautions.map((label) => (
            <Tag
              key={label}
              bgColor={"red.200"}
              size={["md"]}
              color={"blackAlpha.600"}
            >
              {label.toUpperCase()}
            </Tag>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};
