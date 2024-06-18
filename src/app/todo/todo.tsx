
import TodoList from "./todo-list";
import Search from "../../components/search";
import TodoForm from "./todo-form";
import { useState } from "react";

export default function Todo(){
  const [todoList, setTodoList] = useState([]);
  const toggleCompleted = (id) => {
    const newTodos = todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;  
    });
    setTodoList(newTodos);
  }
  const removeTodo=(id)=>{
    const newTodos = todoList.filter(item=>item.id!==id)
    setTodoList(newTodos)
  }
  const addTodo=(todo)=>{
    const newTodos=[...todoList,todo]
    setTodoList(newTodos)
  }

    return(
        <div>
            <TodoForm 
            addTodo={addTodo}/>
            <TodoList 
             todoList={todoList}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
            />
            <Search/>
            
        </div>
    )
}