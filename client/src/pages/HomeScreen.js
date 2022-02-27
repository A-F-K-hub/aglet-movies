import React, { useRef, useState, useMemo} from "react";
import Carousel from "../Carousel";
import Hero from "../Hero";
import "./HomeScreen.css";
import Navbar from "../Navbar";
import requests from "../Requests";
import { TextField } from "@material-ui/core";
import _ from 'lodash';
import instance from "../axios";
import appNetworkService from "../moviesNetwordService";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector, setCurrentUserAction } from "../reducers/users-reducer/users.reducer";
import userApiService from "../api-services/users-api/user.api-service";

const API_KEY = "5d1f8fbb75ee5c3d1042526895f94b51";
const base_url = "https://image.tmdb.org/t/p/original/";


const HomeScreen = () => {
  const inputRef = useRef(null);
  const [moviesResults, setMoviesResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false)
  const {currentUser} = useSelector(currentUserSelector);
  const [searchText, setSearchText] = useState('');
  const usersFavoriteMovies =currentUser.favourites;
  const dispatch = useDispatch();

  const fetchData =  async(searchKeyWord) => {
    const request = instance.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKeyWord}&page=1&include_adult=false`)
    return request;
  }


  const movies =[{id: 144, name:'Movie 1'}, {id: 2327, name: 'movie2'}, {id: 2244, name: 'movie3'}, {id: 3421, name: 'movie4'}] // Your list of movies from api call
  const favourites = [2327, 2244, 353]; // currentUser.favourites


  const filters = movies.filter(movie=>{ //List of favourite movies
    return favourites.includes(movie.id)
  })

  console.log({filters})


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


  const debounce = useMemo(
    () =>
      _.throttle(
        async (searchKeyWord) => {
          setIsSearching(true);
          fetchData(searchKeyWord).then(results=>{
            console.log({results});
            setMoviesResults(results.data.results);
          }).catch(error=>{
            console.log({error})
          }).finally(()=>{
            setIsSearching(false);
          });
        },
        1500,
        undefined,
      ),
    [],
  );


 const handleChange =(event)=>{
   console.log({text: event.target.value});
   setSearchText(event.target.value);
   debounce(event.target.value);
 }

const renderListPfMovies =()=>{
  return <div className="carousel-posters">
    {moviesResults.map(movie=>{
           return (( movie.poster_path) ||
              (movie.backdrop_path)) && (
                <div className="">
                <img
                  className={`carousel-poster ${
                   "carousel-posterLarge"
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    movie.poster_path
                  }`}
                  alt={movie.name}
                />
                <button onClick={()=>{
                  addMovieToFavorites(movie.id)
                }}>Add to favorites</button>
              </div>
            )
    })}
  </div>
}
  return (
    <div className="homeScreen">
      <Navbar />
      <Hero />

      <div className="autoComplete"> 
<TextField value={searchText} ref={inputRef} onChange={handleChange} label="Movie"  />
      </div>
    {!isSearching && searchText ==="" &&
      <><Carousel
          title="AGLET ORIGINALS"
          fetchUrl={requests.fetchAgletOriginals}
          isLargeRow /><Carousel
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            isLargeRow /><Carousel
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            isLargeRow /><Carousel
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow /><Carousel
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            isLargeRow /></>
|| renderListPfMovies()}
    </div>
  );
};  

export default HomeScreen;
