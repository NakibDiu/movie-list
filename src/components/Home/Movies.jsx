import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utilities/localStorageFunctions";

import add from "../../assets/add.png";

const Movies = ({ movies, setList, list }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  if (movies.length === 0) {
    return <h1 className="text-center text-2xl text-red-300">No Movies Found</h1>;
  } else {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 lg:gap-14">
        {movies.map((movie) => {
          const {
            title,
            vote_average,
            id,
            poster_path,
            name,
            release_date,
            backdrop_path,
          } = movie;
          const year = new Date(release_date).getFullYear();

          const addToList = (movie) => {
            const isExists = list.find((li) => li.id === movie.id);
            if (isExists) {
              alert("Already in the list");
            } else {
              setList([...list, movie]);
              addToDb(movie.name || movie.title, movie.id);
            }
          };

          return (
            <div className="space-y-1" key={id}>
              <div className="relative">
                <img
                  src={imageUrl + poster_path || backdrop_path}
                  alt={title}
                  loading="lazy"
                  className="h-[225px] w-full bg-slate-300"
                />
                <img
                  src={add}
                  alt="add movie"
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => addToList(movie)}
                />
              </div>
              <div className="text-[#e1e1e1] space-y-1">
                <div className="flex items-center gap-2">
                  {vote_average < 7 ? (
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      color="red"
                      size="lg"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      color="green"
                      size="lg"
                    />
                  )}
                  <h5 className="text-base">
                    {vote_average.toFixed(1)}
                    <span className="text-xs">/10</span>
                  </h5>
                </div>
                <h2 className="text-base">{title || name}</h2>
                <h2 className="text-base">{year || ""}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Movies;
