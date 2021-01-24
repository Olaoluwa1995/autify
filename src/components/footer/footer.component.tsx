import React from "react";
import { Flex } from "@chakra-ui/react";

import AboveSection from "./footer-above-section.component";
import MiddleSection from "./footer-middle-section.component";
import BelowSection from "./footer-below-section.component";

const Footer = () => {
	return (
		<>
			<Flex
				as="footer"
				position="relative"
				flexDir="column"
				mx={{ base: "2%", sm: "10%" }}
				mb="1rem">
				<AboveSection />
				<MiddleSection />
				<BelowSection />
			</Flex>
		</>
	);
};

export default Footer;
