import { createSlice } from '@reduxjs/toolkit';
import * as facultiesOperations from '../../redux/faculties/facultiesOperations';

const itemsSlice=createSlice({
  name: 'items',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  } ,
  extraReducers: {
      [facultiesOperations.fetchFaculties.fulfilled]: (state, action) => {
          console.log('action :>> ', action.payload);
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
        error: null,
      }
    },

    [facultiesOperations.fetchFaculties.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [facultiesOperations.fetchFaculties.rejected]: (state) => {
      return {...state, isLoading: false, error: "ERROR",}
    },

    [facultiesOperations.postFaculty.fulfilled]: (state, action) => {
      return {...state,
        entities: [...state.entities, action.payload],
        isLoading: false,
        error: null,}
    },

    [facultiesOperations.postFaculty.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [facultiesOperations.postFaculty.rejected]: (state) => {
      return {...state, isLoading: false, error: "ERROR",}
    },

    // [facultiesOperations.deleteContact.fulfilled]: (state, action) => {
    //   return {...state,
    //     entities: state.entities.filter((item)=>item.id!==action.payload),
    //     isLoading: false,
    //     error: null,}
    // },

    // [facultiesOperations.deleteContact.pending]: (state) => {
    //   return {...state, isLoading: true, error: null,}
    // },

    // [facultiesOperations.deleteContact.rejected]: (state) => {
    //   return {...state, isLoading: false, error: "ERROR",}
    // },
  }
});

export default itemsSlice.reducer;