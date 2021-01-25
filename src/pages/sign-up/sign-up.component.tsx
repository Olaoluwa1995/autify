import React from "react";
import { Flex } from "@chakra-ui/react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { Divider } from "../../styles/divider.d";
import SignUpSection from "../../components/sign-up-section/sign-up-section.component";

const SignUpPage = () => {
	return (
		<>
			<Flex
				direction="column"
				bgGradient="linear(to-b, #68C9BA, #FFFFFF)"
				h="20rem"
				mb={{ base: "32rem", sm: "38rem" }}>
				<Header
					as="header"
					isButtonVisible={false}
					flexDir={{ base: "row-reverse", sm: "row" }}
				/>
				<SignUpSection />
			</Flex>
			<Divider />
			<Footer />
		</>
	);
};

export default SignUpPage;
