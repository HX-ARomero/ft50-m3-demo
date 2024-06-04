import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const isRegistered = false;

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h1>Primera aplicación en React</h1>

      <h2>Con operador lógico &&</h2>
      {isRegistered && <Login />}
      {!isRegistered && <Register />}

      <h2>Con operador ternario ?</h2>
      {isRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
