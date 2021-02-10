import React from "react";
import { Flex } from "@chakra-ui/react";

import Header from "../../components/header/header.component";
import BannerSection from "../../components/banner-section/banner-section.component";
import ScaleSection from "../../components/scale-section/scale-section.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import TestimonialsSection from "../../components/testimonials-section/testimonials-section.component";
import Footer from "../../components/footer/footer.component";
import { PageDivider } from "../../styles/divider.d";

const Home = () => {
	return (
		<>
			<Header as="header" isButtonVisible flexDir="row" />
			<Flex as="main" flexDir="column">
				<BannerSection />
				<ScaleSection />
				<FeaturesSection />
				<TestimonialsSection />
			</Flex>
			<PageDivider />
			<Footer />
		</>
	);
};

export default Home;
