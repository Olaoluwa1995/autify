import React from "react";
import { Box, Checkbox, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { COLORS } from "../../styles/theme";
import PaypalLogo from "../../assets/images/paypal.png";
import StripeLogo from "../../assets/images/stripe.png";
import FlutterwaveLogo from "../../assets/images/flutterwave.svg";
import CustomButton from "../custom-button/custom-button.component";

const iconStyles = {
	w: "0.7rem",
	marginX: "auto",
};

const checkoutStyles = {
	size: "sm",
	mb: "0.5rem",
};

const paymentCheckboxStyles = {
	w: "30%",
	borderRadius: "1rem",
	boxShadow: "0 1px 2px 0 grey",
	h: "2rem",
	justify: "center",
	_hover: { boxShadow: "0 3px 4px 0 grey" },
};

const checkboxImageStyles = {
	ml: "10%",
	w: "60%",
	h: "1rem",
	mt: "0.4rem",
};

const Payment = () => {
	return (
		<>
			<Flex flexDir="column" mt="2rem" align="flex-start">
				<Text fontWeight="bold" color={`${COLORS.PAYMENT_PAGE_COLOR}`}>
					Summary
				</Text>
				<Flex
					flexDir="row"
					align="center"
					justify="space-around"
					w="100%"
					mt="1rem">
					<Flex
						flexDir="row"
						h="1.8rem"
						width="10rem"
						boxShadow="0 1px 2px 0 grey"
						bgColor="#F3F6FF"
						borderRadius="1rem"
						justifyContent="space-between"
						align="center">
						<MinusIcon
							as="button"
							//onClick={() => console.log("clicked me")}
							{...iconStyles}
						/>
						<Box w="50%" h="100%" textAlign="center" borderX="1px solid black">
							1 Year
						</Box>
						<AddIcon
							as="button"
							//onClick={() => console.log("clicked me")}
							{...iconStyles}
						/>
					</Flex>
					<Box
						boxShadow="0 1px 2px 0 grey"
						fontWeight="bold"
						h="2.2rem"
						w="4rem"
						textAlign="center"
						borderRadius="5rem"
						fontSize="1.4rem"
						color="#20C605">
						<Box as="span" fontSize="1.1rem">
							#
						</Box>
						10
					</Box>
				</Flex>
				<Divider mb="0.5rem" mt="2rem" />
				<Flex flexDir="row" w="100%" mt="0.5rem">
					<Flex
						flexDir="column"
						w="50%"
						align="flex-start"
						justify="space-evenly">
						<Checkbox {...checkoutStyles}>Free Domain</Checkbox>
						<Checkbox {...checkoutStyles}>SSL</Checkbox>
						<Checkbox {...checkoutStyles}>Custom Store</Checkbox>
						<Checkbox {...checkoutStyles}>Quick Payout</Checkbox>
					</Flex>
					<Flex
						flexDir="column"
						w="50%"
						align="flex-start"
						justify="space-evenly">
						<Checkbox {...checkoutStyles}>Dedicated Dashboard</Checkbox>
						<Checkbox {...checkoutStyles}>Sales Tracking</Checkbox>
						<Checkbox {...checkoutStyles}>Coupon Generation</Checkbox>
						<Checkbox {...checkoutStyles}>Maintenance</Checkbox>
					</Flex>
				</Flex>
				<Text
					fontWeight="bold"
					color={`${COLORS.PAYMENT_PAGE_COLOR}`}
					fontSize="0.8rem"
					mt="3rem">
					Choose Payment Method
				</Text>
				<Flex flexDir="row" justify="space-around" mt="1rem">
					<Flex flexDir="row" {...paymentCheckboxStyles}>
						<Checkbox />
						<Image src={PaypalLogo} alt="paypal" {...checkboxImageStyles} />
					</Flex>
					<Flex flexDir="row" {...paymentCheckboxStyles}>
						<Checkbox />
						<Image
							src={FlutterwaveLogo}
							alt="flutterwave"
							{...checkboxImageStyles}
						/>
					</Flex>
					<Flex flexDir="row" {...paymentCheckboxStyles}>
						<Checkbox />
						<Image src={StripeLogo} alt="stripe" {...checkboxImageStyles} />
					</Flex>
				</Flex>
				<Flex flexDir="row" mt="2rem" w="100%" justify="center">
					<CustomButton
						color={COLORS.WHITE}
						bgColor={COLORS.PAYMENT_PAGE_COLOR}
						w="10rem"
						h="2.5rem">
						Checkout
					</CustomButton>
				</Flex>
			</Flex>
		</>
	);
};

export default Payment;
