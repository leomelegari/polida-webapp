import axios from "axios";

const api = axios.create({
    baseURL: "https://shrouded-mountain-15003.herokuapp.com/https://drintim-api-capstone-m4.herokuapp.com"
});

export default api;