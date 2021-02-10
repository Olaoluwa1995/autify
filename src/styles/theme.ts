import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

export const COLORS = {
	PRIMARY_COLOR: "#9c69e2",
	DEEP_BLUE: "#212353",
	WHITE: "#ffffff",
	AUTIFY_COLOR: "#656691",
	SIGN_UP_PROGRESS_BAR_COLOR: "#fef5f6",
	PAYMENT_PAGE_COLOR: "#2E58EC",
};

const STYLES: Styles = {
	global: {
		"*": {
			boxSizing: "border-box",
		},

		html: {
			minH: "100%",
			overflowX: "hidden",
		},

		body: {
			display: "flex",
			flexDir: "column",
			overflowX: "hidden",
			color: "black",

			"#root": {
				"* .roboto": {
					fontFamily: "'Poppins', sans-serif",
				},
			},
		},

		"#root": {
			minH: "100vh",
			display: "flex",
			flexDirection: "column",
			width: "100%",
			pos: "relative",

			"*": {
				fontFamily: "'Poppins'",
			},
		},
	},
};

export const customTheme = extendTheme({
	styles: STYLES,
	colors: COLORS,
});
