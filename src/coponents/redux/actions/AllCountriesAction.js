import { ActionsTypes } from "../costants/Actions-types";
export const setCountries = (countries) => {
  return {
    type: ActionsTypes.SET_COUNTRIES,
    payload: countries,
  };
};

export const SelectedCountry = (continents) => {
  return {
    type: ActionsTypes.SELECTED_COUNTRY,
    payload: continents,
  };
};
