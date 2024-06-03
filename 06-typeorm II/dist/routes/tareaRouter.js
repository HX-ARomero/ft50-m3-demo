"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//* CRUD DE TODOS
const express_1 = require("express");
const autenticacion_1 = __importDefault(require("../middlewares/autenticacion"));
const tareaRouter = (0, express_1.Router)();
const tareas = [
    {
        id: 1,
        actividad: "Repasar Express",
        prioridad: 8,
    },
    {
        id: 2,
        actividad: "Estudiar TypeScript",
        prioridad: 10,
    },
];
let tareaId = 10;
tareaRouter.post("/", (req, res) => {
    const { actividad, prioridad } = req.body;
    if (!actividad || !prioridad) {
        res.status(400).json({ message: "Faltan datos" });
        return;
    }
    const nuevaTarea = {
        id: tareaId++,
        actividad,
        prioridad,
    };
    tareas.push(nuevaTarea);
    res.status(200).json(tareas);
});
tareaRouter.get("/", autenticacion_1.default, (req, res) => {
    res.json(tareas);
});
tareaRouter.put("/:id", (req, res) => {
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
    if (actividad)
        tareaEncontrada.actividad = actividad;
    if (prioridad)
        tareaEncontrada.prioridad = prioridad;
    res.json(tareaEncontrada);
});
tareaRouter.delete("/:id", (req, res) => {
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
});
exports.default = tareaRouter;
