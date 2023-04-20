import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setPotentialCountries,
  deletePotentialCountries,
} from "../redux/slices/potentialCountriesSlice";
import {
  deleteDisplayCountry,
  selectDisplay,
} from "../redux/slices/displayCountrySlice";
import { setLoadingState } from "../redux/slices/LoadingSlice";


const Header = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className="header">
      <div className="home">
        <BsFillFlagFill style={{ marginRight: "10px" }} fontSize="1.6em" />
        <h3 className="home-country">
          {currentDisplay && currentDisplay.name.common}
        </h3>
      </div>
      <div className="country-input">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(setLoadingState())
            axios
              .get(`https://restcountries.com/v3.1/name/${input}`)
              .then((res) => {
                dispatch(deletePotentialCountries());
                dispatch(setPotentialCountries(res.data));
                dispatch(deleteDisplayCountry());
                dispatch(setLoadingState());
              })
              .catch((err) => {
                alert("No countries found that match your search!");
              });
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
