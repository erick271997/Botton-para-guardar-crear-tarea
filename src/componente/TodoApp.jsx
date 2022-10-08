import React, { useState } from "react";
import Todo from "./Todo";
import '../stilo/TodoApp.css';

const TodoApp = ()=>{
    const [title, seTitle] = useState("hola");  
    const[todos, setTodos] = useState([]);
    function handleChange (event){
        const value = event.target.value;
        seTitle(value);
    }
    function handleSubmit(escuchar){
        escuchar.preventDefault();

        const newTodo ={
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };
        const temp = [... todos];
        temp.unshift(newTodo);

        setTodos(temp);

        seTitle("");
    }

    const handleUpdate = (id, value) =>{
        const temp = [... todos];
        const item = temp.find((item) => item.id = id);
        item.title = value;
        setTodos(temp);
    }
    const handleDelete = (id) =>{
        const temp = todos.filter(item => item.id = id);

        setTodos(temp);
    }
    return(
        <div className="todoContainer">
            <form className="todocreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}/>
                <input onClick={handleSubmit} 
                type="submit" value="Create todo" 
                className="buttonCreate" 
                />
            </form>
            <div className="todosContainer">
                {todos.map((item) => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>  
                    ))}
            </div>
        </div>
    );
}
export default TodoApp;