import styled from "styled-components";

export const FirstText = styled.div`
	transform: skew(30deg);
	font-size: 0.7rem;

	@media (min-width: 690px) {
		font-size: 1rem;
	}
`;
export const SecondText = styled.div`
	transform: skew(30deg);
	font-size: 0.6rem;
	margin-left: 0.1rem;

	@media (min-width: 690px) {
		font-size: 0.8rem;
		margin-left: 1rem;
	}
`;
