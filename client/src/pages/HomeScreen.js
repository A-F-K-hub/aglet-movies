import React from "react";
import Carousel from "../Carousel";
import Hero from "../Hero";
import "./HomeScreen.css";
import Navbar from "../Navbar";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      <Hero />

      <Carousel
        title="AGLET ORIGINALS"
        fetchUrl={requests.fetchAgletOriginals}
        isLargeRow
      />
      <Carousel
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Carousel
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Carousel
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Carousel
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
