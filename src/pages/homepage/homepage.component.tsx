import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/header/header.component";
import BannerSection from "../../components/banner/banner.component";

const HomePage = () => {
	return (
		<Flex direction="column" bgGradient="linear(to-b, #68C9BA, #FFFFFF)">
			<Header />
			<BannerSection />
		</Flex>
	);
};

export default HomePage;
