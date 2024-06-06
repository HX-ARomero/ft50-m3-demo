import { useEffect, useState } from "react";
import FunctionDisplay from "./FunctionDisplay";

export default function FuncionCounter() {
  const [contador, setCounter] = useState(0);
  const [user, setUser] = useState("");

  //* Component Did Update
  useEffect(() => {
    console.log("FunctionCounter se actualizó");
  }, [contador]);

  useEffect(() => {}, [user]);

  const sumaUno = () => {
    setCounter(contador + 1);
  };

  return (
    <div>
      <h2>Contador de Función</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={sumaUno}>Suma 1</button>
      {contador > 2 && contador < 5 ? <FunctionDisplay /> : null}
    </div>
  );
}
