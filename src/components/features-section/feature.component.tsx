import React from "react";
import { Box, Image } from "@chakra-ui/react";
import LinkItem from "../link-item/link-item.component";

type FeatureProps = {
	key: number;
	marginTop?: string;
	marginXAxis: string;
	src: string;
	ariaLabel: string;
	url: string;
};
const Feature = ({
	key,
	marginTop,
	marginXAxis,
	src,
	ariaLabel,
	url,
}: FeatureProps) => {
	return (
		<Box w="46%" key={key} mt={marginTop} mx={marginXAxis}>
			<LinkItem aria-label={ariaLabel} url={url}>
				<Image src={src} w="100%" alt={ariaLabel} />
			</LinkItem>
		</Box>
	);
};

export default Feature;
