import React from "react";
import { Flex } from "@chakra-ui/react";

import Header from "../../components/header/header.component";
import BannerSection from "../../components/banner-section/banner-section.component";
import AboutSection from "../../components/about-section/about-section.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import TestimonialsSection from "../../components/testimonials-section/testimonials-section.component";
import Footer from "../../components/footer/footer.component";
import { Divider } from "../../styles/divider.d";

const HomePage = () => {
	return (
		<>
			<Flex direction="column" bgGradient="linear(to-b, #68C9BA, #FFFFFF)">
				<Header isButtonVisible />
				<BannerSection />
			</Flex>
			<AboutSection />
			<FeaturesSection />
			<TestimonialsSection />
			<Divider />
			<Footer />
		</>
	);
};

export default HomePage;
