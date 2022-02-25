import React, { useEffect, useState } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./Requests";
import { FaRegPlayCircle } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAgletOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <div
      className="hero"
      style={{
        borderRadius: "20px",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
      }}
    >
      <div className="hero-contents">
        <h1 className="hero-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="hero-buttons">
          <button className="hero-button">
            <FaRegPlayCircle className="hero-icon" />
            Play
          </button>
          <button className="hero-button">
            <RiPlayListAddLine className="hero-icon" />
            My Favourites
          </button>
        </div>
        <h1 className="hero-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="hero-fadeBottom"></div>
    </div>
  );
}

export default Hero;
