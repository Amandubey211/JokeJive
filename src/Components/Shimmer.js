import React from "react";
import { FcLike } from "react-icons/fc";
import { IoCopyOutline } from "react-icons/io5";

const Shimmer = ({ height, width }) => {
  return (
    <div className={`h-${height} w-${width}  md:px-20  px-5 m-4  delay-75`}>
      <div className=" text-black bg-[#d5e6e4] p-2 rounded-lg shadow-2xl w-full   grid grid-cols-12">
        <div className="md:col-span-10 md:p-5 p-3 col-span-12 ">
          <section className="flex flex-col  justify-start items-start">
            <span className="font-semibold">
              <span className="text-2xl font-bold">1. jokess </span>
            </span>
          </section>
        </div>

        <div className="md:col-span-2 col-span-12 md:border-l-2  p-2 ">
          <section className="flex  md:flex-col   justify-center  items-center gap-3   ">
            <span className="  p-2   font-semibold bg-[#ccf2f2] w-full rounded-md ">
              category
            </span>
            <div className="flex  items-center justify-end    ">
              <button className=" cursor-pointer p-2   ">
                <IoCopyOutline className="text-2xl  hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              </button>
              <button className=" cursor-pointer p-2 ">
                <FcLike className="text-3xl hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
