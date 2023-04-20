import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "./slices/displayCountrySlice";
import loadingReducer from "./slices/LoadingSlice";

//^ We will import the slice reducers here

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
    loadingState: loadingReducer,
    //^ We will use the slice reducers here
  },
});
