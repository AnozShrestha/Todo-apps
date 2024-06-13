import Button from "../../components/button";
import TodoList from "./todo-list";
import Search from "../../components/search";

export default function Todo(){
    return(
        <div>
            <Search/>
            <TodoList/>
            <Button title="Add Todo"/>
        </div>
    )
}