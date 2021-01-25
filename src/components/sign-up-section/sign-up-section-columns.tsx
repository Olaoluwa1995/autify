import React from "react";
import { Box, Checkbox, Flex, Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import CustomButton from "../custom-button/custom-button.component";

import LinkItem from "../link-item/link-item.component";
import NavLinkItem from "../link-item/header-links.component";
import LineIcon from "../../assets/icons/line-icon.png";
import FormInput from "../form-input/form-input.component";
import { socialIcons } from "../footer/footer-data";
import { COLORS } from "../../styles/theme";

export const LeftColumn = () => {
	return (
		<Flex
			w={{ base: "100%", sm: "50%" }}
			borderRadius={{ base: "30px 30px 10px 10px", sm: "30px" }}
			bgGradient={{
				base: `linear(to-b, ${COLORS.PRIMARY_COLOR}, ${COLORS.PRIMARY_COLOR})`,
				sm: `linear(to-b, ${COLORS.PRIMARY_COLOR}, #ccc6d3)`,
			}}
			opacity={{ base: "0.7", sm: "1" }}
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
				mt={{ base: "0", sm: "9.38rem" }}
				alignItems="center">
				<Box fontSize="1.8rem" fontWeight="500" textAlign="center">
					Welcome to{" "}
					<Box as="span" fontWeight="600">
						Autify
					</Box>
				</Box>
				<Box
					display={{ base: "none", sm: "flex" }}
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

export const RightColumn = () => {
	return (
		<Flex w={{ base: "100%", sm: "50%" }} flexDir="column" alignItems="center">
			<Box
				fontSize="2.5rem"
				fontWeight="600"
				mt={{ base: "1.25rem", sm: "2.5rem" }}
				color="#9C69E2">
				Sign up
			</Box>
			<Flex flexDir="column" alignItems="center" w="90%" mt="0.65rem">
				<FormInput placeholder="Full Name" />
				<FormInput placeholder="Email" />
				<FormInput placeholder="Password" />
				<FormInput placeholder="Contact Number" />
			</Flex>
			<Flex flexDir="row" w="80%" ml="5%">
				<Checkbox>
					<Box fontSize="0.8rem">
						I agree to the{" "}
						<Box as={Link} to="#" color="#9C69E2">
							Terms and Conditions.
						</Box>
					</Box>
				</Checkbox>
			</Flex>
			<Flex w="80%">
				<CustomButton
					width="100%"
					backgroundColor="#9C69E2"
					mt="1.25rem"
					height="3.2rem">
					<Box fontSize="1.2rem" fontWeight="500" color="#fff">
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
			<Flex flexDir="row" mt="0.7rem" align="center">
				{socialIcons.map((icon) => {
					return (
						<LinkItem isAnchor key={icon.key} url={icon.url} mr="0.2rem">
							<Icon
								as={icon.as}
								alt={icon.name}
								fill={icon.fill}
								fontSize={icon.signupFont}
							/>
						</LinkItem>
					);
				})}
			</Flex>
		</Flex>
	);
};
