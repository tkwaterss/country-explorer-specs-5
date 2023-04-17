import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";

//^ We will import the slice reducers here

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    //^ We will use the slice reducers here
  },
});
