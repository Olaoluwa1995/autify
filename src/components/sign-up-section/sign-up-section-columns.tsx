import React from "react";
import { Box, Checkbox, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import LinkItem from "../link-item/link-item.component";
import NavLinkItem from "../link-item/header-links.component";
import HomeIcon from "../../assets/icons/home-icon.png";
import LineIcon from "../../assets/icons/line-icon.png";
import FormInput from "../form-input/form-input.component";
import { socialIcons } from "../footer/footer-data";
import { COLORS } from "../../styles/theme";

export const LeftColumn = () => {
	return (
		<Flex
			w="50%"
			borderRadius="30px"
			bgGradient={`linear(to-b, ${COLORS.PRIMARY_COLOR}, #ccc6d3)`}
			flexDir="column"
			color="white">
			<Flex flexDir="row" mt="15px" ml="20px">
				<NavLinkItem url="/" color="white">
					<Image src={HomeIcon} alt="home" w="20px" />
					<Box fontSize="16px" ml="5px">
						Home
					</Box>
				</NavLinkItem>
			</Flex>
			<Flex flexDir="column" mt="150px" alignItems="center">
				<Box fontSize="180%" fontWeight="660" textAlign="center">
					Welcome to{" "}
					<Box as="span" fontWeight="900">
						Autify
					</Box>
				</Box>
				<Box mx="10%" mt="20px" textAlign="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
					egestas lacus orci, odio - consectetur sit.
				</Box>
			</Flex>
		</Flex>
	);
};

export const RightColumn = () => {
	return (
		<Flex w="50%" flexDir="column" alignItems="center">
			<Box fontSize="220%" fontWeight="900" mt="40px" color="#9C69E2">
				Sign up
			</Box>
			<Flex flexDir="column" alignItems="center" w="80%" mt="10px">
				<FormInput placeholder="Full Name" />
				<FormInput placeholder="Email" />
				<FormInput placeholder="Password" />
				<FormInput placeholder="Contact Number" />
			</Flex>
			<Flex flexDir="row" w="80%" ml="5%">
				<Checkbox fontSize="12px">
					I agree to the{" "}
					<Box as={Link} to="#" color="#9C69E2">
						Terms and Conditions.
					</Box>
				</Checkbox>
			</Flex>
			<Flex w="80%">
				<CustomButton
					width="100%"
					backgroundColor="#9C69E2"
					mt="20px"
					height="50px">
					<Box fontSize="20px" fontWeight="500" color="#fff">
						Sign up
					</Box>
				</CustomButton>
			</Flex>
			<Flex flexDir="row" w="60%" ml="20%">
				<Image
					src={LineIcon}
					alt="sign-up underlay"
					w="25%"
					h="1px"
					ml="10px"
					mt="10%"
				/>
				<Box pl="4px" mt={{ base: "2%", sm: "3%", md: "4%", lg: "5%" }}>
					or
				</Box>
				<Image
					src={LineIcon}
					alt="sign-up underlay"
					w="25%"
					h="1px"
					ml="10px"
					mt="10%"
				/>
			</Flex>
			<Flex flexDir="row" mt="10px">
				{socialIcons.map((icon) => {
					return (
						<LinkItem isAnchor key={icon.key} url={icon.url} mr="8%">
							<Image src={icon.src} alt={icon.name} minW="35px" />
						</LinkItem>
					);
				})}
			</Flex>
		</Flex>
	);
};
