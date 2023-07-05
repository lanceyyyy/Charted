import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	typography: {
		fontFamily: "Montserrat",
	},
	palette: {
		primary: {
			main: "#E42A41",
			red: "#E42A41",
			green: "#10924B",
			text: "#FFFBE6",
			yellow: "#F9BE34",
			green2: "#17EB3F",
			green3: "#72FFB2",
		},
		secondary: {
			main: "#10924B",
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
