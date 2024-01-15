import { useDispatch, useSelector } from "react-redux";
import { SetJokes, SetMoreJokes } from "../Redux/Slices/JokeSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const useGetJokes = () => {
  const { category, jokeType, language } = useSelector(
    (store) => store.ApiConfugration
  );
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const FetchJokes = async (addMore) => {
    try {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/${category}?lang=${language}&type=${jokeType}&amount=5`
      );
      const data = await res.json();
      if (!data.error) {
        if (addMore) {
          dispatch(SetMoreJokes(data.jokes));
        } else {
          dispatch(SetJokes(data.jokes));
        }
        Navigate("/jokepage");
        toast.success("success");
      } else {
        toast.error(`Opps: ${data.code} ${data.message}`);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return FetchJokes;
};

export default useGetJokes;
