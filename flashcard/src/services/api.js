import axios from "axios";

const api = axios.create({
    baseURL:"https://localhost:7246/api/"
})

export default api;