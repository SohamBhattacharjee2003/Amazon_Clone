import axios from 'axios';

const instance = axios.create({
    baseURL: "https://amazon-clone-4-isz3.onrender.com"
});

export default instance;


