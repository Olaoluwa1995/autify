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
				h="350px"
				mb="700px">
				<Header marginLeft="32%" isButtonVisible={false} />
				<SignUpSection />
			</Flex>
			<Divider />
			<Footer />
		</>
	);
};

export default SignUpPage;
