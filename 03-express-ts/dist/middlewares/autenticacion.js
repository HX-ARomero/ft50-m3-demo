"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autenticacion = (req, res, next) => {
    const token = req.headers["token"];
    if (!token) {
        res.status(400).json({ message: "Se necesita token" });
        return;
    }
    if (token !== "TokenValido") {
        res.status(400).json({ message: "Token inválido" });
        return;
    }
    next();
};
exports.default = autenticacion;
