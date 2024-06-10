import "./App.css";
import About from "./views/About";
import Detail from "./views/Detail";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Home />
      <About />
      <Detail />
      <ErrorPage />
    </>
  );
}

export default App;
