import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import { FooterColoredShapes } from "../shapes/shapes";
import { middleColumnData } from "./footer-data";
import { socialIcons } from "./footer-data";

export const FirstColumn = () => {
	return (
		<Flex flexDir="column" width="35%" alignItems="flex-start">
			<Box>
				<FooterColoredShapes />
				<Box fontSize="18px" fontWeight="bold" pl="80%">
					Autify
				</Box>
			</Box>
			<Box fontSize="11px" mt="20%">
				Samonda, Ibadan Nigeria
			</Box>
			<Box fontSize="12px" mt="20%" fontWeight="bold" textAlign="justify">
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
					<Flex flexDir="column" key={column.key}>
						<Box fontSize="18px" fontWeight="bold" mb="80%">
							{column.title}
						</Box>

						{column.links.map((link) => {
							return (
								<Flex
									key={link.key}
									flexDir="column"
									mb="30%"
									fontSize="13px"
									textAlign="justify">
									<LinkItem url={link.url}>{link.title}</LinkItem>
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
		<Flex flexDir="column" w="30%" alignItems="center">
			<Box fontSize="18px" fontWeight="bold" mb="13%">
				Social Media
			</Box>
			<Flex flexDir="row">
				{socialIcons.map((icon) => {
					return (
						<LinkItem key={icon.key} url={icon.url} ml="5%">
							<Image src={icon.src} alt={icon.name} />
						</LinkItem>
					);
				})}
			</Flex>
		</Flex>
	);
};
