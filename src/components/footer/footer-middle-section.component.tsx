import React from "react";
import { Flex } from "@chakra-ui/react";
import {
	FirstColumn,
	SecondColumn,
	ThirdColumn,
} from "./middle-section-columns";

const MiddleSection = () => {
	return (
		<Flex flexDir="row" mt="6%" color="#212353">
			<FirstColumn />
			<SecondColumn />
			<ThirdColumn />
		</Flex>
	);
};

export default MiddleSection;
