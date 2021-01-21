import { IconButton } from "@chakra-ui/react";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

type Props = {
	showPassword: boolean;
	onShowPassword: () => void;
};

const PasswordToggler: React.FC<Props> = ({
	showPassword,
	onShowPassword,
	...otherProps
}) => (
	<IconButton
		variant="ghost"
		size="lg"
		_hover={{
			background: "primary-color-light",
			outline: "none",
			border: "none",
		}}
		_active={{
			background: "primary-color-light",
			outline: "none",
			border: "none",
		}}
		isRound
		color="white"
		aria-label={showPassword ? "hide password" : "show password"}
		icon={showPassword ? <ViewOffIcon h={6} w={6} /> : <ViewIcon h={6} w={6} />}
		onClick={onShowPassword}
		background="primary-color-light"
		w="30px"
		h="30px"
		{...otherProps}
	/>
);

export default PasswordToggler;
