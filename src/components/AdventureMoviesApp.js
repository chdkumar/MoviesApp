// AdventureMovies.js (Adventure Movies Component)
import React, { useEffect } from "react";
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

// TMDB API Key and Base URL
const TMDB_API_KEY = "49a5508b99e54cbf67438655e1565e32";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Axios instance for TMDB API
const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

// Function to fetch Adventure movies from TMDB API
const getAdventureMovies = async (page = 1) => {
  try {
    const response = await tmdbApi.get(`/discover/movie`, {
      params: {
        with_genres: 12, // Genre ID for Adventure
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching adventure movies:", error);
    return null;
  }
};

// Async Thunk to fetch Adventure movies
const fetchAdventureMovies = createAsyncThunk(
  "movies/fetchAdventureMovies",
  async ({ page }) => {
    const response = await getAdventureMovies(page);
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
      .addCase(fetchAdventureMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdventureMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAdventureMovies.rejected, (state, action) => {
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

// MovieList Component to render the Adventure movies
const MovieList = () => {
  const dispatch = useDispatch();
  const { list: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAdventureMovies({ page: 1 }));
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

// Main App Component for Adventure Movies
const AdventureMoviesApp = () => {
  return (
    <Provider store={store}>
      <MovieList />
    </Provider>
  );
};

export default AdventureMoviesApp;
