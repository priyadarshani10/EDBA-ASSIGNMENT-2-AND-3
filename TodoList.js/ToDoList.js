import React from 'react'

function TodoList(props) {

    function markComplete(todoIndex, markAsCompleted) {
        const cloneTodo = JSON.parse(JSON.stringify(props.todos))
        cloneTodo[todoIndex].completed = markAsCompleted
        props.setTodos(cloneTodo)
    }

    function deleteTodo(todoIndex) {
        const cloneTodo = JSON.parse(JSON.stringify(props.todos))
        cloneTodo.splice(todoIndex, 1)
        props.setTodos(cloneTodo)
    }

    // console.log(props.todos)

    return <div className='todo-list-container'>
        {
            props.todos.map((todo, index) => {
                return <div className='todo-item' key={todo.id}>
                    {todo.completed ? <strike><h5>{todo.description}</h5></strike> : <h5>{todo.description}</h5>}
                    <button className='complete-todo-button' onClick={() => markComplete(index, todo.completed ? false : true)}>{todo.completed ? "Mark Not Complete" : "Mark Complete"}</button>
                    <button className='delete-todo' onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            })
        }
    </div>
}

export default TodoList