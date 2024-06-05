export default function ToDoCounter(props) {
  // console.log(props);
  //* props = {contador: 0, titulo: 'Tareas pendientes: '}

  return (
    <div style={{ backgroundColor: "darkslateblue", padding: "5px" }}>
      <h2>{props.titulo} {props.contador}</h2>
    </div>
  );
}
