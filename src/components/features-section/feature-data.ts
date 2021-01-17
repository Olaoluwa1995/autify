import { ReactComponent as AccessFeatureImage } from "../../assets/images/access-feature.svg";
import { ReactComponent as PrintOutFeatureImage } from "../../assets/images/print-out-feature.svg";
import { ReactComponent as SearchFeatureImage } from "../../assets/images/search-feature.svg";
import { ReactComponent as SecurityFeatureImage } from "../../assets/images/security-feature.svg";

type FeatureProps = {
	key: number;
	as: any;
	marginTop?: string;
	paddingLeft?: string;
	width: string;
};

export const featuresData: FeatureProps[] = [
	{
		key: 1,
		as: SearchFeatureImage,
		width: "50%",
	},
	{
		key: 2,
		as: AccessFeatureImage,
		marginTop: "25px",
		width: "50%",
	},
	{
		key: 3,
		as: PrintOutFeatureImage,
		width: "50%",
	},
	{
		key: 4,
		as: SecurityFeatureImage,
		paddingLeft: "5%",
		width: "45%",
	},
];
