import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import useGetJokes from "../CustomHooks/useGetJokes";
import { SetCategory } from "../Redux/Slices/ApiConfugrationSlice";
import JokeList from "./JokeList";
import Shimmer from "./Shimmer";

const MainPage = () => {
  const AllJokes = useSelector((store) => store.AllJokes.jokes);
  const FetchJokes = useGetJokes();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.Theme.light);

  return (
    <div className={`  ${!theme && "bg-[#303136] text-white"}  h-full  `}>
      <Header />
      {AllJokes.length > 0 ? (
        <JokeList AllJokes={AllJokes} />
      ) : (
        <div>
          <Shimmer /> <Shimmer /> <Shimmer />
        </div>
      )}
      <div className="flex justify-center mb-4">
        <button
          className="bg-red-500 p-3 text-center"
          onClick={() => {
            const pushMore = true;
            FetchJokes(pushMore);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MainPage;
