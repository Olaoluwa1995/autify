import styled from "styled-components";
import { Swiper } from "swiper/react";

export const TestimonialsContainer = styled.div`
	display: block;
	margin-left: 10%;
	margin-right: 18%;
	background-color: #9c69e2;
	border-radius: 50px;
	margin-top: 80px;
`;

export const SwiperContainer = styled.div`
	display: flex;
	padding-top: 23%;
	height: 100%;
	padding-bottom: 5%;
`;

export const SwiperDiv = styled(Swiper)`
	width: 100%;
	height: 60%;
	padding-bottom: 3%;

	.swiper-button-prev,
	.swiper-button-next {
		color: black;
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

// .card {
// 	/* Add shadows to create the "card" effect */
// 	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
// 	transition: 0.3s;
//   }

//   /* On mouse-over, add a deeper shadow */
//   .card:hover {
// 	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//   }
