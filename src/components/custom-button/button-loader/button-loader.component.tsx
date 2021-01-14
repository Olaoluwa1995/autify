import { Box } from "@chakra-ui/react";
import React from "react";
import { ButtonLoaderContainer } from "./button-loader.styles";

const ButtonLoader = () => (
  <ButtonLoaderContainer>
    <Box as="span">●</Box>
    <Box as="span">●</Box>
    <Box as="span">●</Box>
    <Box as="span">●</Box>
    <Box as="span">●</Box>
  </ButtonLoaderContainer>
);

export default ButtonLoader;
