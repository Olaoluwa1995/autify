import AccessFeatureImage from "../../assets/images/access-feature.png";
import PrintOutFeatureImage from "../../assets/images/print-out-feature.png";
import SearchFeatureImage from "../../assets/images/search-feature.png";
import SecurityFeatureImage from "../../assets/images/security-feature.png";

type FeatureProps = {
	key: number;
	marginTop?: string;
	mobileMarginTop?: string;
	alt: string;
	url: string;
	src: string;
	textContainerMarginTop: string;
	title: string;
};

export const featuresData: FeatureProps[] = [
	{
		key: 1,
		src: SearchFeatureImage,
		alt: "search feature",
		url: "#",
		textContainerMarginTop: "13%",
		title: "Search Data",
	},
	{
		key: 2,
		src: AccessFeatureImage,
		marginTop: "30px",
		mobileMarginTop: "22px",
		alt: "access feature",
		url: "#",
		textContainerMarginTop: "6%",
		title: "24 Hours Access",
	},
	{
		key: 3,
		src: PrintOutFeatureImage,
		marginTop: "15px",
		alt: "print-out feature",
		url: "#",
		textContainerMarginTop: "6%",
		title: "Print Out",
	},
	{
		key: 4,
		src: SecurityFeatureImage,
		marginTop: "6px",
		mobileMarginTop: "20px",
		alt: "security feature",
		url: "#",
		textContainerMarginTop: "8%",
		title: "Security Code",
	},
];
