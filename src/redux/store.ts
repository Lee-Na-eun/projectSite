import {configureStore} from '@reduxjs/toolkit';
import reducer from './rootReducer';

const store = configureStore({
    reducer : reducer
});

export type AppDispatch = typeof store.dispatch;
export default  store;