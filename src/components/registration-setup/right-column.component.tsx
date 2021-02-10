import React from "react";
import {
	Flex,
	Tab,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
} from "@chakra-ui/react";

import { COLORS } from "../../styles/theme";
import { FirstText, SecondText } from "./registration-setup.styles.d";
import Registration from "../registration/registration.component";
import Payment from "../payment/payment.component";
import Setup from "../setup/setup.component";

const progressBarStyles = {
	border: `1px solid ${COLORS.PRIMARY_COLOR}`,
	w: "30%",
	h: "3rem",
	borderRadius: "0.3rem",
	_focus: { boxShadow: "none" },
	transform: "skew(-30deg)",
	bg: `${COLORS.SIGN_UP_PROGRESS_BAR_COLOR}`,
	_selected: { color: "white", bg: `${COLORS.PRIMARY_COLOR}` },
};

const RightColumn = () => {
	return (
		<Flex w={{ base: "100%", md: "60%" }} flexDir="column" align="center">
			<Tabs
				isLazy
				//index={0}
				//onChange={() => console.log("write it later")}
				variant="unstyled"
				w="100%"
				mt="2rem">
				<TabList justifyContent="center" overflowX="hidden">
					<Tab flexDir="column" {...progressBarStyles}>
						<FirstText>Step 1</FirstText>
						<SecondText>Registration</SecondText>
					</Tab>
					<Tab flexDir="column" {...progressBarStyles}>
						<FirstText>Step 2</FirstText>
						<SecondText>Payment</SecondText>
					</Tab>
					<Tab flexDir="column" {...progressBarStyles}>
						<FirstText>Step 3</FirstText>
						<SecondText>Setup</SecondText>
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Registration />
					</TabPanel>
					<TabPanel>
						<Payment />
					</TabPanel>
					<TabPanel>
						<Setup />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default RightColumn;
