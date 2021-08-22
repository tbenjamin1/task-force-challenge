import { ActionsTypes } from "../costants/Actions-types"

const initialState ={
   countries:[],
   continents: []
};
export const CountriesReducers = (state =initialState,{type,payload}) => {
   
    switch(type){
        case ActionsTypes.SET_COUNTRIES:
            const countData = []
            countData.push(payload)
            return{... state,countries:countData};
        default:
            return state;
    }
};

export const continentReducers = (state =initialState,{type,payload}) => {
    switch(type){
        case ActionsTypes.SELECTED_COUNTRY:
            return{... state,continents:payload};
        default:
            return state;
    }
};
