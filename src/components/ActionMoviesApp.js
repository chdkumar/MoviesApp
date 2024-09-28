// ActionMovies.js (Action Movies Component)
import React, { useEffect } from "react";
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TMDB_BASE_URL, TMDB_API_KEY } from "../tmdbConfig";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

// TMDB API Key and Base URL
// const TMDB_API_KEY = "49a5508b99e54cbf67438655e1565e32";
// const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Axios instance for TMDB API
const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

// Function to fetch Action movies from TMDB API
const getActionMovies = async (page = 1) => {
  try {
    const response = await tmdbApi.get(`/discover/movie`, {
      params: {
        with_genres: 28, // Genre ID for Action
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching action movies:", error);
    return null;
  }
};

// Async Thunk to fetch Action movies
const fetchActionMovies = createAsyncThunk(
  "movies/fetchActionMovies",
  async ({ page }) => {
    const response = await getActionMovies(page);
    return response.results;
  }
);

// Movies Slice for Redux
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActionMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchActionMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Create a Redux store
const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

// MovieList Component to render the Action movies
const MovieList = () => {
  const dispatch = useDispatch();
  const { list: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchActionMovies({ page: 1 }));
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Card>
            <CardMedia
              component="img"
              height="160"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent sx={{ textAlign: "center", textSizeAdjust: "auto" }}>
              <Typography gutterBottom variant="h6" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.release_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// Main App Component for Action Movies
const ActionMoviesApp = () => {
  return (
    <Provider store={store}>
      <MovieList />
    </Provider>
  );
};

export default ActionMoviesApp;
