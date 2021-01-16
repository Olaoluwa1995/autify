import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { ReactComponent as BannerImage } from "../../assets/images/banner-image.svg";
import CustomButton from "../custom-button/custom-button.component";
const BannerSection = () => {
	const bannerText = `
	Use Our Design Structured And Secured Platform
	APIs and Automate Your SME Data Platforms
	Today.
	`;

	return (
		<>
			<Flex h="380px" mt="150px" mx="10%">
				<Flex
					flexDirection="column"
					//alignItems="space-between"
					textAlign="justify"
					w="50%">
					<Box
						fontStyle="normal"
						fontSize="40px"
						fontWeight="bold"
						lineHeight="10%">
						<Box as="p">Do More With</Box>
						<Box as="p" color="#656691">
							Autify
						</Box>
					</Box>
					<Box>
						<p>{bannerText}</p>
					</Box>
					<Box>
						<CustomButton
							width="100px"
							backgroundColor="#9c69e2"
							mt="20px"
							height="50px"
							maxW="150px">
							Learn more
						</CustomButton>
					</Box>
				</Flex>

				<Box as={BannerImage} />
			</Flex>
		</>
	);
};

export default BannerSection;
