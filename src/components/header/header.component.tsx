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
import NavLinkItem from "../link-item/header-links.component";
import CustomButton from "../custom-button/custom-button.component";
import { COLORS } from "../../styles/theme";

type HeaderProps = {
	isButtonVisible: boolean;
};

const Header: React.FC<HeaderProps> = ({ isButtonVisible }) => {
	return (
		<>
			<Flex
				as="header"
				mx={{ base: "2%", sm: "10%" }}
				mt="1rem"
				align="center"
				justify="space-between">
				<Box display={{ base: "flex", sm: "none" }}>
					<Menu isLazy>
						<MenuButton>
							<HamburgerIcon w={8} h={8} />
						</MenuButton>
						<MenuList minW="8rem">
							{headerLinksData.map((headerLink: any) => {
								return (
									<MenuItem key={headerLink.key}>
										<NavLinkItem
											aria-label={headerLink.title}
											url={headerLink.url}>
											{headerLink.title}
										</NavLinkItem>
									</MenuItem>
								);
							})}
						</MenuList>
					</Menu>
				</Box>
				<NavLinkItem aria-label="homepage" url="/">
					<HeaderColoredShapes />
				</NavLinkItem>
				<Flex
					as="nav"
					display={{ base: "none", sm: "flex" }}
					direction="row"
					align="center">
					{headerLinksData.map((headerLink: any) => {
						return (
							<Box key={headerLink.key} ml="15%">
								<NavLinkItem aria-label={headerLink.title} url={headerLink.url}>
									{headerLink.title}
								</NavLinkItem>
							</Box>
						);
					})}
				</Flex>
				{isButtonVisible ? (
					<CustomButton
						maxWidth={{ base: "130px" }}
						w="100%"
						backgroundColor={COLORS.WHITE}
						height={{ base: "40px", sm: "50px" }}>
						<Box fontSize={{ base: "0.8rem", sm: "1.2rem" }} fontWeight="bold">
							<NavLinkItem aria-label="signup" url="/signup" color="#000">
								Get Autify
							</NavLinkItem>
						</Box>
						<ArrowForwardIcon
							fontWeight="bold"
							fontSize="20px"
							color={COLORS.PRIMARY_COLOR}
							mt="3px"
						/>
					</CustomButton>
				) : null}
			</Flex>
		</>
	);
};

export default Header;
