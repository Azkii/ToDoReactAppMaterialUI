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
    const sortData = (e) => {
      const sortArray = document.querySelectorAll(".todoHolder");
      sortArray.forEach((element) => {
          if (e.value === "all") {
              element.style.display = "";
          }
          else if(element.getAttribute("name") !== e.value) {
              element.style.display = "none";
          }
          else {
              element.style.display = "";
          }
      });
    }
    return (
        <div>
            <div className="selectBorder"></div>
            <select className="select border-gradient border-gradient-purple" defaultValue="All" onChange={(e) => sortData(e.target)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            <TodoForm  onSubmit={AddTodo} filter={sortData} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} />
        </div>
    )
}
export default TodoList
