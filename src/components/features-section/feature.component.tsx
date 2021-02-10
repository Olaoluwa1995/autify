import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { COLORS } from "../../styles/theme";

type FeatureProps = {
	src: string;
	alt: string;
	url: string;
	textContainerMarginTop: string;
	title: string;
};
const Feature: React.FC<FeatureProps> = ({
	src,
	alt,
	url,
	textContainerMarginTop,
	title,
}) => {
	return (
		<Flex position="relative">
			<Flex
				mt={textContainerMarginTop}
				position="absolute"
				zIndex="1"
				flexDir="column"
				textAlign="justify"
				mr="8%"
				ml="47%">
				<Text
					fontWeight="bold"
					fontSize={{
						base: "0.9rem",
						sm: "1rem",
						xl: "1.2rem",
					}}>
					{title}
				</Text>
				<Text
					fontSize={{
						base: "0.8rem",
						md: "0.7rem",
						lg: "0.8rem",
						xl: "0.9rem",
					}}
					mt="8%">
					Don't worry if your data is very large, the Data warehouse provides a
					search engine, which is useful for making it easier to find data
					effectively saving time.
				</Text>
				<Text
					fontSize={{ base: "0.8rem", md: "0.7rem", lg: "0.8rem", xl: "1rem" }}
					mt="8%"
					fontWeight="bold">
					Learn more{" "}
					<Link to={url}>
						<ArrowForwardIcon w={8} h={6} color={`${COLORS.PRIMARY_COLOR}`} />
					</Link>
				</Text>
			</Flex>
			<Image src={src} w="100%" alt={alt} />
		</Flex>
	);
};

export default Feature;
