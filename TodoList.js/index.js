// [
//     {
//         id: 0,
//         description: "",
//         completed: true
//     }
// ]

import React, {useState} from 'react'
import "./styles/index.css"
import TodoList from './ToDoList.js'

function TodoContainer() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function onChange(event) {
        setInput(event.target.value)
    }

    function onClick(event) {
        event.preventDefault()
        setTodos((prevTodos) => {
            const todoId = prevTodos.length + 1
            return [...prevTodos, {
                id: todoId,
                description: input,
                completed: false
            }]
        })
        setInput("")
    }

    return <div className='todo-container'>
        <form className='input-container' onSubmit={onClick}>
            <input type='text' value={input} onChange={onChange} required/>
            <button type="submit" className='add-todo-button'>Add Todo</button>
        </form>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
}

export default TodoContainer