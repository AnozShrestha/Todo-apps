import { useState } from "react";
import { Button } from "../../components/ui/button";
import uuid4 from "uuid4";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Todo</AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            value={title}
            id="title"
            onChange={handleChange}
            label="Title"
          />

          <Input
            type="text"
            name="description"
            value={description}
            id="description"
            label="Description"
            onChange={handleChange}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
