import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";

import ChatIcon from "../../assets/icons/arrow.svg";
import { COLORS } from "../../styles/theme";

export const TestimonialsContainer = styled.div`
	display: block;
	margin: 0 2%;
	background-color: ${COLORS.PRIMARY_COLOR};
	border-radius: 20px;
	margin-top: 4.5rem;
	max-width: 1120px;

	@media (min-width: 360px) {
		margin: 0 10%;
		margin-top: 4.5rem;
	}

	@media (min-width: 768px) {
		border-radius: 50px;
		margin-top: 5rem;
	}
`;

export const SwiperDiv = styled.div`
	display: flex;
	padding-top: 25%;
	height: 100%;
	padding-bottom: 4%;

	@media (min-width: 360px) {
		padding-top: 18%;
	}
	@media (min-width: 768px) {
		padding-top: 15%;
	}
`;

export const SwiperContainer = styled(Swiper)`
	height: 330px;
	padding-bottom: 3%;

	@media (min-width: 360px) {
		height: 350px;
		margin-top: 20px;
	}
	@media (min-width: 768px) {
		height: 360px;
	}

	.swiper-button-next {
		background-image: url(${ChatIcon}) !important;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: center;
		transform: rotate(180deg);
	}

	.swiper-button-next::after {
		display: none;
	}
	.swiper-button-prev {
		background-image: url(${ChatIcon}) !important;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: center;
		margin-left: 74%;

		@media (min-width: 360px) {
			margin-left: 68%;
		}

		@media (min-width: 768px) {
			margin-left: 80%;
		}
	}

	.swiper-button-prev::after {
		display: none;
	}

	.swiper-button-prev,
	.swiper-button-next {
		margin-top: 8rem;
		margin-right: 5%;

		@media (min-width: 768px) {
			margin-top: 9rem;
		}
	}

	.swiper-pagination {
		--swiper-theme-color: white;

		@media (min-width: 360px) {
			bottom: 10px;
			width: 40%;
		}

		@media (min-width: 768px) {
			bottom: 0px;
			width: 30%;
		}
	}
	.swiper-wrapper {
		padding: 0;

		.swiper-slide {
			list-style: none;
		}
	}
`;

export const SlideContainer = styled.div`
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 15px 8px 0 #803cde;

	@media (min-width: 360px) {
		margin-top: 10px;
	}
`;

export const ImageContainer = styled(Box)`
	position: absolute;
	width: 96%;

	@media (min-width: 360px) {
		width: 80%;
	}
`;
