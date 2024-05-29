import { Request, Response } from "express";
import { tareas } from "../utils/tareas";
import ITarea from "../interfaces/ITarea";

let tareaId: number = 10;

export default (req: Request<{}, {}, ITarea>, res: Response): void => {
  const { actividad, prioridad } = req.body;
  if (!actividad || !prioridad) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }

  const nuevaTarea: ITarea = {
    id: tareaId++,
    actividad,
    prioridad,
  };

  tareas.push(nuevaTarea);
  res.status(200).json(tareas);
}

