import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Feature from "./feature.component";
import { featuresData } from "./feature-data";

const FeaturesSection = () => {
	const featuresText = `
    Some of the features and advantages that we provide for our clients.
    `;

	return (
		<>
			<Flex
				h="400px"
				mt="50px"
				ml="10%"
				mr="18%"
				direction="column"
				textAlign="center">
				<Box as="h3" fontSize="35px" fontWeight="bolder" color="#212353">
					Features
				</Box>
				<Box as="p" fontSize="15px" mx="20%">
					{featuresText}
				</Box>
				<Flex flexWrap="wrap" mt="5%">
					{featuresData.map((feature) => {
						return (
							<Feature
								key={feature.key}
								as={feature.as}
								marginTop={feature.marginTop}
								paddingLeft={feature.paddingLeft}
								width={feature.width}
							/>
						);
					})}
				</Flex>
			</Flex>
		</>
	);
};

export default FeaturesSection;
