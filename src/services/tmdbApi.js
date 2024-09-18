import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../tmdbConfig";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const getMovies = async (type = "popular", page = 1) => {
  try {
    const response = await tmdbApi.get(`/movie/${type}`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};

export default tmdbApi;