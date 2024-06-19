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

import Counter from "./app/counter";
import Profile from "./app/profile";
import Todo from "./app/todo/todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToggleLight from "./app/toggle-light";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/toggle-light",
    element: <ToggleLight />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
