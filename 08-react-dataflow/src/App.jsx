import { useState } from "react";
import "./App.css";
import ToDoCounter from "./components/ToDoCounter";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [contador, setContador] = useState(0); //* => [ Estado y FunciónQueModificaElEstado ]

  const [allTodos, setAllTodos] = useState([]);

  return (
    <>
      <h1>ToDo List</h1>
      <hr />

      <ToDoCounter contador={contador} titulo={"Tareas pendientes: "} />

      <AddToDo setAllTodos={setAllTodos} setContador={setContador} />

      <ToDoList allTodos={allTodos} />
    </>
  );
}

export default App;
