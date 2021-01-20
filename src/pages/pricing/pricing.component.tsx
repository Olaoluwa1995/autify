import React from "react";
import { Flex } from "@chakra-ui/react";

import PricingSection from "../../components/pricing-section/pricing-section.component";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { Divider } from "../../styles/divider.d";

const PricingPage = () => {
	return (
		<>
			<Flex
				direction="column"
				bgGradient="linear(to-b, #68C9BA, #FFFFFF)"
				h="350px"
				mb="750px">
				<Header marginLeft="32%" isButtonVisible={false} />
				<PricingSection />
			</Flex>
			<Divider />
			<Footer />
		</>
	);
};

export default PricingPage;
