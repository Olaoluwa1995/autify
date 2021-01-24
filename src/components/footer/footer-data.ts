import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

type LinkDataOptions = {
	key: number;
	title: string;
	url: string;
};

type ColumnData = {
	key: number;
	title: string;
	links: LinkDataOptions[];
};

export const middleColumnData: ColumnData[] = [
	{
		key: 1,
		title: "About",
		links: [
			{
				key: 1,
				title: "Profile",
				url: "#",
			},
			{
				key: 2,
				title: "Features",
				url: "#",
			},
			{
				key: 3,
				title: "Careers",
				url: "#",
			},
			{
				key: 4,
				title: "DW News",
				url: "#",
			},
		],
	},
	{
		key: 2,
		title: "Help",
		links: [
			{
				key: 1,
				title: "Support",
				url: "#",
			},
			{
				key: 2,
				title: "Sign up",
				url: "#",
			},
			{
				key: 3,
				title: "Guide",
				url: "#",
			},
			{
				key: 4,
				title: "Reports",
				url: "#",
			},
			{
				key: 5,
				title: "Q&A",
				url: "#",
			},
		],
	},
];

type SocialIconsOptions = {
	key: number;
	name: string;
	as: any;
	fill: string;
	url: string;
	homeFont?: string;
	signupFont?: string;
};

export const socialIcons: SocialIconsOptions[] = [
	{
		key: 1,
		name: "facebook",
		as: FaFacebook,
		url: "#",
		fill: "#5096FE",
		homeFont: "2rem",
		signupFont: "1.2rem",
	},
	{
		key: 2,
		name: "twitter",
		as: AiFillTwitterCircle,
		url: "#",
		fill: "#7EF0F8",
		homeFont: "2.35rem",
		signupFont: "1.3rem",
	},
	{
		key: 3,
		name: "google plus",
		as: FaGooglePlus,
		url: "#",
		fill: "#FF4747",
		homeFont: "2rem",
		signupFont: "1.2rem",
	},
];
