import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
	return (
		<div className="App">
			<Router>
				<HomePage />
			</Router>
		</div>
	);
}

export default App;
