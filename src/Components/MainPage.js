import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import useGetJokes from "../CustomHooks/useGetJokes";
import { SetCategory } from "../Redux/Slices/ApiConfugrationSlice";
import JokeList from "./JokeList";
import Shimmer from "./Shimmer";
import { FaArrowUpLong } from "react-icons/fa6";
import toast from "react-hot-toast";
const MainPage = () => {
  const AllJokes = useSelector((store) => store.AllJokes.jokes);
  const LoadingJokes = useSelector((store) => store.AllJokes.loading);
  const FetchJokes = useGetJokes();
  const loading = useGetJokes();
  const theme = useSelector((store) => store.Theme.light);
  const TopRef = useRef();
  useEffect(() => {
    if (AllJokes.length === 0) {
      FetchJokes();
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        const pushMore = true;
        FetchJokes(pushMore);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [AllJokes]);
  const GoToTop = () => {
    TopRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  if (AllJokes.length < 0) {
    return (
      <>
        <Shimmer /> <Shimmer /> <Shimmer />
      </>
    );
  }
  return (
    <div className={`  ${!theme && "bg-[#303136] text-white"}  h-full mb-20  `}>
      <span ref={TopRef}></span>
      <Header />

      <div
        className="  cursor-pointer fixed animate-bounce  border p-2 z-20 right-3 bottom-10"
        onClick={() => {
          GoToTop();
        }}
      >
        <FaArrowUpLong className="text-4xl" />
      </div>
      <JokeList AllJokes={AllJokes} />

      {LoadingJokes && (
        <div className="flex justify-center p-4">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-teal-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
