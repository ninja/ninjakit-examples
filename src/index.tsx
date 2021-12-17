import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import { GridArticle } from "ninjakit";
import "ninjakit/color-scheme";
import "ninjakit/style.css";
import "./style.css";

import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Button from "./button";
import ColorScheme from "./color-scheme";

render(
	<StrictMode>
		<BrowserRouter>
			<GridArticle>
				<main>
					<Routes>
						<Route
							element={
								<>
									<Link to="button">button</Link>
									<Link to="color-scheme">color-scheme</Link>
								</>
							}
							index
						/>
						<Route element={<Button />} path="button" />
						<Route element={<ColorScheme />} path="color-scheme" />
					</Routes>
				</main>
			</GridArticle>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("app")
);
