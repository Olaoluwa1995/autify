import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import PricingPage from "./pages/pricing/pricing.component";

import { CSSReset, ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<CSSReset />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/pricing" component={PricingPage} />
			</Switch>
		</ChakraProvider>
	);
}

export default App;
