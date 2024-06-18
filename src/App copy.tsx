//Functional
//Class Based
// tsx
// jsx
// js
// ts
//typescript Javascript with superpower
//error prevent
//Debugging
//Code refractor

import TodoList from "./app/todo/todo-list";
import { Button } from "../src/components/ui/button";
import Search from "../src/components/search";
import Counter from "../src/app/counter";
import ToggleLight from "./app/toggle-light";
//import{title,description,buttonTitle} from  './main'
function App() {
  const title = "Hello World";
  const description = "Welcome to the App";
  const buttonTitle = "Click me";
  return (
    <div className="text-red-900 bg-green-300">
      <Search />
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonTitle}</button>
      <TodoList />
      <Button>Click me</Button>
      <Counter />
      <ToggleLight />
    </div>
  );
}
export default App;
