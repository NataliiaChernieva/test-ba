import { createSelector } from "reselect";

export const getFaculties = (state) => state.items.entities;
export const getFilter = (state) => state.filter;

export const getFilteredFaculties = createSelector(
    [getFaculties, getFilter],
    (faculties, filterValue) => faculties.filter(faculties =>
        faculties.name.toLowerCase().includes(filterValue)));

// export const getFilteredInfo = createSelector(
//     [getFaculties, getFilter],
//     (faculties, filterValue) => faculties.filter(faculties =>
//          faculties.name.toLowerCase().includes(filterValue)),)