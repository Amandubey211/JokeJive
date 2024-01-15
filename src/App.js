import Body from "./Components/Body";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import AppStore from "./Redux/Store/AppStore";
function App() {
  return (
    <Provider store={AppStore}> 
      <div className="App">
        <Toaster />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
