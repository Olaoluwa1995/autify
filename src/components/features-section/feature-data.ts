import AccessFeatureImage from "../../assets/images/access-feature.png";
import PrintOutFeatureImage from "../../assets/images/print-out-feature.png";
import SearchFeatureImage from "../../assets/images/search-feature.png";
import SecurityFeatureImage from "../../assets/images/security-feature.png";

type FeatureProps = {
	key: number;
	marginTop?: string;
	mobileMarginTop?: string;
	marginXAxis: string;
	ariaLabel: string;
	url: string;
	src: string;
};

const marginXAxis = "2%";

export const featuresData: FeatureProps[] = [
	{
		key: 1,
		src: SearchFeatureImage,
		ariaLabel: "search feature",
		url: "#",
		marginXAxis: `${marginXAxis}`,
	},
	{
		key: 2,
		src: AccessFeatureImage,
		marginTop: "20px",
		mobileMarginTop: "22px",
		ariaLabel: "access feature",
		url: "#",
		marginXAxis: `${marginXAxis}`,
	},
	{
		key: 3,
		src: PrintOutFeatureImage,
		marginTop: "15px",
		ariaLabel: "print-out feature",
		url: "#",
		marginXAxis: `${marginXAxis}`,
	},
	{
		key: 4,
		src: SecurityFeatureImage,
		mobileMarginTop: "20px",
		ariaLabel: "security feature",
		url: "#",
		marginXAxis: `${marginXAxis}`,
	},
];
