import MenuSelect from "../components/Menu.jsx";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
/* import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; */
import logo from "../assets/header-logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box } from "@mui/material";

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
          <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
            <Box sx={{ color: "primary.red" }}>
              <AccountCircleOutlinedIcon fontSize="large" />
            </Box>
            <Box sx={{ color: "primary.red" }}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
