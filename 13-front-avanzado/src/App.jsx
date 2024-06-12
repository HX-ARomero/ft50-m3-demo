import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

//* import Characters from "./components/Characters";
const Characters = React.lazy(() => import("./components/Characters"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Frontend Avanzado</h1>
      <Navbar />
      <hr />
      <Suspense fallback={<p>Cargando...</p>}>
        <Characters />
      </Suspense>
    </>
  );
}

export default App;
