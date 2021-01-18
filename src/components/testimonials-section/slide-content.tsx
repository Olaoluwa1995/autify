import React from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";

type SlideContentProps = {
	name: string;
	src: string;
	title: string;
	description: string;
};
const SlideContent = ({ name, src, title, description }: SlideContentProps) => {
	return (
		<>
			<Box h="300px" w="500px" borderRadius="50px" backgroundColor="white">
				<Flex direction="row" alignItems="start" mx="10%">
					<Flex w="30%" marginTop="10%">
						<Avatar name={name} src={src} />
					</Flex>
					<Flex direction="column" textAlign="justify" ml="20%">
						<Box mt="20%" fontWeight="bold">
							{name}
						</Box>
						<Box fontSize="smaller">{title}</Box>
						<Box mt="5%" fontSize="medium">
							{description}
						</Box>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default SlideContent;
