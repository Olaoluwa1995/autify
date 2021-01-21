import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import { FooterColoredShapes } from "../../assets/shapes/shapes";
import { middleColumnData } from "./footer-data";
import { socialIcons } from "./footer-data";

export const FirstColumn = () => {
	return (
		<Flex flexDir="column" width="35%" alignItems="flex-start">
			<Flex flexDir="row">
				<FooterColoredShapes />
				<Box fontSize="16px" fontWeight="bold" pl="80%">
					Autify
				</Box>
			</Flex>
			<Box fontSize="11px" mt="15%">
				Samonda, Ibadan Nigeria
			</Box>
			<Box fontSize="12px" mt="15%" fontWeight="bold" textAlign="justify">
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
			width="35%"
			alignItems="flex-start"
			justifyContent="space-around">
			{middleColumnData.map((column) => {
				return (
					<Flex flexDir="column" key={column.key} alignItems="flex-start">
						<Box fontSize="16px" fontWeight="bold" mb="30px">
							{column.title}
						</Box>

						{column.links.map((link) => {
							return (
								<Flex
									key={link.key}
									flexDir="column"
									mb="20%"
									textAlign="justify">
									<LinkItem url={link.url} fontSize="13px">
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
		<Flex flexDir="column" w="30%" pl="5%">
			<Box fontSize="16px" fontWeight="bold" mb="30px">
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
