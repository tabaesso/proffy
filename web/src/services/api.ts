import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tabaesso-proffy-deploy.herokuapp.com/',
});

export default api;