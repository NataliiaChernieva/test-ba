import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/api';

export const fetchContacts = createAsyncThunk('faculties/fetchFaculties',
    async (_, { rejectWithValue }) => {
        try {
            const data = await API.fetchFaculties();
            return data;   
        } catch (error) {
            return rejectWithValue(error);
        }
    
});

export const postContact = createAsyncThunk('faculties/postFaculties',
    async (newFaculty) => {
        try {
            const data = await API.postFaculty(newFaculty);
            return data;   
        } catch (error) {
            return (error);
        }
    
    });