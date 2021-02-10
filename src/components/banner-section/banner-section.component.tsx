import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import BannerImage from "../../assets/images/banner.png";
import CustomButton from "../custom-button/custom-button.component";
import LinkItem from "../link-item/link-item.component";
import { COLORS } from "../../styles/theme";

const BannerSection = () => {
	const bannerText = `
	Use Our Design Structured And Secured Platform
	APIs and Automate Your SME Data Platforms
	Today.
	`;

	return (
		<>
			<Flex as="section" mt="3rem" mx={{ base: "2%", sm: "10%" }}>
				<Flex
					flexDirection="column"
					align={{ base: "center", sm: "unset" }}
					textAlign={{ base: "center", sm: "justify" }}
					w={{ base: "100%", sm: "40%" }}>
					<Box
						fontSize={{
							base: "1.6rem",
							sm: "1rem",
							md: "1.7rem",
							lg: "2.2rem",
							xl: "2.5rem",
						}}
						fontWeight="900">
						<Box as="h1">Do More With</Box>
						<Box as="h1" color={COLORS.AUTIFY_COLOR}>
							Autify
						</Box>
					</Box>
					<Box
						as="p"
						mt={{
							base: "1.5rem",
							sm: "0.7rem",
							lg: "1rem",
							xl: "1.5rem",
						}}
						fontSize={{
							base: "1rem",
							sm: "0.7rem",
							md: "0.8rem",
							lg: "0.9rem",
							xl: "1rem",
						}}>
						{bannerText}
					</Box>
					<CustomButton
						width="100px"
						mt={{ base: "0.4rem", sm: "1rem", lg: "1.5rem" }}
						backgroundColor={COLORS.PRIMARY_COLOR}
						height={{ base: "40px", sm: "50px" }}>
						<LinkItem
							isAnchor={false}
							isLink={true}
							aria-label="get autify"
							url="/signup"
							color={COLORS.WHITE}>
							Get Autify
						</LinkItem>
					</CustomButton>
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
