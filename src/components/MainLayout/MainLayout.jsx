import Home from "../Home/Home";
import History from "../History/History";
import MovieDetails from "../Home/MovieDetails";
const MainLayout = ({ currentUrl, list, setList, setCurrentUrl }) => {

  const url = window.location.href;
  const segments = url.split('/');
  const id = segments[segments.length - 1]

  return (
    <div id="main" className="flex-1 ml-[40%] lg:ml-[25%]">
      {currentUrl === `/movie/${id}` ? (
        <MovieDetails id={id} />
      ) : currentUrl === "/history" ? (
        <History list={list} setList={setList} />
      ) : (
        <Home
          list={list}
          setList={setList}
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
        />
      )}
    </div>
  );
};

export default MainLayout;
