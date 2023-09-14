import axios from "axios"

const baseUrl = "http://localhost:3005/data";

export const getTodos = () => {
    return axios.get(baseUrl)
    .catch(err=> console.error(err.message)); 
}