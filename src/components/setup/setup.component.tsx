import React from "react";
import {
	Flex,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Menu,
	MenuButton,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
	Text,
} from "@chakra-ui/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import CustomButton from "../custom-button/custom-button.component";
import { COLORS } from "../../styles/theme";

const menuChildren = (
	<Menu closeOnSelect={false} placement="bottom-end">
		{({ isOpen }) => (
			<>
				<MenuButton>
					.com{" "}
					{isOpen ? <Icon as={AiFillCaretUp} /> : <Icon as={AiFillCaretDown} />}
				</MenuButton>
				<MenuList minW="5rem">
					<MenuOptionGroup defaultValue=".com" title="Domains" type="radio">
						<MenuItemOption value=".ng">.ng</MenuItemOption>
						<MenuItemOption value=".net">.net</MenuItemOption>
						<MenuItemOption value=".co">.co</MenuItemOption>
						<MenuItemOption value=".za">.za</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</>
		)}
	</Menu>
);

const inputBorderRadius = "2rem";

const inputAddonStyles = {
	fontSize: "0.9rem",
	backgroundColor: "white",
	borderRadius: `${inputBorderRadius}`,
	px: "3%",
};

const buttonStyles = {
	width: "30%",
	height: "2.5rem",
};

const Setup = () => {
	return (
		<>
			<Flex flexDir="column" mt="1rem">
				<Text
					fontWeight="bold"
					color={`${COLORS.PAYMENT_PAGE_COLOR}`}
					mt="1rem"
					mb="3rem">
					Setup
				</Text>
				<Flex w="90%" flexDir="column" marginX="auto">
					<Text fontSize="0.8rem">Business Name:</Text>
					<Input size="md" borderRadius={`${inputBorderRadius}`} mb="1rem" />
					<Text fontSize="0.8rem">Preferred Domain Name:</Text>
					<InputGroup size="md">
						<InputLeftAddon
							pointerEvents="none"
							color="gray.300"
							children="www."
							{...inputAddonStyles}
						/>
						<Input />
						<InputRightAddon children={menuChildren} {...inputAddonStyles} />
					</InputGroup>
				</Flex>
				<Flex
					w="100%"
					h="2.5rem"
					flexDir="row"
					justify="space-between"
					mt="8rem">
					<CustomButton
						color={`${COLORS.PAYMENT_PAGE_COLOR}`}
						bgColor={`${COLORS.WHITE}`}
						borderColor={`${COLORS.PAYMENT_PAGE_COLOR}`}
						{...buttonStyles}>
						Back
					</CustomButton>
					<CustomButton
						color={`${COLORS.WHITE}`}
						bgColor={`${COLORS.PAYMENT_PAGE_COLOR}`}
						{...buttonStyles}>
						Next
					</CustomButton>
				</Flex>
			</Flex>
		</>
	);
};

export default Setup;
