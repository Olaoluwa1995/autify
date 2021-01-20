import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import AboutSectionImage from "../../assets/images/about.png";

const AboutSection = () => {
	const aboutText = `
    The place to store various data that you can access at 
    any time through the internet  and where you can carry it. 
    This very flexible storage area has a high level of security. 
    To enter into your own data you must enter the password that 
    you created when you registered in this Data Warehouse. 
	`;

	return (
		<>
			<Flex
				mt="80px"
				mx="10%"
				backgroundColor="rgba(240, 99, 184, 0.15)"
				borderRadius="50px">
				<Flex ml="-2.5%" w="50%">
					<Image
						src={AboutSectionImage}
						alt="about section image"
						w="100%"
						my="10%"
					/>
				</Flex>

				<Flex w="50%" mt="11%" ml="6%" mr="10%" direction="column" mb="10%">
					<Box as="p" fontSize="35px" fontWeight="bolder" textAlign="start">
						Scale With{" "}
						<Box as="span" color="#656691">
							Autify
						</Box>
					</Box>
					<Box as="p" fontSize="17px" textAlign="justify" mt="10%">
						{aboutText}
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default AboutSection;
