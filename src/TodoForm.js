import { useEffect, useState } from "react"
import { getTodos, postTodo } from "./actions/preferenceActions";

export default function TodoForm() {
    const [todos,setTodos] = useState([]);
    const [todoInQue,setTodoInQue] = useState(""); 

    const change = e => {
        e.preventDefault(); 
        setTodoInQue(e.target.value)
    }

    useEffect(()=> {
        fetchData(); 
    },[])

    const fetchData = () => {
        getTodos().then(res=> {
            setTodos(res.data);  
        })
    }
    const addData = () => {
        postTodo(todoInQue).then(()=> {
            fetchData();
            setTodoInQue(""); 
        })
    }

    return (
        <div id="todoContainer">
            <div id="container">
                <h2>To-do List</h2>
                <div id = "smaller">
                <input value = {todoInQue} onChange={change} id="add" type="text" />
                <span onClick = {addData}className="material-symbols-outlined">
                    add_circle
                </span>
                </div>
                {todos.map(n=> {
                    return <div className = "list" key = {n.id}>
                        <span className = "description">{n.description}</span>
                        <button className="completed">{n.completed === true ? "delete" : "complete"}</button >
                        </div>
                })}
            </div>
        </div>
    )
}