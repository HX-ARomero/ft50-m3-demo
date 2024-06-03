import express from "express";
import morgan from "morgan";
import tareaRouter from "./routes/tareaRouter";
import gamesRouter from "./routes/gamesRouter";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/tareas", tareaRouter);
app.use("/games", gamesRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hola Mundo!!!");
});

export default app;
