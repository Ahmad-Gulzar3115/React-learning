import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample-Task", id: uuidv4(),isDone: false, }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4(),isDone:false, }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markDoneAll = () => {
        setTodos((prevtodo) => prevtodo.map((todo) => {
            return {
                ...todo,
                isDone:true,
            };
        })
        );
    };
    // let lowercaseAll = () => {
    //     setTodos((prevtodo) => prevtodo.map((todo) => {
    //         return {
    //             ...todo,
    //             task: todo.task.toLowerCase(),
    //         };
    //     })
    //     );
    // };

    let markDoneOne = (id) => {
        setTodos((prevtodo) => prevtodo.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone:true,
                };
            } else {
                return todo;
            }
        })
        );
    };
   

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markDoneOne(todo.id)}>Mark as one</button>
                        </li>

                    })
                }
            </ul>
            <br /><br /><br />
            <button onClick={markDoneAll}>Mark Done All</button>
            {/* <button onClick={lowercaseAll}>LowerCase All</button> */}
        </div>
    )
}