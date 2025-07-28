import {v4 as uuidv4} from 'uuid';
import { useState } from "react";

export default function TodoList(){
    let[todos,setTodos]=useState([{task: "sample-task",id:uuidv4()}]);
    let[newTodo, setNewTodo]=useState("");
    let addnewTask=()=>{
        setTodos((prevTodos) =>{
           return[...prevTodos,{task: newTodo, id: uuidv4()}] 
        });
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);

    };
    let deleteTodo=(id)=>{
   setTodos(todos.filter((todo)=>todo.id!=id));
    };

    let uppercaseall=()=>{
    setTodos(
        todos.map((todo)=>{
        return{
            ...todo,
            task: todo.task.toUpperCase(),
               };
        })
    );
    };
    return(
        <div> 
            <input placeholder="add a text" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addnewTask}>Add task</button>
            <br></br><br></br><br></br>
            <h4>TODO list</h4>
            <ul>
                {
                todos.map((todo)=>(
                    <li key={todo.id}>
                        <span> {todo.task}</span>
                       &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        </li>
                ))}
           </ul>
           <button onClick={uppercaseall}>Uppercase all</button>
        </div>
    );
}