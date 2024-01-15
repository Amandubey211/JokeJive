import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import JokeCard from "./JokeCard";
import useGetJokes from "../CustomHooks/useGetJokes";
import { SetCategory } from "../Redux/Slices/ApiConfugrationSlice";
import JokeList from "./JokeList";

const MainPage = () => {
  const [copybtnpress, SetCopyBtnPress] = useState(false);
  const AllJokes = useSelector((store) => store.AllJokes.jokes);
  const FetchJokes = useGetJokes();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.Theme.light);
  return (
    <div className={`  ${!theme && "bg-[#303136] text-white"}`}>
      <Header />

      <JokeList AllJokes={AllJokes} />

      <div className="flex justify-center mb-4">
        <button
          className="bg-red-500 p-3 text-center"
          onClick={() => {
            const addMore = true;
            dispatch(SetCategory("Any"));
            FetchJokes(addMore);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MainPage;
