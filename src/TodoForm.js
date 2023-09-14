import { useEffect, useState } from "react"
import { getTodos } from "./actions/preferenceActions";

export default function TodoForm() {
    const [todos,setTodos] = useState([]);

    useEffect(()=> {
        fetchData(); 
    },[])

    const fetchData = () => {
        getTodos().then(res=> {
            console.log(res.data);
            setTodos(res.data);  
        })
    }

    return (
        <div id="todoContainer">
            <div id="container">
                <h2>To-do List</h2>
                <div id = "smaller">
                <input id="add" type="text" />
                <span className="material-symbols-outlined">
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