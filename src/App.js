import React from "react";

// Pages
import HomePage from "./Pages/HomePage";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			
			<Routes>
				<Route path="" element={<HomePage />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default App;
