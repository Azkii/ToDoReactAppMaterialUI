import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {
    const [todos,setTodos] = useState([]);

    const AddTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodo);
    }
    const removeTodo = (value) => {
        const removeArr = [...todos].filter(todo => {
            return todo.id !== value
        })
        setTodos(removeArr)
    }
    return (
        <div>
            <TodoForm  onSubmit={AddTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} />
        </div>
    )
}
export default TodoList
