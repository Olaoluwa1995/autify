import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import SignUpOverlayImage from "../../assets/shapes/sign-up-overlay.png";
import SignUpUnderlayImage from "../../assets/shapes/sign-up-underlay.png";
import LeftColumn from "./left-column.component";
import RightColumn from "./right-column.component";

const RegistrationSetup = () => {
	return (
		<>
			<Flex
				as="main"
				mx={{ base: "5%", sm: "10%" }}
				my="6rem"
				flexDir="column"
				maxW="62.5rem">
				<Image
					src={SignUpOverlayImage}
					alt="sign-up overlay"
					w="230px"
					minW="200px"
					position="absolute"
					display={{ base: "none", lg: "flex" }}
					mt={{ md: "500px", lg: "480px" }}
					ml={{ lg: "40px" }}
				/>
				<Image
					src={SignUpUnderlayImage}
					alt="sign-up underlay"
					w="230px"
					minW="200px"
					position="absolute"
					display={{ base: "none", lg: "flex" }}
					mt={{ md: "510px", lg: "520px" }}
					ml={{ md: "110px", lg: "150px" }}
					zIndex="-1"
				/>
				<Flex
					as="section"
					h="40.63rem"
					borderRadius="25px"
					boxShadow="0 1px 5px 1px grey"
					flexDir={{ base: "column", md: "row" }}
					ml={{ base: "0", lg: "15%" }}>
					<LeftColumn />
					<RightColumn />
				</Flex>
			</Flex>
		</>
	);
};

export default RegistrationSetup;
