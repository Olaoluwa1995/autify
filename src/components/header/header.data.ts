import { FaSignOutAlt } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { BsFillCollectionFill, BsFillInfoCircleFill } from "react-icons/bs";

type LinkProps = {
	key: number;
	title: string;
	url: string;
	as?: any;
};

export const headerLinksData: LinkProps[] = [
	{
		key: 1,
		title: "About",
		url: "#",
		as: BsFillInfoCircleFill,
	},
	{
		key: 2,
		title: "Help",
		url: "#",
		as: MdHelp,
	},
	{
		key: 3,
		title: "Features",
		url: "#",
		as: BsFillCollectionFill,
	},
	{
		key: 4,
		title: "Signup",
		url: "#",
		as: FaSignOutAlt,
	},
];
