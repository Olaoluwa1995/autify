import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Feature from "./feature.component";
import { featuresData } from "./feature-data";
import { COLORS } from "../../styles/theme";

const FeaturesSection = () => {
	const featuresText = `
    Some of the features and advantages that we provide for our clients.
    `;

	return (
		<>
			<Flex
				as="section"
				mt={{ base: "2rem", sm: "3.5rem" }}
				mx={{ base: "2%", sm: "10%" }}
				direction="column"
				textAlign="center">
				<Box
					as="h2"
					fontSize={{ base: "2rem", sm: "2.5rem" }}
					fontWeight="bolder"
					color={COLORS.DEEP_BLUE}>
					Features
				</Box>
				<Box
					fontSize={{ base: "1rem", sm: "1.1rem" }}
					mt={{ base: "1rem", sm: "1.8rem" }}
					mx={{ base: "5%", sm: "20%" }}>
					{featuresText}
				</Box>
				<Flex flexWrap="wrap" mt={{ base: "0.7rem", sm: "1.8rem" }}>
					{featuresData.map((feature) => {
						return (
							<Box
								key={feature.key}
								w={{ base: "100%", sm: "46%" }}
								mt={{
									base: `${feature.mobileMarginTop}`,
									sm: `${feature.marginTop}`,
								}}
								mx={feature.marginXAxis}>
								<Feature
									ariaLabel={feature.ariaLabel}
									url={feature.url}
									src={feature.src}
								/>
							</Box>
						);
					})}
				</Flex>
			</Flex>
		</>
	);
};

export default FeaturesSection;
