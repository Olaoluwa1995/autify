import React from "react";
import { Box, Flex, Switch } from "@chakra-ui/react";

import CustomButton from "../custom-button/custom-button.component";

const PricingSection = () => {
	const pricingText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu vulputate amet fames ac non morbi cras ut. Vulputate diam id dolor sagittis rhoncus massa imperdiet auctor a.
    `;

	return (
		<>
			<Flex
				mt="15%"
				mx="10%"
				direction="column"
				alignItems="center"
				textAlign="center">
				<Box fontSize="40px" fontWeight="bolder" color="#212353" opacity="0.7">
					Pricing
				</Box>
				<Box fontSize="16px" mt="50px" mx="20%">
					{pricingText}
				</Box>
				<Flex flexDir="row" w="30%" mt="80px" fontSize="13px">
					<Box>Billed Monthly</Box>
					<Switch size="lg" mx="5%" />
					<Box>Billed Annually</Box>
				</Flex>
				<Box
					h="400px"
					w="35%"
					bgColor="#FEF5F6"
					borderRadius="30px"
					mt="80px"
					boxShadow="0 4px 4px 0 #000">
					<Flex flexDir="column">
						<Box fontSize="35px" fontWeight="500" mt="20px">
							Standard
						</Box>
						<Box fontSize="40px" fontWeight="900">
							$350
						</Box>
						<Box fontSize="25px" mt="40px">
							Some contents
						</Box>
						<Box>
							<CustomButton
								width="150px"
								backgroundColor="#9c69e2"
								mt="100px"
								height="50px">
								Create Account
							</CustomButton>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default PricingSection;
