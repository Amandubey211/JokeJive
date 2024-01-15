import React, { useEffect } from "react";
import categoryData from "../Data/CategoryData";
import toast from "react-hot-toast";
import Languages from "../Data/LanguageData";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  SetCategory,
  SetJokeType,
  setLanguage,
} from "../Redux/Slices/ApiConfugrationSlice";
import useGetJokes from "../CustomHooks/useGetJokes";
import { SetJokes } from "../Redux/Slices/JokeSlice";
import { useNavigate } from "react-router-dom";

const JokeForm = () => {
  const dispatch = useDispatch();
  const { category, jokeType, language } = useSelector(
    (store) => store.ApiConfugration
  );
  const theme = useSelector((store) => store.Theme.light);
  const Navigate = useNavigate();
  const FetchJokes = useGetJokes();
  const HandleSubmit = (e) => {
    e.preventDefault();
    FetchJokes();
  };

  return (
    <div className="  flex flex-col justify-start gap-6 md:px-10 md:py-5 p-3 shadow-2xl rounded-2xl ">
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-[#00ac96]">
          Set Up Your page
        </h1>
      </div>
      <hr />
      <div>
        <form className="flex flex-col gap-4">
          <div className="flex-col flex gap-1">
            <span className="md:text-xl text-lg font-semibold text-[#00ac96]">
              Category :
            </span>
            <fieldset>
              <div className="flex  justify-start flex-wrap p-1  gap-2">
                {categoryData.map((data) => {
                  return (
                    <label
                      key={data.value}
                      htmlFor={data.value}
                      className=" cursor-pointer"
                    >
                      <input
                        required
                        type="radio"
                        className="me-2 accent-[#00ac96] "
                        id={data.value}
                        onChange={(e) => dispatch(SetCategory(e.target.value))}
                        name="category"
                        value={data.value}
                      />
                      <span>{data.title}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>
          <hr />
          <div className="flex  gap-1 justify-start ">
            <span className="md:text-xl text-lg font-semibold text-[#00ac96]">
              Language :
            </span>

            <div>
              <select
                className={`p-1 ${!theme && "bg-[#303136] text-white"}`}
                required
                onChange={(e) => dispatch(setLanguage(e.target.value))}
              >
                {Languages.map((data) => {
                  return (
                    <option key={data.value} value={data.value}>
                      {/* //dark mode  bg-black text-white */}
                      {data.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-1 justify-start ">
            <span className="md:text-xl text-lg font-semibold text-[#00ac96]">
              Type :
            </span>
            <div>
              <fieldset onChange={(e) => dispatch(SetJokeType(e.target.value))}>
                <div className="flex  justify-start flex-wrap p-1  gap-2">
                  <label htmlFor="single" className=" cursor-pointer">
                    <input
                      required
                      type="radio"
                      className="me-2 "
                      id="single"
                      name="jokeType"
                      value="single"
                    />
                    <span>Single</span>
                  </label>
                  <label htmlFor="twopart" className=" cursor-pointer">
                    <input
                      required
                      type="radio"
                      className="me-2 "
                      id="twopart"
                      name="jokeType"
                      value="twopart"
                    />
                    <span>Two Part</span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>{" "}
          <hr />
          <div className="flex items-center justify-between gap-1">
            <button
              className="bg-[#00ac96] p-2 px-4 font-semibold rounded-sm flex justify-center items-center gap-3 "
              onClick={() => Navigate("/")}
            >
              <FaArrowLeftLong />
              <span className="font-bold"> back</span>
            </button>

            <button
              role="submit"
              className="bg-[#00ac96] py-2 px-5 rounded-sm flex justify-center items-center gap-3 anima"
              onClick={HandleSubmit}
            >
              <span className="font-bold md:block hidden">See The Magic </span>{" "}
              <span className="font-bold md:hidden block">Next </span>{" "}
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JokeForm;
