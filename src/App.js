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

  console.log("Search List", potentials);
  console.log("Display Details", currentDisplay);

  return (
    <div className="App font-link">
      <Header />
      <OptionDisplay />
    </div>
  );
}

export default App;
