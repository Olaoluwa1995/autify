import React from "react";
import { Box, Image } from "@chakra-ui/react";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
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
				<Box pt="20px" w="72%" position="absolute">
					<Image src={UnderlayImage} alt="underlay image" w="100%" />
				</Box>
				<Box w="72%" position="absolute">
					<Image src={OverlayImage} alt="overlay image" w="100%" />
				</Box>
				<Box
					position="absolute"
					fontSize="40px"
					fontWeight="bold"
					color="#FFFF"
					marginTop="8.5%"
					marginLeft="6%">
					Testimonials
				</Box>
				<SwiperContainer>
					<SwiperDiv
						autoplay={{ delay: 2000 }}
						speed={800}
						navigation
						pagination
						centeredSlides={true}
						slidesPerView={1.7}
						spaceBetween={10}>
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
					</SwiperDiv>
				</SwiperContainer>
			</TestimonialsContainer>
		</>
	);
};

export default TestimonialsSection;
