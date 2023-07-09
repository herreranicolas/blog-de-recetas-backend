import { Router } from "express";
import {
  crearReceta,
  obtenerRecetaPorId,
  obtenerRecetas,
} from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(crearReceta);

router.route("/recetas/:id").get(obtenerRecetaPorId);

export default router;
