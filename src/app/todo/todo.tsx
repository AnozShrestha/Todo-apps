import TodoList from "./todo-list";
import Search from "../../components/search";
import TodoForm from "./todo-form";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const toggleCompleted = (id) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);
    setTodoList(newTodos);
  };
  const addTodo = (todo) => {
    const newTodos = [...todoList, todo];
    setTodoList(newTodos);
  };
  const filteredList = todoList.filter((item) =>
    item?.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Search search={search} handleChange={handleChange} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={filteredList}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}
