import { createSlice } from "@reduxjs/toolkit";

const initialPotentialCountriesState = {
  value: [
    {
      name: {
        common: "America",
      },
    },
  ],
};

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: initialPotentialCountriesState,
  reducers: {
    setPotentialCountries(state, action) {
      state.value = action.payload;
    },
    deletePotentialCountries(state) {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } =
  potentialCountriesSlice.actions;

export const selectPotentials = (state) => {
  return state.potentialCountries.value;
};

export default potentialCountriesSlice.reducer;
