import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <Input w={"auto"} onChange={changeFn} {...props}></Input>
    </>
  );
};
