import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import { FooterColoredShapes } from "../../assets/shapes/shapes";
import { middleColumnData } from "./footer-data";
import { socialIcons } from "./footer-data";

export const FirstColumn = () => {
	return (
		<Flex
			flexDir="column"
			width={{ base: "100%", sm: "35%" }}
			ml={{ base: "35%", sm: "0" }}
			alignItems="flex-start">
			<Flex flexDir="row">
				<FooterColoredShapes />
				<Box fontWeight="bold" pl="80%">
					Autify
				</Box>
			</Flex>
			<Box fontSize="0.7rem" mt={{ base: "10px", sm: "25%" }}>
				Samonda, Ibadan Nigeria
			</Box>
			<Box
				fontSize="0.75rem"
				mt={{ base: "15px", sm: "35%" }}
				fontWeight="bold"
				textAlign="justify">
				<Box>info@autify.project</Box>
				<Box>1-232-3434</Box>
			</Box>
		</Flex>
	);
};

export const SecondColumn = () => {
	return (
		<Flex
			flexDir="row"
			width={{ base: "100%", sm: "35%" }}
			alignItems="flex-start"
			mt={{ base: "20px", sm: "0" }}
			justifyContent={{ base: "space-evenly", sm: "space-around" }}>
			{middleColumnData.map((column) => {
				return (
					<Flex flexDir="column" key={column.key} alignItems="flex-start">
						<Box fontWeight="bold" mb={{ base: "15px", sm: "30px" }}>
							{column.title}
						</Box>

						{column.links.map((link) => {
							return (
								<Flex
									key={link.key}
									flexDir="column"
									mb="20%"
									textAlign="justify">
									<LinkItem url={link.url} fontSize="0.8rem">
										{link.title}
									</LinkItem>
								</Flex>
							);
						})}
					</Flex>
				);
			})}
		</Flex>
	);
};

export const ThirdColumn = () => {
	return (
		<Flex
			flexDir="column"
			w={{ base: "100%", sm: "30%" }}
			pl={{ base: "0", sm: "5%" }}
			alignItems={{ base: "center", sm: "unset" }}>
			<Box fontWeight="bold" mb={{ base: "10px", sm: "35px" }}>
				Social Media
			</Box>
			<Flex flexDir="row">
				{socialIcons.map((icon) => {
					return (
						<LinkItem key={icon.key} url={icon.url} mr="2%">
							<Image src={icon.src} alt={icon.name} w="40px" minW="30px" />
						</LinkItem>
					);
				})}
			</Flex>
		</Flex>
	);
};
