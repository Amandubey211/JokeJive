import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import welcome from "../svg/Welcome.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import useGetJokes from "../CustomHooks/useGetJokes";
import { useDispatch, useSelector } from "react-redux";
import { SetCategory } from "../Redux/Slices/ApiConfugrationSlice";
const WelcomePage = () => {
  const FetchJokes = useGetJokes();
  const theme = useSelector((store) => store.Theme.light);
  const dispatch = useDispatch();
  return (
    <div
      className={`${!theme && "bg-[#303136] text-white"} md:h-screen h-full`}
    >
      <Header page="welcome" />
      <div className="flex justify-between md:px-8 py-4 md:mt-9 px-3 md:flex-nowrap flex-wrap">
        <div className="md:p-7 flex justify-start gap-1 flex-col">
          <h1 className="font-bold text-3xl md:text-5xl">Welcome To,</h1>
          <b className="text-2xl">JOKE-JIKE</b>
          <div className="pe-10 md:w-[70%] ">
            <br />
            Laughing burns calories, right? Good news you're about to get a full
            workout on this scrollathon!
          </div>
          <b className=" capitalize">Scroll, giggle, repeat, enjoy, share!</b>

          <div className="flex gap-3 mt-1 ">
            <Link
              onClick={() => {
                dispatch(SetCategory("Any"));
                FetchJokes();
              }}
              className="bg-[#00ac96] homeBtns md:w-60  md:rounded-md  rounded-sm  md:p-5 p-2 md:px-4 px-2 text-white flex gap-2 items-center"
            >
              <span>let's Scroll</span>{" "}
              <FaArrowRightLong className="text-2xl" />
            </Link>
            <Link
              to="/form"
              className="bg-[#00ac96] md:w-60  homeBtns md:rounded-md  rounded-sm  md:p-5 p-2 md:px-4 text-white flex gap-2  items-center "
            >
              <span>Set your preference</span>{" "}
              <MdSettingsSuggest className="md:text-2xl text-lg" />
            </Link>
          </div>
        </div>
        <div className="p-2 flex  justify-center items-center flex-col gap-4">
          {/* <b>Scroll for instant mood boost!</b> */}
          <img className="w-96 " src={welcome} />
          <div className="flex gap-1 items-center justify-center  flex-wrap ">
            <span className=" featureBadges bg-[#8aebe1] text-[10px] p-1 rounded-sm px-2">
              infinite Scroll
            </span>
            <span className="bg-[#8aebe1] featureBadges text-[10px] p-1 rounded-sm px-2">
              UI/UX
            </span>{" "}
            <span className="bg-[#8aebe1] featureBadges text-[10px] p-1 rounded-sm px-2">
              Debouncing
            </span>{" "}
            <span className="bg-[#8aebe1] featureBadges text-[10px] p-1 rounded-sm px-2">
              Redux
            </span>
            <span className="bg-[#8aebe1] featureBadges text-[10px] p-1 rounded-sm px-2">
              Tailwind-CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
