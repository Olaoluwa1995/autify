import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import GooglePlayImage from "../../assets/images/google-play.png";
import AppStoreImage from "../../assets/images/app-store.png";

const AboveSection = () => {
	return (
		<Flex direction="row" w="100%">
			<Flex
				flexDir="column"
				alignItems="flex-start"
				w="50%"
				mt="4%"
				color="#212353">
				<Box fontSize="40px" fontWeight="bold">
					Download Autify App!
				</Box>
				<Box fontSize="18px">Get the best at the go with Autify mobile</Box>
			</Flex>
			<Flex w="50%" flexDirection="row-reverse" mt="4%">
				<LinkItem url="#">
					<Image src={AppStoreImage} alt="App Store" w="90%" />
				</LinkItem>
				<LinkItem url="#">
					<Image src={GooglePlayImage} alt="Google Play" w="90%" />
				</LinkItem>
			</Flex>
		</Flex>
	);
};

export default AboveSection;
