import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import "./src/database/dbConnection";
import recetasRouter from "./src/routes/recetas.routes";
import usuariosRouter from "./src/routes/usuarios.routes";

const app = express();

// Puerto

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// Middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));

// Rutas
app.use("/api-recetas", recetasRouter);
app.use("/api-recetas/auth", usuariosRouter);
