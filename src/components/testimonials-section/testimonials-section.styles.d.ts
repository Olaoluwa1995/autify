import styled from "styled-components";
import { Swiper } from "swiper/react";

import ChatIcon from "../../assets/icons/arrow.svg";

export const TestimonialsContainer = styled.div`
	display: block;
	margin: 0 10%;
	background-color: #9c69e2;
	border-radius: 50px;
	margin-top: 80px;
	max-width: 1120px;
`;

export const SwiperContainer = styled.div`
	display: flex;
	padding-top: 20%;
	height: 100%;
	padding-bottom: 4%;
`;

export const SwiperDiv = styled(Swiper)`
	width: 100%;
	height: 320px;
	padding-bottom: 3%;

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
	}

	.swiper-button-prev::after {
		display: none;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: black;
		margin-top: 130px;
		margin-left: 82%;
		margin-right: 5%;
	}

	.swiper-pagination {
		bottom: 0px;
		width: 20%;
		--swiper-theme-color: red;
	}
	.swiper-wrapper {
		padding: 0;

		.swiper-slide {
			list-style: none;
		}
	}
`;

export const SlideContainer = styled.div`
	border-radius: 50px;
	background-color: white;
	box-shadow: 0 15px 8px 0 #803cde;
`;
