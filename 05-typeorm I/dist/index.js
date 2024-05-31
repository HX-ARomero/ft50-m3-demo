"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const morgan_1 = __importDefault(require("morgan"));
const tareaRouter_1 = __importDefault(require("./routes/tareaRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/tareas", tareaRouter_1.default);
app.get("/", (req, res) => {
    console.log(req);
    res.send("Hola Mundo!!!");
});
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
