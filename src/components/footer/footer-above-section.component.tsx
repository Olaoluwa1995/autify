import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import GooglePlayImage from "../../assets/images/google-play.png";
import AppStoreImage from "../../assets/images/app-store.png";
import { COLORS } from "../../styles/theme";

const AboveSection = () => {
	return (
		<Flex direction={{ base: "column", sm: "row" }} w="100%">
			<Flex
				flexDir="column"
				alignItems={{ base: "center", sm: "flex-start" }}
				w={{ base: "100%", sm: "60%" }}
				color={COLORS.DEEP_BLUE}>
				<Box
					as="h2"
					fontSize={{ base: "1.5rem", sm: "2.2rem" }}
					fontWeight={{ base: "700", md: "900" }}>
					Download Autify App!
				</Box>
				<Box fontSize={{ base: "0.8rem", sm: "1rem" }}>
					Get the best at the go with Autify mobile
				</Box>
			</Flex>
			<Flex
				w={{ base: "80%", sm: "40%" }}
				flexDirection="row-reverse"
				mt={{ base: "10px", sm: "20px" }}
				ml={{ base: "10%", sm: "0%" }}>
				<LinkItem isAnchor isLink url="#">
					<Image src={AppStoreImage} alt="App Store" w="90%" />
				</LinkItem>
				<LinkItem isAnchor url="#">
					<Image src={GooglePlayImage} alt="Google Play" w="90%" />
				</LinkItem>
			</Flex>
		</Flex>
	);
};

export default AboveSection;
