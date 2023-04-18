import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice.js";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { useSelector } from "react-redux";

function App() {
  let potentials = useSelector(selectPotentials);
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
