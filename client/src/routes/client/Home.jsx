import logo_colored from "../../assets/hero-colored.png";

import logo_shadow from "../../assets/hero-shadow.png";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
	return (
		<Box>
			<Box
				sx={{
					backgroundColor: "primary.green",
					overflow: "hidden",
					display: "flex",
					flexDirection: {
						xs: "column-reverse",
						md: "row",
					},
					alignItems: {
						md: "center",
					},
				}}
			>
				<Box
					sx={{
						height: {
							xs: "60vh",
							md: "90vh",
						},
						display: "flex",
						flexDirection: "column",
						width: {
							xs: "100%",
							md: "50%",
						},
					}}
				>
					<Box sx={{ position: "relative" }}>
						<Box
							component="img"
							sx={{
								left: {
									md: -100,
									lg: -100,
								},
								bottom: {
									md: -1000,
								},
								position: "absolute",
								height: {
									xs: "50",
								},
								width: {
									xs: 600,
									md: 700,
									lg: 900,
								},
							}}
							src={logo_colored}
							alt="Hero Logo Colored"
						/>
					</Box>
					<Box sx={{ position: "relative" }}>
						<Box
							component="img"
							sx={{
								left: {
									md: -100,
									lg: -100,
								},
								bottom: {
									md: -1000,
								},
								position: "absolute",
								height: {
									xs: "50",
								},
								width: {
									xs: 700,
									md: 800,
									lg: 1200,
								},
							}}
							src={logo_shadow}
							alt="Hero Logo Shadow"
						/>
					</Box>
				</Box>
				<Box
					sx={{
						zIndex: 99,
						paddingTop: {
							xs: 10,
							md: 0,
						},
						paddingBottom: {
							xs: 10,
							md: 0,
						},
						width: {
							xs: "100%",
							md: "50%",
						},
						textAlign: {
							xs: "center",
							md: "left",
						},
					}}
				>
					<Typography
						sx={{
							fontSize: {
								xs: 42,
								md: 50,
								lg: 56,
							},
							color: "primary.text",
						}}
					>
						Make Christmas
					</Typography>
					<Typography
						sx={{
							fontSize: {
								xs: 50,
								md: 58,
								lg: 70,
							},
							color: "primary.text",
						}}
					>
						Memorable.
					</Typography>
					<Typography
						sx={{
							color: "primary.text",
							fontSize: {
								xs: 15,
								md: 20,
								lg: 28,
							},
						}}
					>
						Explore Parol designs and customize your own
					</Typography>
					<Typography
						sx={{
							color: "primary.text",
							fontSize: {
								xs: 15,
								md: 20,
								lg: 28,
							},
						}}
					>
						Explore various available designs.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
