import React from "react";
import { Box, Container, Wrapper } from "./styles";
import Check from "@/assets/icons/Check";

const TableCheckbox = ({ ...rest }) => {
  return (
    <>
     <Wrapper >
      <Container>
      <input {...rest} type="checkbox" name="" id="" />
        <Box border  />
        <Check w={16} h={18} />
      </Container>
    </Wrapper>
    </>
  );
};

export default TableCheckbox;
