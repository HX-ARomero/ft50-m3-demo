//* CRUD DE TODOS
import { Request, Response, Router } from "express";
import autenticacion from "../middlewares/autenticacion";
import postTarea from "../controllers/postTarea";
import getTareas from "../controllers/getTareas";
import putTarea from "../controllers/putTarea";
import deleteTarea from "../controllers/deleteTarea";

const tareaRouter = Router();

tareaRouter.post("/", postTarea);

tareaRouter.get("/", autenticacion, getTareas);

tareaRouter.put("/:id", putTarea);

tareaRouter.delete("/:id", deleteTarea);

export default tareaRouter;
