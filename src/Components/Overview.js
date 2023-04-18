import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <div>
        <h1>Official Name: {currentDisplay.name.official}</h1>
        <h2>Common Name: {currentDisplay.name.common}</h2>
      </div>
      <h3>Population: {currentDisplay.population}</h3>
      <div>
        <h4>Capital City: {currentDisplay.capital[0]}</h4>
        <h4>Continent: {currentDisplay.continents[0]}</h4>
      </div>
      <div>
        <h5>Independant: {currentDisplay.independant ? "true" : "false"}</h5>
        <h5>LandLocked: {currentDisplay.landlocked ? "true" : "false"}</h5>
        <h5>Member of UN: {currentDisplay.unMember ? "true" : "false"}</h5>
      </div>
    </div>
  );
};

export default Overview;
