import React from "react";
import { Image } from "@chakra-ui/react";
import LinkItem from "../link-item/link-item.component";

type FeatureProps = {
	src: string;
	ariaLabel: string;
	url: string;
};
const Feature: React.FC<FeatureProps> = ({ src, ariaLabel, url }) => {
	return (
		<LinkItem isAnchor aria-label={ariaLabel} url={url}>
			<Image src={src} w="100%" alt={ariaLabel} />
		</LinkItem>
	);
};

export default Feature;
