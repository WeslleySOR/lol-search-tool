import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
	"*": {
		margin: "0",
		padding: "0",
		boxSizing: "border-box",
	},
	"html, body, #__next ": {
		height: "100%",
		position: "relative",
		fontFamily: "Roboto, Open Sans, Helvetica Neue, sans-serif",
	},
	html: {
		fontSize: "62.5%",
	},
	body: {
		fontSize: "1.6rem",
		"-webkit-font-smoothing": "antialiased",
	},
	a: {
		color: "inherit",
		textDecoration: "none",
	},
	button: {
		cursor: "pointer",
		fontFamily: "Roboto, Open Sans, Helvetica Neue, sans-serif",
	},
});
