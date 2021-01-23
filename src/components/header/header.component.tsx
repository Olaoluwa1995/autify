import React from "react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";

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
			<Flex position="relative" mx={{ base: "2%", sm: "10%" }} mb="10px">
				<Box
					mt="35px"
					pl="2%"
					display={{ base: "flex", sm: "none" }}
					position="absolute">
					<Menu>
						<MenuButton>
							<HamburgerIcon w={8} h={8} />
						</MenuButton>
						<MenuList minW="8rem">
							{headerLinksData.map((headerLink: any) => {
								return (
									<MenuItem key={headerLink.key}>
										<LinkItem
											aria-label={headerLink.title}
											url={headerLink.url}>
											{headerLink.title}
										</LinkItem>
									</MenuItem>
								);
							})}
						</MenuList>
					</Menu>
				</Box>
				<LinkItem aria-label="homepage" url="/" ml={{ base: "50%", sm: "0%" }}>
					<HeaderColoredShapes />
				</LinkItem>
				<Flex
					as="header"
					display={{ base: "none", sm: "flex" }}
					position="absolute"
					direction="row"
					ml={marginLeft}
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
				{isButtonVisible ? (
					<LinkItem
						aria-label="signup"
						url="/signup"
						ml={{ base: "20%", sm: "80%" }}>
						<CustomButton
							position="absolute"
							width={{ base: "100px", sm: "130px" }}
							backgroundColor="white"
							mt={{ base: "25px", sm: "20px" }}
							height={{ base: "40px", sm: "50px" }}>
							<Box
								fontSize={{ base: "0.8rem", sm: "1.2rem" }}
								fontWeight="500"
								color="#000">
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
