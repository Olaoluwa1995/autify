import styled from "styled-components";

const borderRadius = "20px";
const firstShapeColor = "#9c69e2";
const secondShapeColor = "#f063b8";
const headerShapesWidth = "20px";
const footerShapesWidth = "15px";

export const FirstHeaderColoredShape = styled.div`
	width: ${headerShapesWidth};
	height: ${headerShapesWidth};

	background: ${firstShapeColor};
	border-radius: ${borderRadius};
`;

export const SecondHeaderColoredShape = styled.div`
	width: ${headerShapesWidth};
	height: 35px;
	margin-left: 5px;

	background: ${secondShapeColor};
	border-radius: ${borderRadius};
`;

export const FirstFooterColoredShape = styled.div`
	width: ${footerShapesWidth};
	height: ${footerShapesWidth};
	margin-top: 10px;

	background: ${firstShapeColor};
	border-radius: ${borderRadius};
`;

export const SecondFooterColoredShape = styled.div`
	width: ${footerShapesWidth};
	height: 25px;
	margin-left: 5px;

	background: ${secondShapeColor};
	border-radius: ${borderRadius};
`;
