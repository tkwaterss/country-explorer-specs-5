import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "./slices/displayCountrySlice";

//^ We will import the slice reducers here

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
    //^ We will use the slice reducers here
  },
});
