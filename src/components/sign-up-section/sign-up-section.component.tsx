import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import SignUpOverlayImage from "../../assets/shapes/sign-up-overlay.png";
import SignUpUnderlayImage from "../../assets/shapes/sign-up-underlay.png";
import { LeftColumn, RightColumn } from "./sign-up-section-columns";

const SignUpSection = () => {
	return (
		<>
			<Flex mx="10%" mt="200px" flexDir="column" maxW="1000px">
				<Image
					src={SignUpOverlayImage}
					alt="sign-up overlay"
					w="230px"
					minW="200px"
					position="absolute"
					display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
					mt={{ md: "500px", lg: "480px" }}
					ml={{ lg: "40px" }}
				/>
				<Image
					src={SignUpUnderlayImage}
					alt="sign-up underlay"
					w="230px"
					minW="200px"
					position="absolute"
					display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
					mt={{ md: "510px", lg: "520px" }}
					ml={{ md: "120px", lg: "150px" }}
					zIndex="-1"
				/>
				<Flex
					h="650px"
					borderRadius="30px"
					boxShadow="0 3px 3px 2px #000"
					flexDir="row"
					ml="15%">
					<LeftColumn />
					<RightColumn />
				</Flex>
			</Flex>
		</>
	);
};

export default SignUpSection;
