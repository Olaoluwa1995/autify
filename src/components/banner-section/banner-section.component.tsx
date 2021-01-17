import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

//import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";
import BannerImage from "../../assets/images/banner.png";
import CustomButton from "../custom-button/custom-button.component";

const BannerSection = () => {
	const bannerText = `
	Use Our Design Structured And Secured Platform
	APIs and Automate Your SME Data Platforms
	Today.
	`;

	return (
		<>
			<Flex mt="150px" mx="10%">
				<Flex flexDirection="column" textAlign="justify" w="50%">
					<Box fontStyle="normal" fontSize="40px" fontWeight="bold">
						<Box>Do More With</Box>
						<Box color="#656691">Autify</Box>
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

				<Image src={BannerImage} w="70%" alt="banner section image" />
			</Flex>
		</>
	);
};

export default BannerSection;
