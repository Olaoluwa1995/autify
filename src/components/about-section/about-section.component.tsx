import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { ReactComponent as AboutSectionImage } from "../../assets/images/about-image.svg";

const AboutSection = () => {
	const bannerText = `
    The place to store various data that you can access at 
    any time through the internet  and where you can carry it. 
    This very flexible storage area has a high level of security. 
    To enter into your own data you must enter the password that 
    you created when you registered in this Data Warehouse. 
	`;

	return (
		<>
			<Flex
				h="400px"
				mt="50px"
				ml="10%"
				mr="18%"
				backgroundColor="rgba(240, 99, 184, 0.15)"
				borderRadius="50px">
				<Flex ml="-2.5%" w="50%">
					<Box as={AboutSectionImage} />
				</Flex>

				<Flex w="50%" mt="12%" ml="5%" mr="9%" direction="column">
					<Box as="p" fontSize="25px" fontWeight="bolder" textAlign="start">
						Scale With{" "}
						<Box as="span" color="#656691">
							Autify
						</Box>
					</Box>
					<Box as="p" fontSize="12px" textAlign="justify">
						{bannerText}
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default AboutSection;
