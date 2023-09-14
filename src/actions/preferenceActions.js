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
export const putTodo = (todo) => {
    const modded = {...todo, completed : true}
    return axios.put(`${baseUrl}/${todo.id}`,modded)
}
export const secondPutTodo =(todo) => {
    const modded = {...todo, completed : false}
    return axios.put(`${baseUrl}/${todo.id}`,modded)
}
export const deleteTodo = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}