import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import OverlayImage from "../../assets/images/testimonial-overlay.png";
import UnderlayImage from "../../assets/images/testimonial-underlay.png";
import { TestimonialsContainer } from "./testimonials-section.styles.d";
import { SwiperContainer, SwiperDiv } from "./testimonials-section.styles.d";
import { slides } from "./testimonials-data";
import SlideContent from "./slide-content";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TestimonialsSection = () => {
	return (
		<>
			<TestimonialsContainer>
				<Box
					pt={{ base: "15px", sm: "20px" }}
					w={{ base: "96%", md: "80%" }}
					position="absolute">
					<Image src={UnderlayImage} alt="underlay image" />
				</Box>
				<Box w={{ base: "96%", md: "80%" }} position="absolute">
					<Image src={OverlayImage} alt="overlay image" />
				</Box>
				<Box
					position="absolute"
					fontSize={{ base: "1.5rem", sm: "2.5rem" }}
					fontWeight="bold"
					color="#FFFF"
					mt={{ base: "11%", sm: "10%", md: "8.5%" }}
					marginLeft={{ base: "3%", sm: "6%" }}>
					Testimonials
				</Box>
				<SwiperDiv>
					<SwiperContainer
						autoplay={{ delay: 2000, disableOnInteraction: false }}
						speed={800}
						navigation
						pagination
						centeredSlides={true}
						slidesPerView={1.7}
						spaceBetween={40}>
						{slides.map((slide) => {
							return (
								<SwiperSlide key={slide.key}>
									<SlideContent
										name={slide.name}
										src={slide.src}
										title={slide.title}
										description={slide.description}
									/>
								</SwiperSlide>
							);
						})}
					</SwiperContainer>
				</SwiperDiv>
			</TestimonialsContainer>
		</>
	);
};

export default TestimonialsSection;
