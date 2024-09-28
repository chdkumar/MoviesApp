import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

// Import necessary icons
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

const drawerWidth = 240;

const categories = [
  { name: "Popular", icon: <MovieIcon  /> },
  { name: "Top Rated", icon: <StarIcon /> , },
  { name: "Upcoming", icon: <UpcomingIcon /> },
];

const genres = [
  { name: "Action", icon: <DirectionsRunIcon /> },
  { name: "Adventure", icon: <AutoFixHighIcon /> },
  { name: "Animation", icon: <ChildCareIcon /> },
  { name: "Comedy", icon: <EmojiEmotionsIcon /> },
  { name: "Crime", icon: <LocalMoviesIcon /> },
  { name: "Family", icon: <ChildCareIcon /> },
  { name: "Horror", icon: <BloodtypeIcon /> },
];

const drawerBg = "#000000";  // Black background
const textColor = "#FFFFFF"; // White text color
const iconColor = "#FFD700"; // Gold icon color
const hoverBg = "#444444";   // Darker hover background
const hoverText = "#ffffff"; // White hover text
const dividerColor = "#444444"; // Dark gray divider

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category.name === "Popular") {
      navigate("/popular");
    }
    else if (category.name === "Top Rated") {
      navigate("/top-rated");
    }
    else if (category.name === "Upcoming") {
      navigate("/upcoming");
    }
  };

  const handleGenreClick = (Genres) => {
    if (Genres.name === "Action") {
      navigate("/action");
    }
    else if (Genres.name === "Adventure") {
      navigate("/adventure");
    }
    else if (Genres.name === "Animation") {
      navigate("/animation");
    }
    else if (Genres.name === "Comedy") {
      navigate("/comedy");
    }
    else if (Genres.name === "Crime") {
      navigate("/crime");
    }
    else if (Genres.name === "Family") {
      navigate("/family");
    }
    else if (Genres.name === "Horror") {
      navigate("/horror");
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: drawerBg,
          color: textColor,
          top: 64,
          height: "calc(100% - 64px)",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            px: 2,
            py: 1,
            fontFamily: '"Playwrite MX", Arial, sans-serif',
            fontWeight: 600,
            fontSize: "20px",
            color: "#90cea1",
          }}
        >
          Categories
        </Typography>
        <List>
          {categories.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(item)}
                sx={{
                  "&:hover": {
                    backgroundColor: hoverBg,
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: hoverText,
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: iconColor, minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: '"Playwrite MX", Arial, sans-serif',
                      fontWeight: 400,
                      color: textColor,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1, backgroundColor: dividerColor }} />
        <Typography
          variant="subtitle1"
          sx={{
            px: 2,
            py: 1,
            fontFamily: '"Playwrite MX", Arial, sans-serif',
            fontWeight: 600,
            fontSize: "20px",
            color: "#90cea1",
          }}
        >
          Genres
        </Typography>
        <List>
          {genres.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleGenreClick(item)}
                sx={{
                  "&:hover": {
                    backgroundColor: hoverBg,
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: hoverText,
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: iconColor, minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: '"Playwrite MX", Arial, sans-serif',
                      fontWeight: 400,
                      color: textColor,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}


