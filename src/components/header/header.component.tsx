import React from "react";

import HeaderShapes from "./header-shapes.component";
import { headerLinksData } from "./header.data";
import { FlexContainer } from "./header.styles.d";
import LinkItem from "../link-item/link-item.component";

const Header = () => {
	return (
		<>
			<FlexContainer>
				<HeaderShapes />
				<FlexContainer style={{ marginTop: "40px", marginLeft: "200px" }}>
					{headerLinksData.map((data: any) => {
						return (
							<LinkItem
								aria-label={data.title}
								style={{ marginLeft: "30px" }}
								url={data.url}>
								{data.title}
							</LinkItem>
						);
					})}
				</FlexContainer>
			</FlexContainer>
		</>
	);
};

export default Header;
