import { styled } from "@stitches/react";

export const Container = styled("main", {
	marginInline: "auto",
	height: "100%",
	maxWidth: "420px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const Content = styled("div", {
	width: "100%",
});

export const SearchInput = styled("div", {
	position: "relative",
	display: "flex",
	width: "100%",
	input: {
		flex: "1",
		padding: "1.6rem 8.5rem 1.6rem 2.2rem",
	},
	button: {
		position: "absolute",
		right: '0',
		height: "100%",
		paddingInline: "1.2rem"
	},
});
