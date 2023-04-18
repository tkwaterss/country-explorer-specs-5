import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  const currentPotentials = useSelector(selectPotentials);

  const dispatch = useDispatch();

  let displayOptions = currentPotentials.map((option, i) => {
    return (
      <h2
        key={Math.random()}
        className="country-option"
        onClick={() => dispatch(setDisplayCountry(currentPotentials[i]))}
      >
        {option.name.common}
      </h2>
    );
  });

  return <div className="stack">{displayOptions}</div>;
};

export default OptionDisplay;
