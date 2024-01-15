import { configureStore } from "@reduxjs/toolkit";
import ApiConfugrationReducer from "../Slices/ApiConfugrationSlice";
import JokeReducer from "../Slices/JokeSlice";
import ThemeReducer from "../Slices/ThemeSlice";
import TextReducer from "../Slices/TextSlice";
const AppStore = configureStore({
  reducer: {
    ApiConfugration: ApiConfugrationReducer,
    AllJokes: JokeReducer,
    Theme: ThemeReducer,
    Text: TextReducer,
  },
});
export default AppStore;
