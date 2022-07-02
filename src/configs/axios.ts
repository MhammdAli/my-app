import axios from 'axios';


export const Apis = axios.create({
    baseURL : 'https://localhost:5001/api/' // process.env.REACT_APP_HOST,
})


