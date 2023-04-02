import React from "react";

const Cast = ({ cast }) => {
  const { cast_id, character, name, profile_path } = cast;
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div key={cast_id} className="bg-[#1a1a1a] rounded space-y-1 shadow-2xl">
      <img
        src={`${imageUrl}${profile_path}`}
        alt={name}
        className="bg-slate-800 h-40 w-full"
      />
      <div className="px-1 space-y-1">
        <h4 className="font-bold text-white text-base">{name}</h4>
        <p className="text-[#e1e1e1] text-sm">{character}</p>
      </div>
    </div>
  );
};

export default Cast;
