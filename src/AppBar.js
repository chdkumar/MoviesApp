import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import logo from "./Lite.PNG";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "black", // Background color of the AppBar
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black", // Ensure the logo background stays black
            padding: 1, // Add padding to control the spacing around the logo
            borderRadius: "4px", // Add a subtle border radius
            marginLeft: 2,
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 40, sm: 50, md: 60 }, // Adjust height for different screen sizes
              width: "auto",
              marginY: 1, // Added vertical margin
            }}
            alt="Filmpire logo"
            src={logo}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "4px",
            padding: "2px 8px",
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "white", mr: 1 }} />
          <InputBase
            placeholder="Search for a Movie..."
            sx={{
              color: "white",
              "&::placeholder": { color: "white", opacity: 0.7 },
              flexGrow: 1,
            }}
          />
        </Box>

        <Button
          color="inherit"
          startIcon={<PersonIcon />}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            height: "40px",
            width: "100px",
          }}
        >
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
}
