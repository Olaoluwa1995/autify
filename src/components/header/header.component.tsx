import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

import HeaderShapes from "./header-shapes.component";
import { headerLinksData } from "./header.data";
import LinkItem from "../link-item/link-item.component";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
	return (
		<>
			<Flex position="relative" mx="10%" mb="10px">
				<HeaderShapes />
				<Flex
					as="header"
					position="absolute"
					direction="row"
					ml="20%"
					mt="35px">
					{headerLinksData.map((headerLink: any) => {
						return (
							<Box key={headerLink.key} ml="15%">
								<LinkItem aria-label={headerLink.title} url={headerLink.url}>
									{headerLink.title}
								</LinkItem>
							</Box>
						);
					})}
				</Flex>

				<CustomButton
					position="absolute"
					width="180px"
					backgroundColor="white"
					mt="20px"
					height="50px"
					ml="80%"
					maxW="200px">
					<h4>Request Pricing</h4>
					<ArrowForwardIcon fontWeight="bold" fontSize="30px" color="#9c69e2" />
				</CustomButton>
			</Flex>
		</>
	);
};

export default Header;
