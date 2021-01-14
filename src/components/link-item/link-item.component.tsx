import {
	Box,
	BoxProps,
	Flex,
	Icon,
	keyframes,
	LinkBoxProps,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const underline = keyframes`
  from { width: 0; background: 'white'}
  to { width: "60%"; background: 'red' }
`;

export const linkItemHoverStyles = {
	animation: `${underline} 0.2s linear`,
	w: "100%",
};

export interface LinkItemProps {
	children?: any;
	url: string;
	textProps?: BoxProps;
	className?: string;
	isLink?: boolean;
	isAnchor?: boolean;
	underline?: boolean;
	hoverStyles?: BoxProps;
	underlineProps?: BoxProps;
	hoverProps?: BoxProps;
	smooth?: boolean;
	icon?: any;
}

export type LinkProps = LinkItemProps & BoxProps & LinkBoxProps;

const LinkItem: React.FC<LinkProps> = ({
	children,
	url,
	icon,
	isLink = false,
	isAnchor = false,
	className = "",
	hoverStyles = linkItemHoverStyles,
	textProps,
	underline = false,
	underlineProps,
	hoverProps,
	...otherProps
}) => {
	return (
		<Box
			as={isAnchor ? "a" : isLink ? Link : NavLink}
			{...(isAnchor ? { href: url } : { to: url })}
			mx={{ base: "0.7rem", lg: 4 }}
			fontSize={{ base: "0.9rem", lg: "1rem" }}
			textDecoration="none"
			_hover={{ textDecoration: "none", color: "inherit", ...hoverProps }}
			role="group"
			zIndex={2}
			className={className}
			{...otherProps}>
			<Flex as="span" {...textProps}>
				{icon && <Icon as={icon} />}
				{children}
			</Flex>

			{underline && (
				<Box
					h="3px"
					background="red"
					w="0%"
					borderRadius="50px"
					position="relative"
					top="5px"
					mx="auto"
					{...underlineProps}
					_groupHover={hoverStyles}
				/>
			)}
		</Box>
	);
};

export default React.memo(LinkItem);
