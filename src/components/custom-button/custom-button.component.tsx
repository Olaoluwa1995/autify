import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import ButtonLoader from "./button-loader/button-loader.component";

export type CustomButtonProps = {
	to?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
	width,
	height,
	backgroundColor,
	children,
	...otherProps
}) => {
	return (
		<Button
			w={width}
			rounded="50px"
			fontSize="0.9rem"
			border="1px solid white"
			backgroundColor={backgroundColor}
			boxShadow="0px 8px 5px rgba(75, 93, 104, 0.1)"
			h={height}
			fontWeight="normal"
			_hover={{
				border: "2px solid blue",
			}}
			spinner={<ButtonLoader />}
			{...otherProps}>
			{children}
		</Button>
	);
};

export default CustomButton;
