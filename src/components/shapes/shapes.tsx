import React from "react";
import { Flex } from "@chakra-ui/react";

import {
	FirstHeaderColoredShape,
	SecondHeaderColoredShape,
	FirstFooterColoredShape,
	SecondFooterColoredShape,
} from "./shapes.styles.d";

export const HeaderColoredShapes = () => {
	return (
		<>
			<Flex direction="row" position="absolute">
				<FirstHeaderColoredShape />
				<SecondHeaderColoredShape />
			</Flex>
		</>
	);
};

export const FooterColoredShapes = () => {
	return (
		<>
			<Flex direction="row" position="absolute">
				<FirstFooterColoredShape />
				<SecondFooterColoredShape />
			</Flex>
		</>
	);
};
