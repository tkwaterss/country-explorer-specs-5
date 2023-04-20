import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/slices/LoadingSlice";

function App() {
  let currentDisplay = useSelector(selectDisplay);
  let isLoading = useSelector(selectLoading);
  
  let display = <OptionDisplay/>

  if (isLoading) {
    display = <h1>LOADING...</h1>
  } else if (currentDisplay) {
    display = <MainDisplay/>
  }

  return (
    <div className="App font-link">
      <Header />
      {display}
      {/* {currentDisplay ? <MainDisplay /> : <OptionDisplay />} */}
    </div>
  );
}

export default App;
