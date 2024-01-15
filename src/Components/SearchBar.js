import React from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const theme = useSelector((store) => store.Theme.light);
  return (
    <div className="md:block hidden">
      <form>
        <fieldset className="flex justify-center gap-1 items-center">
          {" "}
          <input
            type="text"
            placeholder="search for jokes"
            className={`p-1 md:px-4 px-2 border outline-none rounded-sm ${
              !theme && "bg-gray-200 text-black"
            }`}
          />
          <button className="bg-[#00ac96]  p-1 md:px-2 rounded-sm">
            search
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
