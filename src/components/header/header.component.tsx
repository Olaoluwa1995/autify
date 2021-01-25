import React from "react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Divider,
	Flex,
	FlexboxProps,
	List,
	ListIcon,
	ListItem,
	useDisclosure,
} from "@chakra-ui/react";

import { HeaderColoredShapes } from "../../assets/shapes/shapes";
import { headerLinksData } from "./header.data";
import NavLinkItem from "../link-item/header-links.component";
import CustomButton from "../custom-button/custom-button.component";
import { COLORS } from "../../styles/theme";

type HeaderComponentProps = {
	isButtonVisible: boolean;
	flexDir: string | object;
};

type HeaderProps = HeaderComponentProps & FlexboxProps;

const Header: React.FC<HeaderProps> = ({ isButtonVisible, flexDir }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				as="section"
				mx={{ base: "2%", sm: "10%" }}
				mt="1rem"
				align="center"
				justify="space-between"
				flexDir={flexDir}>
				<Box display={{ base: "flex", sm: "none" }}>
					<HamburgerIcon as="button" w={8} h={8} onClick={onOpen} />
					<Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
						<DrawerOverlay>
							<DrawerContent bgColor="whitesmoke">
								<DrawerCloseButton />
								<DrawerBody px="0" pt="3rem">
									<List>
										{headerLinksData.map((headerLink: any) => {
											return (
												<ListItem key={headerLink.key}>
													<ListIcon
														as={headerLink.as}
														color={COLORS.PRIMARY_COLOR}
														h="1.2rem"
														mx="0.5rem"
													/>
													<NavLinkItem
														aria-label={headerLink.title}
														url={headerLink.url}>
														{headerLink.title}
													</NavLinkItem>
													<Divider my="0.5rem" />
												</ListItem>
											);
										})}
									</List>
								</DrawerBody>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
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
							<Box key={headerLink.key} mr="2rem">
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
