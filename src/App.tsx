import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";

import Home from "./pages/home/home.component";
import SignUpPaymentSetup from "./pages/sign-up-payment-setup/sign-up-payment-setup.component";
import { customTheme } from "./styles/theme";

function App() {
	return (
		<ChakraProvider theme={{ ...theme, ...customTheme }}>
			<CSSReset />
			<Switch>
				<Route exact path="/signup" component={SignUpPaymentSetup} />
				<Route exact path="/" component={Home} />
			</Switch>
		</ChakraProvider>
	);
}

export default App;
