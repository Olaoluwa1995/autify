import React from "react";
import { Box, Checkbox, Flex, Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import LineIcon from "../../assets/icons/line-icon.png";
import FormInput from "../form-input/form-input.component";
import { socialIcons } from "../footer/footer-data";
import CustomButton from "../custom-button/custom-button.component";
import LinkItem from "../link-item/link-item.component";

const lineIconStyles = {
	src: LineIcon,
	w: "25%",
	h: "1px",
	ml: "10px",
	mt: { base: "8%", sm: "6.5%", md: "10%" },
};

const Registration = () => {
	return (
		<>
			<Flex flexDir="column" align="center" mt="3rem">
				<Flex w="90%" flexDir="column" marginX="auto">
					<FormInput placeholder="Full Name" />
					<FormInput placeholder="Email" />
					<FormInput placeholder="Contact Number" />
					<FormInput placeholder="Password" />
					<FormInput placeholder="Confirm Password" />
				</Flex>
				<Flex flexDir="row" w="80%" ml="5%">
					<Checkbox>
						<Box fontSize={{ base: "0.7rem", sm: "0.8rem" }}>
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
						color="#fff"
						height="2.5rem">
						Sign up
					</CustomButton>
				</Flex>
				<Flex flexDir="row" w="60%" ml="20%">
					<Image alt="sign-up underlay" {...lineIconStyles} />
					<Box pl="4px" mt={{ base: "2%", sm: "3%", md: "4%", lg: "5%" }}>
						or
					</Box>
					<Image alt="sign-up underlay" {...lineIconStyles} />
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
		</>
	);
};

export default Registration;
