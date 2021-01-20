import React from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import { SlideContainer } from "./testimonials-section.styles.d";

type SlideContentProps = {
	name: string;
	src: string;
	title: string;
	description: string;
};
const SlideContent = ({ name, src, title, description }: SlideContentProps) => {
	return (
		<>
			<SlideContainer>
				<Flex direction="row" alignItems="start" mx="10%">
					<Flex w="30%" marginTop="10%">
						<Avatar size="xl" name={name} src={src} />
					</Flex>
					<Flex direction="column" textAlign="justify" ml="10%">
						<Box mt="20%" fontSize="large" fontWeight="bold">
							{name}
						</Box>
						<Box fontSize="smaller">{title}</Box>
						<Box mt="5%" mb="20%" fontSize="medium">
							{description}
						</Box>
					</Flex>
				</Flex>
			</SlideContainer>
		</>
	);
};

export default SlideContent;
