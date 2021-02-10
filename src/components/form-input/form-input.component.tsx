import {
	BoxProps,
	FormControl,
	FormControlProps,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	FormLabelProps,
	Input,
	InputElementProps,
	InputGroup,
	InputLeftElement,
	InputProps,
	InputRightElement,
	Textarea,
	TextareaProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PasswordToggler from "./password-toggler.component";

interface Props {
	formControlProps?: FormControlProps;
	isTouched?: boolean | any;
	error?: string | any;
	labelProps?: FormLabelProps;
	leftElement?: InputElementProps;
	rightElement?: InputElementProps;
	tip?: BoxProps;
	placeholder?: string;
}

export type FormInputProps = Props & InputProps & TextareaProps;

const FormInput: React.FC<FormInputProps> = ({
	isRequired,
	isTouched,
	error,
	formControlProps,
	name,
	size = "lg",
	type = "text",
	w,
	leftElement,
	rightElement,
	labelProps,
	tip,
	placeholder,
	...otherProps
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const onShowPassword = () => setShowPassword(!showPassword);

	const decideRightElement = () => {
		const children =
			type === "password" ? (
				<PasswordToggler
					showPassword={showPassword}
					onShowPassword={onShowPassword}
				/>
			) : (
				rightElement?.children
			);

		return (
			<InputRightElement
				h="100%"
				children={children}
				{...(rightElement && rightElement)}
			/>
		);
	};

	return (
		<FormControl
			id={name}
			isInvalid={!!(isTouched && error)}
			my={{ base: "0.3rem", md: "0.5rem" }}
			isRequired={isRequired}
			w={w || "100%"}
			{...formControlProps}
			pos="relative">
			{labelProps?.children && (
				<FormLabel
					htmlFor={name}
					fontSize={{ base: "sm", md: "md" }}
					ml={2}
					color="black"
					// mb="0"
					{...labelProps}>
					{labelProps?.children}
				</FormLabel>
			)}

			<InputGroup size={size} h="2.5rem">
				{leftElement && <InputLeftElement {...leftElement} h="100%" />}

				{type === "textarea" ? (
					<Textarea {...otherProps} fontSize="0.9rem" />
				) : (
					<Input
						type={showPassword ? "text" : type}
						border="2px solid#9C69E2"
						rounded="10px"
						{...otherProps}
						fontSize="0.8rem"
						h="100%"
						color="grey"
						placeholder={placeholder}
					/>
				)}

				{decideRightElement()}
			</InputGroup>

			{tip && (
				<FormHelperText
					fontSize={{ base: "xs", sm: "sm" }}
					mb={2}
					mt={0}
					{...tip}
				/>
			)}

			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export default React.memo(FormInput);
