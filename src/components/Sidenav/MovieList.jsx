import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { getStoredMovieList, removeFromDb } from "../../utilities/localStorageFunctions";

const MovieList = ({ list, setList }) => {


  const deleteFromList = (listItem) => {
    removeFromDb(listItem.id)
    const newList = list.filter((ls) => ls.id !== listItem.id)
    setList(newList)
  }

  return (
    <div>
      <h4 className="font-mainFont text-xl text-[#9a9a9a] py-4">My List</h4>
      <ol className="space-y-3 list-decimal pl-3">
        {list.map((ls) => {
          return (
            <div className="flex justify-between items-center"  key={ls.id}>
              <li className="text-[#e1e1e1]">{ls.title || ls.name}</li>
              <FontAwesomeIcon icon={faTrash} color="#F62C3F" className="cursor-pointer" onClick={() => deleteFromList(ls)} />
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default MovieList;
