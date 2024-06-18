import { useState } from "react";
import { Button } from "../../components/ui/button";
import uuid4 from "uuid4";

export default function TodoForm(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todo;
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo({ ...todo, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, completed: false, id: uuid4() };
    addTodo(newTodo);
    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          id="title"
          className="border"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          id="description"
          className="border"
          onChange={handleChange}
        />
      </div>
      <Button>Add</Button>
    </form>
  );
}
