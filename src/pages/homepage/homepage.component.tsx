import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/header/header.component";
import BannerSection from "../../components/banner-section/banner-section.component";
import AboutSection from "../../components/about-section/about-section.component";

const HomePage = () => {
	return (
		<>
			<Flex direction="column" bgGradient="linear(to-b, #68C9BA, #FFFFFF)">
				<Header />
				<BannerSection />
			</Flex>
			<Flex>
				<AboutSection />
			</Flex>
		</>
	);
};

export default HomePage;
