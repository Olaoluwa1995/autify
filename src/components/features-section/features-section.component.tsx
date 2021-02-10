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
					fontSize={{ base: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2.3rem" }}
					fontWeight="bolder"
					color={COLORS.DEEP_BLUE}>
					Features
				</Box>
				<Box
					fontSize={{ base: "1rem", sm: "0.8rem", md: "1rem", lg: "1.1rem" }}
					mt={{ base: "1rem", sm: "1.4rem", md: "1.8rem" }}
					mx={{ base: "5%", sm: "10%", lg: "20%" }}>
					{featuresText}
				</Box>
				<Flex flexWrap="wrap" mt={{ base: "0.7rem", md: "1.8rem" }}>
					{featuresData.map((feature) => {
						return (
							<Box
								key={feature.key}
								w={{ base: "90%", md: "50%", lg: "46%" }}
								mt={{
									base: `${feature.mobileMarginTop}`,
									md: `${feature.marginTop}`,
								}}
								mx={{ base: "2.5%", md: "0%", lg: "2%" }}>
								<Feature
									alt={feature.alt}
									url={feature.url}
									src={feature.src}
									textContainerMarginTop={feature.textContainerMarginTop}
									title={feature.title}
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
