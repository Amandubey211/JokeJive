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
      className={`flex justify-between items-center md:py-3 py-2  shadow-md md:px-16 px-4 ${
        !theme && "bg-[#303136] text-white"
      }`}
    >
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold md:text-2xl text-md  uppercase">
          <span className="text-[#00ac96] font-bold"> J</span>oke-
          <span className="font-bold text-[#00ac96]">J</span>ike
        </Link>
        {/* <Link
          to="/about"
          className="text-[#00ac96] font-bold hover:text-[#053932]"
        >
          About
        </Link> */}
      </div>

      {page !== "welcome" && <SearchBar />}

      <div className="flex justify-start gap-5 items-center ">
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input type="checkbox" onChange={HandleDarkMode} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
