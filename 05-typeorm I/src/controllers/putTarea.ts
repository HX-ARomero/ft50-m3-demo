import { Request, Response } from "express";
import ITarea from "../interfaces/ITarea";
import { tareas } from "../utils/tareas";

export default (req: Request<{ id: string }, {}, Partial<ITarea>>, res: Response): void => {
  const { id } = req.params;
  const { actividad, prioridad } = req.body;

  if (!actividad && !prioridad) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }

  const tareaEncontrada = tareas.find((tarea) => tarea.id === Number(id));
  //* find( ) => Retorna: { Tarea } || undefined
  if (!tareaEncontrada) {
    res.status(400).json({ message: `No existe tarea con id ${id}` });
    return;
  }

  if (actividad) tareaEncontrada.actividad = actividad;
  if (prioridad) tareaEncontrada.prioridad = prioridad;

  res.json(tareaEncontrada);
}