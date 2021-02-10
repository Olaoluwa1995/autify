import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

import NavLinkItem from "../link-item/header-links.component";
import { COLORS } from "../../styles/theme";

const LeftColumn = () => {
	return (
		<Flex
			w={{ base: "100%", md: "40%" }}
			borderRadius={{ base: "25px 25px 10px 10px", md: "25px" }}
			bgGradient={{
				base: `linear(to-b, ${COLORS.PRIMARY_COLOR}, ${COLORS.PRIMARY_COLOR})`,
				sm: `linear(to-b, ${COLORS.PRIMARY_COLOR}, #ccc6d3)`,
			}}
			opacity={{ base: "0.7", md: "1" }}
			flexDir="column"
			color="white">
			<Flex flexDir="row" mt="1rem" ml="1.25rem" align="center">
				<Icon as={FaHome} />
				<NavLinkItem url="/" color="white" ml="0.32rem">
					Home
				</NavLinkItem>
			</Flex>
			<Flex
				flexDir="column"
				mt={{ base: "0", md: "9.38rem" }}
				alignItems="center">
				<Box
					fontSize={{ base: "1..8rem", md: "1.6rem", lg: "1.8rem" }}
					fontWeight="500"
					textAlign="center">
					Welcome to{" "}
					<Box as="span" fontWeight="600">
						Autify
					</Box>
				</Box>
				<Box
					display={{ base: "none", md: "flex" }}
					fontSize={{ base: "0.8rem", lg: "1rem" }}
					mx="10%"
					mt="1.25rem"
					textAlign="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
					egestas lacus orci, odio - consectetur sit.
				</Box>
			</Flex>
		</Flex>
	);
};

export default LeftColumn;
