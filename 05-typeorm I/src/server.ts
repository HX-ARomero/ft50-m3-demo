import express from "express";
import morgan from "morgan";
import tareaRouter from "./routes/tareaRouter";
import videogameRouter from "./routes/videogameRouter";
import platformRouter from "./routes/platformRouter";
import genreRouter from "./routes/genreRouter";
import characterRouter from "./routes/characterRouter";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/tareas", tareaRouter);
app.use("/videogames", videogameRouter);
app.use("/platforms", platformRouter);
app.use("/genres", genreRouter);
app.use("/characters", characterRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hola Mundo!!!");
});

export default app;
