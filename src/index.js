import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./store/index";

import "./index.css";
import { StylesProvider } from "@material-ui/core";

ReactDOM.render(
	<StylesProvider injectFirst>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StylesProvider>,

	document.getElementById("root")
);
