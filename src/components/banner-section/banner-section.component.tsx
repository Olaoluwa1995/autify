import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import BannerImage from "../../assets/images/banner.png";
import CustomButton from "../custom-button/custom-button.component";
import LinkItem from "../link-item/link-item.component";

const BannerSection = () => {
	const bannerText = `
	Use Our Design Structured And Secured Platform
	APIs and Automate Your SME Data Platforms
	Today.
	`;

	return (
		<>
			<Flex mt="150px" mx={{ base: "2%", sm: "10%" }}>
				<Flex
					flexDirection="column"
					textAlign={{ base: "center", sm: "justify" }}
					w={{ base: "100%", sm: "50%" }}>
					<Box fontSize="2rem" fontWeight="900">
						<Box>Do More With</Box>
						<Box color="#656691">Autify</Box>
					</Box>
					<Box mt="20px">
						<p>{bannerText}</p>
					</Box>
					<Box mt={{ base: "5px", sm: "25px" }}>
						<LinkItem aria-label="get autify" url="/signup">
							<CustomButton
								width="100px"
								ml={{ base: "70%", sm: "0" }}
								backgroundColor="#9c69e2"
								color="white"
								height={{ base: "40px", sm: "50px" }}
								fontWeight="800px">
								Get Autify
							</CustomButton>
						</LinkItem>
					</Box>
				</Flex>

				<Image
					display={{ base: "none", sm: "flex" }}
					src={BannerImage}
					w="70%"
					alt="banner section image"
				/>
			</Flex>
		</>
	);
};

export default BannerSection;
