import axios from "axios"

const baseUrl = "http://localhost:3005/data";

export const getTodos = () => {
    return axios.get(baseUrl)
    .catch(err=> console.error(err.message)); 
}
export const postTodo = (todo) => {
    const obj = {id : Date.now(), completed : false, description : todo }
    return axios.post(baseUrl,obj)
}