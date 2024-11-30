import { Box, Text, Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  return (
    <Box>
      <Text fontSize={"lg"} fontWeight={"bold"} color={"blackAlpha.700"} mt={4}>
        Cautions:
      </Text>
      <Flex gap={2} wrap={"wrap"} mt={2}>
        {recipe.cautions.map((label, index) => (
          <Tag key={index} bgColor={"red.200"}>
            {label}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
