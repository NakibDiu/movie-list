import React, { useEffect, useState } from "react";
import Casts from "./Casts";

const MovieDetails = ({ id }) => {
  const [details, setDetails] = useState([]);
  const [casts, setCasts] = useState([]);
  const apiKey = "eeeb3592430201e2d4ecab3696308dda";
  const dataFetchingUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const castFetchingUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch(dataFetchingUrl)
        .then((res) => res.json())
        .then((data) => setDetails(data));
    };
    const fetchMovieCasts = () => {
      fetch(castFetchingUrl)
        .then((res) => res.json())
        .then((data) => setCasts(data));
    };

    fetchMovieDetails();
    fetchMovieCasts();
  }, []);

  const {
    original_title,
    poster_path,
    popularity,
    title,
    vote_average,
    genres,
    release_date,
    overview,
    runtime,
  } = details;

  const imageUrl = "https://image.tmdb.org/t/p/original";
  const releaseYear = new Date(release_date).getFullYear();
  const hour = runtime / 60;
  const min = runtime % 60;

  return (
    <div className="bg-[#191919] p-2 lg:px-4 py-6 space-y-11">
      <div className="space-y-7 lg:flex lg:gap-11">
        <div className="basis-1/3">
          <img
            src={imageUrl + poster_path}
            alt={title}
            className="h-1/2 lg:h-full w-full bg-zinc-300"
          />
        </div>
        <div className="flex flex-col justify-between gap-14 lg:flex-1">
          <div className="space-y-2">
            <h1 className="text-white font-bold lg:inline text-2xl lg:text-4xl">
              {title || original_title}{" "}
              <span className="font-light text-2xl lg:text-4xl text-white pl-2">
                {releaseYear && `(${releaseYear})`}
              </span>
            </h1>
            <div className="flex flex-wrap gap-3">
              {genres?.map((genre) => {
                return (
                  <p key={genre.id} className="text-white text-base">
                    {genre.name}
                    {/* <span>,</span> */}
                  </p>
                );
              })}
              <p className="text-white">{`${hour.toFixed(0)} h ${min} min`}</p>
            </div>
          </div>
          <div className="text-white">
            <h4 className="font-bold text-xl">Overview</h4>
            <h3 className="text-base">{overview}</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
            <div className="border border-[rgba(217, 217, 217, 0.1)] p-4 rounded-lg space-x-1">
              <h2 className="font-bold text-xl text-center text-white">
                Popularity
              </h2>
              <h1 className="font-bold text-4xl text-center text-[#F33F3F]">
                {parseInt(popularity)}
              </h1>
            </div>
            <div className="">
              <p className="font-bold rounded text-base px-4 py-3 lg:px-8 lg:py-6 bg-[#F33F3F] text-center">
                Add to Watchlist
              </p>
            </div>
          </div>
        </div>
      </div>
      <Casts castData= {casts}></Casts>
    </div>
  );
};

export default MovieDetails;
