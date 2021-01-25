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
					textAlign={{ base: "center", sm: "justify" }}
					w={{ base: "100%", sm: "40%" }}>
					<Box fontSize={{ base: "1.6rem", md: "2.5rem" }} fontWeight="900">
						<Box as="h2">Do More With</Box>
						<Box as="h2" color={COLORS.AUTIFY_COLOR}>
							Autify
						</Box>
					</Box>
					<Box as="p" mt="1.5rem">
						{bannerText}
					</Box>
					<CustomButton
						width="100px"
						mt={{ base: "0.4rem", sm: "1.5rem" }}
						ml={{ base: "70%", sm: "0" }}
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
