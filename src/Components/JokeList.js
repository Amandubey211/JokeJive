import React, { useState } from "react";
import JokeCard from "./JokeCard";
import toast from "react-hot-toast";

const JokeList = ({ AllJokes }) => {
  const [copiedJokes, setCopiedJokes] = useState([]);

  const handleCopyClick = (jokeId) => {
    if (!copiedJokes.includes(jokeId)) {
      setCopiedJokes([...copiedJokes, jokeId]);
      toast.success("copied");
      console.log(copiedJokes);
    }
  };
  return (
    <div
      className={`mainContent flex flex-col justify-center items-start md:px-36 md:py-10 p-2  gap-4`}
    >
      {AllJokes?.map((joke, index) => {
        return (
          <JokeCard
            key={joke.id}
            data={joke}
            onCopyClick={handleCopyClick}
            isCopied={copiedJokes.includes(joke.id)}
            index={index + 1}
          />
        );
      })}
    </div>
  );
};

export default JokeList;
