import {configureStore } from '@reduxjs/toolkit';
import items from './faculties/facultiesSlice';
import filter from './filter/filterSlice';

const rootReducer = {
    items,
    filter,
};

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export default store;


 

