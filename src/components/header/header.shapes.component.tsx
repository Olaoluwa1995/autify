import React from "react";

import {
	FirstColoredShape,
	SecondColoredShape,
	CombinedColoredShape,
} from "./header.styles.d";

const HeaderShapes = () => {
	return (
		<>
			<CombinedColoredShape>
				<FirstColoredShape />
				<SecondColoredShape />
			</CombinedColoredShape>
		</>
	);
};

export default HeaderShapes;
