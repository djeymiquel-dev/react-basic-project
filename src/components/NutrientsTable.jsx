import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const NutrientsTable = ({ recipe }) => {
  return (
    <TableContainer>
      <Table variant={"simple"} colorScheme="teal" size={"sm"}>
        <Thead>
          <Tr textAlign={"center"}>
            <Th>Label</Th>
            <Th>Qty</Th>
            <Th>Unit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight={"bold"}>
              {recipe.totalNutrients.ENERC_KCAL.label}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.ENERC_KCAL.unit}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>{recipe.totalNutrients.FAT.label}</Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.FAT.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.FAT.unit}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>{recipe.totalNutrients.CHOCDF.label}</Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.CHOCDF.unit}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>{recipe.totalNutrients.PROCNT.label}</Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.PROCNT.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.PROCNT.unit}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>{recipe.totalNutrients.CHOLE.label}</Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.CHOLE.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.CHOLE.unit}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight={"bold"}>{recipe.totalNutrients.NA.label}</Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.NA.quantity.toFixed(0)}
            </Td>
            <Td color={"blackAlpha.600"} fontWeight={"bold"}>
              {recipe.totalNutrients.NA.unit}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
