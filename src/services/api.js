import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export async function fetchAllFaculties() {
    const { data } = await axios.get('/faculties');
    console.log('data :>> ', data);
    return data;
}

export async function postFaculty(newFaculty) {
    const { data } = await axios.post('/faculties', (newFaculty));
    return data;
}
