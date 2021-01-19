import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import ChatImage from "../../assets/icons/chat-icon.png";

const BelowBelSection = () => {
	return (
		<Flex direction="row" w="100%" justifyContent="space-between" mt="7%">
			<Box fontSize="10px" mt="1%">
				© Autify™, 2020. All rights reserved.
			</Box>
			<LinkItem url="#">
				<Image src={ChatImage} alt="chat" w="40px"></Image>
			</LinkItem>
		</Flex>
	);
};

export default BelowBelSection;
