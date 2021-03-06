import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "ninjakit/color-scheme/default.css";
import "ninjakit/style.css";
import "./style.css";
import { colorScheme } from "ninjakit";

import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./app";

colorScheme();

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("app")
);
