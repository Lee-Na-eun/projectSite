import {combineReducers} from "redux";
import findTagHeightReducer from './scroll/secondScrollHeight';
import findRandomIndexReducer from "./random/randomIndex";
import findPageIndexReducer from "./scroll/nowPageIndex"

const reducer = combineReducers({
    secondFindTagHeight : findTagHeightReducer,
    findRandomIndex : findRandomIndexReducer,
    findPageIndex : findPageIndexReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;