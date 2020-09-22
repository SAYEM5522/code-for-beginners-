import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLarge }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(fetchUrl);
      // console.log(requests.data.results);
      setMovies(requests.data.results);
      return requests;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
