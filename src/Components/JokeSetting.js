import React from "react";
import JokeForm from "./JokeForm";
import FormImage from "../svg/JokeForm.svg";
import { useSelector } from "react-redux";

const JokeSetting = () => {
  const theme = useSelector((store) => store.Theme.light);

  return (
    <div
      className={`flex justify-center md:flex-nowrap items-start  flex-wrap md:p-10  h-screen  p-3 gap-10 ${
        !theme && "bg-[#303136] text-white"
      }`}
    >
        <JokeForm />
      <div className="flex flex-col justify-center items-center gap-2 p-2 ">
        <b className="mb-4">
          Setting <span className="text-[#00ac96] ">Page</span>{" "}
        </b>
        <img className="md:w-72 w-52" src={FormImage} />
        <b>
          Laughs await,{" "}
          <span className="text-[#00ac96]">start scrolling! </span>{" "}
        </b>
      </div>{" "}
    
    </div>
  );
};

export default JokeSetting;
