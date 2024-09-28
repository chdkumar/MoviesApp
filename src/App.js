import React from "react";
import {  Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PermanentDrawerLeft from "./PermanentDrawer";
import ButtonAppBar from "./AppBar";
import MovieList from "./components/MovieList";
import TopRatedMoviesApp from "./components/TopRatedMoviesApp";
import UpcomingMoviesApp from "./components/UpcomingMoviesApp"; 
import ActionMoviesApp from "./components/ActionMoviesApp";
import AdventureMoviesApp from "./components/AdventureMoviesApp";
import AnimationMoviesApp from "./components/AnimationMoviesApp";
import ComedyMoviesApp from "./components/ComedyMoviesApp";
import CrimeMoviesApp from "./components/CrimeMoviesApp";
import FamilyMovies from "./components/FamilyMovies";
import HorrorMovies from "./components/HorrorMovies";


function App() {
  return (
    <Router>
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <ButtonAppBar />
        <PermanentDrawerLeft />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: "64px", // AppBar height
            marginLeft: "140px", // Drawer width
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            height: "calc(100vh - 64px)", // Full viewport height minus AppBar height
          }}
        >
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/popular" element={<MovieList />} />
            <Route path="/top-rated" element={<TopRatedMoviesApp  />} />
            <Route path="/upcoming" element={<UpcomingMoviesApp />} />
            <Route path="/action" element={<ActionMoviesApp />} />
            <Route path="/adventure" element={<AdventureMoviesApp />} />
            <Route path="/animation" element={<AnimationMoviesApp />} />
            <Route path="/comedy" element={<ComedyMoviesApp />} />
            <Route path="/crime" element={<CrimeMoviesApp />} />
            <Route path="/family" element={<FamilyMovies />} />
            <Route path="/horror" element={<HorrorMovies />} />
            </Routes>

        </Box>
      </Box>
    </Provider>
    </Router>
  );
}

export default App;
