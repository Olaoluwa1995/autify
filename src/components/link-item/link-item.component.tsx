import { Box, BoxProps, LinkBoxProps } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { COLORS } from "../../styles/theme";

export interface LinkItemProps {
	isLink?: boolean;
	isAnchor: boolean;
	url: any;
	children: any;
	hoverStyles?: BoxProps;
	hoverProps?: BoxProps;
}

export type LinkProps = LinkItemProps & BoxProps & LinkBoxProps;

const LinkItem: React.FC<LinkProps> = ({
	isLink = true,
	isAnchor = true,
	children,
	url,
	hoverProps,
	...otherProps
}) => {
	return (
		<Box
			as={isAnchor ? "a" : isLink ? Link : NavLink}
			{...(isAnchor ? { href: url } : { to: url })}
			to={url}
			fontSize={{ base: "0.9rem", lg: "1rem" }}
			textDecoration="none"
			_hover={{ textDecoration: "none", color: "inherit", ...hoverProps }}
			color={COLORS.PRIMARY_COLOR}
			{...otherProps}>
			{children}
		</Box>
	);
};

export default React.memo(LinkItem);
