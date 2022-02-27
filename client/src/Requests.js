const API_KEY = "5d1f8fbb75ee5c3d1042526895f94b51";

const requests = {
  // search: ``
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAgletOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
