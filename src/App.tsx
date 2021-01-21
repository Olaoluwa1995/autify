import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";

import HomePage from "./pages/home/home.component";
import SignUpPage from "./pages/sign-up/sign-up.component";

function App() {
	return (
		<ChakraProvider theme={{ ...theme }}>
			<CSSReset />
			<Switch>
				<Route exact path="/signup" component={SignUpPage} />
				<Route exact path="/" component={HomePage} />
			</Switch>
		</ChakraProvider>
	);
}

export default App;
