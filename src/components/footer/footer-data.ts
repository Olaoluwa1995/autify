import FaceBookIcon from "../../assets/icons/facebook-icon.png";
import TwitterIcon from "../../assets/icons/twitter-icon.png";
import InstagramIcon from "../../assets/icons/instagram-icon.png";

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
	src: string;
	url: string;
};

export const socialIcons: SocialIconsOptions[] = [
	{
		key: 1,
		name: "facebook",
		src: FaceBookIcon,
		url: "#",
	},
	{
		key: 2,
		name: "twitter",
		src: TwitterIcon,
		url: "#",
	},
	{
		key: 3,
		name: "instagram",
		src: InstagramIcon,
		url: "#",
	},
];
