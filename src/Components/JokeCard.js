import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddCopiedText } from "../Redux/Slices/TextSlice";
const JokeCard = ({ data, index }) => {
  const [liked, SetLiked] = useState(false);
  const [Copied, SetCopied] = useState(false);
  const { joke, id, flags, category, setup, delivery, type } = data;
  const dispatch = useDispatch();
  const HandleLike = () => {
    SetLiked(!liked);
    if (!liked) {
      toast.success("Liked");
    }
  };
  const handleCopy = () => {
    SetCopied(!Copied);
    dispatch(AddCopiedText(joke));
    const timeOutId = setTimeout(() => {
      SetCopied(false);
    }, 2000);
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        toast.success("copied");
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

      <div className="md:col-span-2 col-span-12 md:border-l-2  md:p-2 p-1 ">
        <section className="flex  md:flex-col   justify-center  items-center gap-1   ">
          <span
            className={`text-center p-1   font-semibold ${
              category === "Dark" ? "bg-red-400" : "bg-green-400"
            }
            }  w-full rounded-md`}
          >
            {category}{" "}
          </span>
          <span className=" text-center p-1   font-semibold bg-[#ccf2f2] w-full rounded-md capitalize ">
            {type}{" "}
          </span>
          <div className="flex  items-center justify-between px-2 w-full rounded-md  bg-[#ccf2f2]   ">
            <button className=" cursor-pointer p-1   " onClick={handleCopy}>
              {!Copied ? (
                <IoCopyOutline className="md:text-xl  hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              ) : (
                <IoCopy className="text-xl hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              )}
            </button>
            <button className=" cursor-pointer p-1 " onClick={HandleLike}>
              {" "}
              {liked ? (
                <FcLike className="text-xl hover:shadow-2xl hover:scale-110 delay-100 ease-in-out " />
              ) : (
                <FcLikePlaceholder className="text-xl hover:shadow-2xl hover:scale-125 ease-in-out animate-pulse   delay-150  " />
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JokeCard;
