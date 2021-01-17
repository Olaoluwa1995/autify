import React from "react";
import { Box } from "@chakra-ui/react";

type FeatureProps = {
	marginTop?: string;
	paddingLeft?: string;
	width: string;
	as: any;
};
const Feature = ({ marginTop, paddingLeft, width, as }: FeatureProps) => {
	return (
		<>
			<Box as={as} w={width} h="45%" mt={marginTop} pl={paddingLeft} />
		</>
	);
};

export default Feature;
