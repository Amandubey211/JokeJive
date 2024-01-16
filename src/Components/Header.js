import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Slices/ThemeSlice";
import toast from "react-hot-toast";

const Header = ({ page }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.Theme.light);
  const HandleDarkMode = () => {
    dispatch(toggleTheme());
    if (theme) {
      toast.success("Night Time");
    } else {
      toast.success("Day Time");
    }
  };
  return (
    <div
      className={`flex justify-between items-center md:py-3 py-2  shadow-md md:ps-16 pe-10 px-4 ${
        !theme && "bg-[#303136] text-white"
      }`}
    >
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold md:text-2xl text-md  uppercase">
          <span className="text-[#00ac96] font-bold"> J</span>oke-
          <span className="font-bold text-[#00ac96]">J</span>ike
        </Link>
      </div>

      {page !== "welcome" && <SearchBar />}

      <div className="flex justify-start gap-4 items-center ">
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input type="checkbox" onChange={HandleDarkMode} />
            <span className="slider"></span>
          </label>
        </div>
        {/* <Link
          title="About"
          to="/about"
          className="text-[#00ac96] font-bold flex flex-col items-center  justify-center"
        >
          <img
            src="https://avatars.githubusercontent.com/u/109097090?v=4"
            className="w-10 rounded-full"
          />
          <span className="text-[10px]">About</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
