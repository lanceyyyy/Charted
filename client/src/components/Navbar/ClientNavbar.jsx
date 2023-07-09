import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const MenuSelect = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        onClick={handleClick}
        sx={{
          color: "primary.red",
        }}
        size="large"
      >
        <MenuIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiList-padding": {
            padding: 0,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "primary.red",
            color: "primary.text",
            fontSize: {
              xs: "13px",
              md: "18px",
            },
            "&:hover": {
              color: "primary.red",
            },
          }}
        >
          Products
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "primary.red",
            color: "primary.text",
            fontSize: {
              xs: "13px",
              md: "18px",
            },
            "&:hover": {
              color: "primary.red",
            },
          }}
        >
          Customize
        </MenuItem>
        <MenuItem
          LinkComponent={Link}
          to={`/contact`}
          sx={{
            backgroundColor: "primary.red",
            color: "primary.text",
            fontSize: {
              xs: "13px",
              md: "18px",
            },
            "&:hover": {
              color: "primary.red",
            },
          }}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </Box>
  );
};

function ClientNavbar({ children }) {
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#FFFFFF", paddingY: 0.5 }}
      >
        <Toolbar>
          <MenuSelect />
          <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                flexGrow: 3,
                width: { xs: 200, md: 260 },
                aspectRatio: "auto",
                objectFit: "contain",
                height: 100,
              }}
              alt="Navbar Icon"
              src="/header-logo.png"
            />
          </Box>

          <Stack direction={{ xs: "column", md: "row" }}>
            <IconButton sx={{ color: "primary.red" }}>
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: { xs: 28, md: 35 },
                }}
              />
            </IconButton>
            <IconButton sx={{ color: "primary.red" }}>
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: { xs: 28, md: 35 },
                }}
              />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Box>
  );
}

export default ClientNavbar;
