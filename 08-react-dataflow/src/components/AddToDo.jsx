import { useState } from "react"

export default function AddToDo({setAllTodos, setContador}) {

  const [todo, setTodo] = useState("");
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setTodo(event.target.value);
    // console.log(todo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setContador(contador => contador + 1);
    setAllTodos(allTodos => [...allTodos, todo]);
    //* EstadoPrevio^          ^EstadoActual
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Ingresar nueva tarea: </label>
      <input type="text" onChange={handleInputChange} />
      <input type="submit" value="Agregar" />
    </form>
  )
}