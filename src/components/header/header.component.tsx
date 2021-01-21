import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

import { HeaderColoredShapes } from "../../assets/shapes/shapes";
import { headerLinksData } from "./header.data";
import LinkItem from "../link-item/link-item.component";
import CustomButton from "../custom-button/custom-button.component";

type HeaderProps = {
	isButtonVisible: boolean;
	marginLeft: string;
};

const Header = ({ isButtonVisible, marginLeft }: HeaderProps) => {
	return (
		<>
			<Flex position="relative" mx="10%" mb="10px">
				<LinkItem aria-label="homepage" url="/">
					<HeaderColoredShapes />
				</LinkItem>
				<Flex
					as="header"
					position="absolute"
					direction="row"
					ml={marginLeft}
					mt="40px">
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
				{isButtonVisible ? (
					<LinkItem aria-label="request pricing" url="/signup">
						<CustomButton
							position="absolute"
							width="130px"
							backgroundColor="white"
							mt="20px"
							height="50px"
							ml="80%">
							<Box fontSize="17px" fontWeight="500" color="#000">
								Get Autify
							</Box>
							<ArrowForwardIcon
								fontWeight="bold"
								fontSize="20px"
								color="#9c69e2"
								mt="3px"
							/>
						</CustomButton>
					</LinkItem>
				) : null}
			</Flex>
		</>
	);
};

export default Header;
