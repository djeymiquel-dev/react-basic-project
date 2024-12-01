import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({ recipe, ...props }) => {
  return (
    <Box>
      <Text
        fontSize={"lg"}
        fontWeight={"bold"}
        color={"blackAlpha.700"}
        mt={4}
        {...props}
      >
        Cautions:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.cautions.map((label) => (
          <Tag key={label} bgColor={"red.200"} size={["md"]}>
            {label}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
