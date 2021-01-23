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
				mt={{ base: "30px", sm: "50px" }}
				mx={{ base: "2%", sm: "10%" }}
				direction="column"
				textAlign="center">
				<Box
					fontSize={{ base: "2rem", sm: "2.5rem" }}
					fontWeight="bolder"
					color="#212353">
					Features
				</Box>
				<Box
					fontSize={{ base: "1rem", sm: "1.1rem" }}
					mt={{ base: "15px", sm: "25px" }}
					mx={{ base: "5%", sm: "20%" }}>
					{featuresText}
				</Box>
				<Flex flexWrap="wrap" mt={{ base: "10px", sm: "25px" }}>
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
