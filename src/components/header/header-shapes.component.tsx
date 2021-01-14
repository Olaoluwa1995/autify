import React from "react";

import {
	FirstColoredShape,
	SecondColoredShape,
	FlexContainer,
} from "./header.styles.d";

const HeaderShapes = () => {
	return (
		<>
			<FlexContainer>
				<FirstColoredShape />
				<SecondColoredShape />
			</FlexContainer>
		</>
	);
};

export default HeaderShapes;
