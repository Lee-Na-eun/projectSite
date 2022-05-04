import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type IndexType = {
    pageIndex : number,
}
type IndexStatusType = {
    findPageIndex : {
        pageIndex : number,
    }
}

const initialState:IndexType = {
    pageIndex : 0
}

export const nowPageIndex = createSlice({
    name : 'nowPageIndex',
    initialState,
    reducers : {
        indexUp : (state:IndexType) => {
            state.pageIndex += 1;
        },
        indexDown : (state:IndexType) => {
            state.pageIndex -= 1;
        },
    }
});

export default nowPageIndex.reducer;
export const pageIndexStatus = (state:IndexStatusType) => state;
export const {indexDown, indexUp} = nowPageIndex.actions