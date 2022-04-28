import {combineReducers} from "redux";
import findTagHeightReducer from './scroll/scrollHeight'

const reducer = combineReducers({
    findTagHeight : findTagHeightReducer
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;