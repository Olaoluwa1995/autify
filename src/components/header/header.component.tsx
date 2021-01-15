import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import HeaderShapes from "./header-shapes.component";
import { headerLinksData } from "./header.data";
import { HeaderContainer, FlexContainer } from "./header.styles.d";
import LinkItem from "../link-item/link-item.component";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderShapes />
				<FlexContainer style={{ marginLeft: "25%", marginTop: "45px" }}>
					{headerLinksData.map((data: any) => {
						return (
							<LinkItem
								aria-label={data.title}
								style={{ marginLeft: "15%" }}
								url={data.url}>
								{data.title}
							</LinkItem>
						);
					})}
				</FlexContainer>

				<CustomButton>
					<h4>Request Pricing</h4>
					<ArrowForwardIcon
						style={{ fontWeight: "bold", fontSize: "30px" }}
						color="#9c69e2"
					/>
				</CustomButton>
			</HeaderContainer>
		</>
	);
};

export default Header;
