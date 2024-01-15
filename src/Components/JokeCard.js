import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

import toast from "react-hot-toast";
const JokeCard = ({ data, index }) => {
  const [liked, SetLiked] = useState(false);
  const [Copied, SetCopied] = useState(false);
  const { joke, id, flags, category, setup, delivery } = data;
  const HandleLike = () => {
    SetLiked(!liked);
    if (!liked) {
      toast.success("Thanks");
    }
  };
  const handleCopy = () => {
    // Implement the logic to copy the joke text to the clipboard
    SetCopied(!Copied);
    const timeOutId = setTimeout(() => {
      SetCopied(false);
    }, 2000);
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        toast.success("copied");
        // clearTimeout(timeOutId);
      })
      .catch((err) => {
        console.error("Error copying joke to clipboard:", err);
      });
  };

  return (
    <div className=" text-black bg-[#8aebe1] p-2 rounded-lg shadow-2xl w-full   grid grid-cols-12">
      <div className="md:col-span-10 md:p-5 p-3 col-span-12 ">
        {joke ? (
          <section className="flex flex-col  justify-start items-start">
            <span className="font-semibold">
              {" "}
              <span className="text-2xl font-bold">{index}. </span> {joke}
            </span>{" "}
          </section>
        ) : (
          <section className="flex flex-col  justify-start items-start">
            <span className="font-bold">
              <span>{index}.</span>
              <span> {setup}</span>
            </span>{" "}
            <span className="font-semibold">{delivery}</span>
          </section>
        )}
      </div>

      <div className="md:col-span-2 col-span-12 md:border-l-2  p-2 ">
        <section className="flex  md:flex-col   justify-between  items-center gap-3   ">
          <span className="  p-2   font-semibold bg-[#ccf2f2] w-full rounded-md ">
            {category}{" "}
          </span>
          <div className="flex  items-center justify-end    ">
            <button className=" cursor-pointer p-2   " onClick={handleCopy}>
              {!Copied ? (
                <IoCopyOutline className="text-2xl  hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              ) : (
                <IoCopy className="text-2xl hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              )}
            </button>
            <button className=" cursor-pointer p-2 " onClick={HandleLike}>
              {" "}
              {liked ? (
                <FcLike className="text-3xl hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              ) : (
                <FcLikePlaceholder className="text-3xl hover:shadow-2xl hover:scale-150   delay-75  " />
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JokeCard;
