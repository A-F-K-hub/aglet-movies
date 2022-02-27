import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userApiService from "./api-services/users-api/user.api-service";
import axios from "./axios";
import "./Carousel.css";
import appNetworkService from "./moviesNetwordService";
import { currentUserSelector, setCurrentUserAction } from "./reducers/users-reducer/users.reducer";


function Carousel({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
 const {currentUser} = useSelector(currentUserSelector);
 const dispatch = useDispatch();

  const base_url = "https://image.tmdb.org/t/p/original/";
  const usersFavoriteMovies =currentUser.favourites;

useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

 const addMovieToFavorites = async (id) =>{
   await appNetworkService.put(`users/${currentUser._id}`, {
     favourites: [...usersFavoriteMovies, id],
   }).then(()=>{
    userApiService.getCurrentUser(currentUser._id).then((user)=>{
      dispatch(setCurrentUserAction(user));
      console.log({currentUser})
    })
   }).catch(error=>{
     console.log({error});
   })
 }

  return (
    <div className="carousel">
      <h2>{title}</h2>

      <div className="carousel-posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
                <div>
                <img
                  className={`carousel-poster ${
                    isLargeRow && "carousel-posterLarge"
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <button onClick={()=>{
                  addMovieToFavorites(movie.id)
                }}>Add to favorites</button>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Carousel;
