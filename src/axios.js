import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ling-puzzles.firebaseio.com/'
});

export default instance;