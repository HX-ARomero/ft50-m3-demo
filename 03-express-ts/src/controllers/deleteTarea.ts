import { Request, Response } from "express";
import { tareas } from "../utils/tareas";

export default (req: Request<{ id: string }, {}, {}>, res: Response): void => {
  const { id } = req.params;

  const index = tareas.findIndex((tarea) => tarea.id === Number(id));
  //* findIndex = índice || -1
  if (index === -1) {
    res.status(404).json({ message: `No existe tarea con id ${id}` });
    return;
  }

  tareas.splice(index, 1);
  //* [ 0, 1, 2, 3, 4 ]
  //*         ^2
  res.json({ message: `Elemento con id ${id}, eliminado` });
};
