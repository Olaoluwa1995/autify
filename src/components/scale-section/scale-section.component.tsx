import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import AboutSectionImage from "../../assets/images/about.png";
import { COLORS } from "../../styles/theme";

const ScaleSection = () => {
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
				as="section"
				mt={{ base: "60px", sm: "80px" }}
				mx={{ base: "5%", sm: "10%" }}
				backgroundColor="rgba(240, 99, 184, 0.15)"
				borderRadius={{ base: "20px", sm: "50px" }}>
				<Flex ml="-2.5%" w="50%" display={{ base: "none", sm: "flex" }}>
					<Image
						src={AboutSectionImage}
						alt="about section image"
						w="100%"
						my="10%"
					/>
				</Flex>

				<Flex
					w={{ base: "100%", sm: "50%" }}
					mt="11%"
					ml="6%"
					mr={{ base: "6%", sm: "10%" }}
					direction="column"
					mb="10%">
					<Box
						as="h2"
						fontSize={{ base: "1.8rem", sm: "2rem" }}
						fontWeight="700"
						textAlign={{ base: "center", sm: "start" }}>
						Scale With{" "}
						<Box as="span" color={COLORS.AUTIFY_COLOR}>
							Autify
						</Box>
					</Box>
					<Box
						as="p"
						textAlign={{ base: "center", sm: "justify" }}
						mt={{ base: "5%", sm: "10%" }}>
						{aboutText}
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default ScaleSection;
