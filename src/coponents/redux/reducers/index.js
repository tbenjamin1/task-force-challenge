import {combineReducers} from 'redux';
import {CountriesReducers,continentReducers} from './CountriesReducers';

const reducers = combineReducers({
    allCountries: CountriesReducers,
    allcontinets:continentReducers,
});
export default reducers;