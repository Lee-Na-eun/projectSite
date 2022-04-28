import {combineReducers} from "redux";
import findTagHeightReducer from './scroll/secondScrollHeight'

const reducer = combineReducers({
    secondFindTagHeight : findTagHeightReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;