import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "ninjakit/color-scheme";
import "ninjakit/style.css";
import "./style.css";

import { GridArticle } from "ninjakit";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Button from "./button";
import ButtonAnchor from "./button-anchor";
import ColorScheme from "./color-scheme";

render(
	<StrictMode>
		<BrowserRouter>
			<GridArticle>
				<main>
					<Routes>
						<Route
							element={
								<section>
									<Link to="button">Button</Link>
									<Link to="button-anchor">ButtonAnchor</Link>
									<Link to="color-scheme">useColorScheme</Link>
								</section>
							}
							index
						/>
						<Route element={<Button />} path="button" />
						<Route element={<ButtonAnchor />} path="button-anchor" />
						<Route element={<ColorScheme />} path="color-scheme" />
					</Routes>
				</main>
			</GridArticle>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("app")
);
