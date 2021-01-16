import React from "react";
import { Flex } from "@chakra-ui/react";

import { FirstColoredShape, SecondColoredShape } from "./header.styles.d";

const HeaderShapes = () => {
	return (
		<>
			<Flex direction="row" position="absolute">
				<FirstColoredShape />
				<SecondColoredShape />
			</Flex>
		</>
	);
};

export default HeaderShapes;
