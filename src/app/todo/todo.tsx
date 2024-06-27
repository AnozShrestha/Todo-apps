import TodoList from "./todo-list";
import Search from "../../components/search";
import TodoForm from "./todo-form";
import { useState } from "react";

interface ITodoItem {
  title: string;
  description: string;
  completed: boolean;
  id: string;
}
export default function Todo() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const toggleCompleted = (id: string) => {
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
  const removeTodo = (id: string) => {
    const newTodos = todoList.filter((item) => item.id !== id);
    setTodoList(newTodos);
  };
  const addTodo = (todo: ITodoItem) => {
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
