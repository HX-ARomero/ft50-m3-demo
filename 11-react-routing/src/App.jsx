import "./App.css";
import About from "./views/About";
import Detail from "./views/Detail";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {/* NO mostramos "Navbar" en "/" ni en "/404": */}
      {pathname !== "/" && pathname !== "/404" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* Establecemos "path" para "ErrorPage": */}
        <Route path="/404" element={<ErrorPage />} />
        {/* Redirigimos cualquier "path" no definido a "/404": */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
