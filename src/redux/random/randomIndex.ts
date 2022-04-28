import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type randomIndexType = {
    randomIndex : number,
}

type randomIndexAllType = {
    findRandomIndex : {
        randomIndex : number
    }
}

const initialState:randomIndexType = {
    randomIndex : 0
}

export const findRandomIndex = createSlice({
    name : 'randomIndex',
    initialState,
    reducers : {
        randomIndex : (state:randomIndexType, action:PayloadAction<randomIndexType>) => {
            state.randomIndex = action.payload.randomIndex;
        },
    }
});

export default findRandomIndex.reducer;
export const randomIndexStatus = (state:randomIndexAllType) => state.findRandomIndex;
export const {randomIndex} = findRandomIndex.actions