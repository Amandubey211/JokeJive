import { useDispatch, useSelector } from "react-redux";
import { SetJokes, SetMoreJokes } from "../Redux/Slices/JokeSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const useGetJokes = () => {
  const { category, jokeType, language } = useSelector(
    (store) => store.ApiConfugration
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const FetchJokes = async (pushMore) => {
    try {
      setLoading(true);
      Navigate("/jokepage");
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/${category}?lang=${language}&type=${jokeType}&amount=5`
      );
      const data = await res.json();
      if (!data.error) {
        if (pushMore) {
          dispatch(SetMoreJokes(data.jokes));
          setPage((prevPage) => prevPage + 1);
        } else {
          dispatch(SetJokes(data.jokes));
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        toast.error(`Opps: ${data.code} ${data.message} try it with tow part`);
        Navigate("/form");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return FetchJokes;
};

export default useGetJokes;
