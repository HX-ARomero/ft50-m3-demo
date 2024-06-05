export default function ToDoList({ allTodos }) {
  return (
    <div style={{ backgroundColor: "darkslateblue", padding: "5px" }}>
      <ul>
        {
          allTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </div>
  );
}
