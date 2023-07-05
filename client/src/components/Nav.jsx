import MenuSelect from "../components/Menu.jsx";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
/* import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; */
import logo from "../assets/header-logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Stack } from "@mui/material";

/* import MenuIcon from "@mui/icons-material/Menu"; */

export default function Nav() {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			<AppBar
				position="sticky"
				sx={{ backgroundColor: "#FFFFFF", paddingY: 1 }}
			>
				<Toolbar>
					<MenuSelect
						edge="start"
						aria-label="menu"
						sx={{ mr: 2, flexGrow: 1 }}
					/>
					<Box
						component="img"
						sx={{
							flexGrow: 3,
							width: "15%",
							aspectRatio: "auto",
							objectFit: "contain",
							height: 100,
						}}
						alt="Navbar Icon"
						src={logo}
					/>
					<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
						<Box sx={{ color: "primary.red" }}>
							<AccountCircleOutlinedIcon
								sx={{
									fontSize: { xs: 25, md: 35 },
								}}
							/>
						</Box>
						<Box sx={{ color: "primary.red" }}>
							<ShoppingCartOutlinedIcon
								sx={{
									fontSize: { xs: 25, md: 35 },
								}}
							/>
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
