import React from "react";
import { Flex } from "@chakra-ui/react";
import {
	FirstColumn,
	SecondColumn,
	ThirdColumn,
} from "./middle-section-columns";
import { COLORS } from "../../styles/theme";

const MiddleSection = () => {
	return (
		<Flex
			flexDir={{ base: "column", sm: "row" }}
			mt={{ base: "2rem", sm: "3rem" }}
			color={COLORS.DEEP_BLUE}>
			<FirstColumn />
			<SecondColumn />
			<ThirdColumn />
		</Flex>
	);
};

export default MiddleSection;
