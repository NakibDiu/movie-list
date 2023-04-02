import React from "react";
import Cast from "./Cast";

const Casts = ({ castData }) => {
  const { id, cast, crew } = castData;
  return (
    <div className="space-y-5">
      <h1 className="text-white font-xl font-bold">Casts</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-2 lg:gap-x-3 lg:gap-y-5">
        {cast?.map((cs) => (
          <Cast cast={cs} key={cs.cast_id}></Cast>
        ))}
      </div>
    </div>
  );
};

export default Casts;
