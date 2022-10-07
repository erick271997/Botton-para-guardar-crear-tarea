import React, { useState } from "react";


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
                    <div key={item.id}>{item.title}</div>
                    ))}
            </div>
        </div>
    );
}
export default TodoApp;