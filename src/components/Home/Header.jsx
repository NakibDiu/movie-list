import add from "../../assets/add.png"

const Header = () => {
  return (
    <div className="p-3 lg:p-5 border border-[#a41b1b] rounded-lg space-y-4 lg:space-y-8">
      <h1 className="text-4xl lg:text-[40px] leading-[48px] text-[#e1e1e1]">
        Welcome to <span className="text-[#f33f3f]">Watchlists</span>
      </h1>
      <p className="text-xl text-[#e1e1e1]">
        Browse movies, add them to watchlists and share them with friends. Just
        click the
        <img src={add} alt="ribbon" className="inline px-2" />
         to add a movie, the poster to see more details or to mark the
        movie as watched.
      </p>
    </div>
  );
};

export default Header;
