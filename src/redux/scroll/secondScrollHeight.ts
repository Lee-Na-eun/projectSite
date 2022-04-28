import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ScrollHeightType = {
    secondScrollHeight : number,
}
type ScrollStatusType = {
    secondFindTagHeight : {
        secondScrollHeight : number,
    }
}

const initialState:ScrollHeightType = {
    secondScrollHeight : 0
}

export const findTagHeight = createSlice({
    name : 'secondScrollHeight',
    initialState,
    reducers : {
        scrollSecondNumber : (state:ScrollHeightType, action:PayloadAction<ScrollHeightType>) => {
            state.secondScrollHeight = action.payload.secondScrollHeight;
        },
    }
});

export default findTagHeight.reducer;
export const scrollHeightStatus = (state:ScrollStatusType) => state;
export const {scrollSecondNumber} = findTagHeight.actions