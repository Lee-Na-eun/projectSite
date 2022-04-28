import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ScrollHeightType = {
    scrollHeight : number
}

const initialState:ScrollHeightType = {
    scrollHeight : 0
}

export const findTagHeight = createSlice({
    name : 'scrollHeight',
    initialState,
    reducers : {
        scrollNumber : (state:ScrollHeightType, action:PayloadAction<ScrollHeightType>) => {
            state.scrollHeight = action.payload.scrollHeight
        }
    }
});

export default findTagHeight.reducer;