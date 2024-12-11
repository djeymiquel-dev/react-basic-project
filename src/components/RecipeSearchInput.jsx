import { Box, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export const RecipeSearchInput = ({ clickFn }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color={"gray.6"} />
        </InputLeftElement>
        <Input
          type="text"
          onChange={clickFn}
          variant={"filled"}
          focusBorderColor="blue.500"
          boxShadow={"lg"}
          placeholder="Search for recipe"
          width={"clamp(16rem, 80vw, 24rem)"}
          mb={8}
          borderRadius={20}
          _focus={{
            bgColor: "gray.200", // Achtergrondkleur bij focus
          }}
        ></Input>
      </InputGroup>
    </Box>
  );
};
