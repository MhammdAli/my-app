import axios from 'axios';


export const Apis = axios.create({
    baseURL : process.env.REACT_APP_HOST,
})


