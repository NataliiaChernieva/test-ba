import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export async function fetchFaculties() {
    try {
        const { data } = await axios.get('/faculties');
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function postFaculty(newFaculty) {
    try {
        const { data } = await axios.post('/faculties', (newFaculty));
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
