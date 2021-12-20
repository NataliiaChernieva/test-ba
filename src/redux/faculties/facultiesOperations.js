import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/api';

export const fetchFaculties = createAsyncThunk('faculties/fetchFaculties',
    async (_, { rejectWithValue }) => {
        try {
            const data = await API.fetchAllFaculties();
            console.log('data in oper :>> ', data);
            return data;   
        } catch (error) {
            return rejectWithValue(error);
        }
    
});

export const postFaculty = createAsyncThunk('faculties/postFaculty',
    async (newFaculty) => {
        try {
            const data = await API.postFaculty(newFaculty);
            return data;   
        } catch (error) {
            return (error);
        }
    
    });