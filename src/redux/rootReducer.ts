import {combineReducers} from "redux";
import findTagHeightReducer from './scroll/secondScrollHeight';
import findRandomIndexReducer from "./random/randomIndex";

const reducer = combineReducers({
    secondFindTagHeight : findTagHeightReducer,
    findRandomIndex : findRandomIndexReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;