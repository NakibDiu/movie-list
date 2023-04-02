import Header from "./Header";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import { getStoredMovieList } from "../../utilities/localStorageFunctions";

const Home = ({ list, setList, currentUrl, setCurrentUrl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const apiKey = "eeeb3592430201e2d4ecab3696308dda";
  const fetchUrl =
    "https://api.themoviedb.org/3/trending/all/week?api_key=" + apiKey;
  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    apiKey +
    "&query=" +
    search;


  const searchMovie = () => {
    setIsLoading(true);
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setIsLoading(false);
    setSearch("");
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setIsLoading(false);
  }, []);

  useEffect(()=> {
    const storedList = getStoredMovieList();
    setList(storedList)
  }, [])

  return (
    <div className="p-6  lg:px-14 lg:py-12 bg-[#2d2d2d] space-y-5 lg:space-y-10">
      {isLoading && (
        <div className="flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#F33F3F] align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <Header></Header>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for movies by title"
              className="border border-[#454545] rounded-md p-3 text-base text-white w-full bg-inherit focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className="rounded-md bg-[#f33f3f] p-3 lg:px-6 text-base text-center absolute right-0 top-0"
              onClick={searchMovie}
            >
              search
            </button>
          </div>
          <h1 className="text-3xl lg:text-4xl text-[#e1e1e1]">
            Popular movies right now
          </h1>
          <Movies movies={movies} setList={setList} list={list} currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} />
        </>
      )}
    </div>
  );
};

export default Home;
