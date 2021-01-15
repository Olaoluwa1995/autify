import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import ButtonLoader from "./button-loader/button-loader.component";

export type CustomButtonProps = {
	to?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	...otherProps
}) => {
	return (
		<Button
			w="200px"
			rounded="50px"
			fontSize="0.9rem"
			border="1px solid white"
			backgroundColor="white"
			//borderRadius="50px"
			boxShadow="0px 5px 5px rgba(75, 93, 104, 0.1)"
			mt="20px"
			h="50px"
			ml="80%"
			maxW="200px"
			fontW
			eight="normal"
			_hover={{
				border: "2px solid #9c69e2",
			}}
			spinner={<ButtonLoader />}
			{...otherProps}>
			{children}
		</Button>
	);
};

export default CustomButton;
