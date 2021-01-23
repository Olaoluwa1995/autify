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
				<Flex
					direction={{ base: "column", md: "row" }}
					alignItems="start"
					mx={{ base: "2%", md: "10%" }}>
					<Flex
						w={{ base: "100%", md: "30%" }}
						justifyContent="center"
						marginTop={{ base: "4%", md: "10%" }}>
						<Avatar size="lg" name={name} src={src} />
					</Flex>
					<Flex
						direction="column"
						textAlign="justify"
						mx={{ base: "5%", md: "8%" }}>
						<Box
							mt={{ base: "5%", md: "20%" }}
							fontSize={{ base: "medium", md: "large" }}
							fontWeight="bold">
							{name}
						</Box>
						<Box fontSize="smaller">{title}</Box>
						<Box
							mt={{ base: "2%", md: "5%" }}
							mb="20%"
							fontSize={{ base: "small", md: "medium" }}>
							{description}
						</Box>
					</Flex>
				</Flex>
			</SlideContainer>
		</>
	);
};

export default SlideContent;
