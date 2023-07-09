import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  obtenerRecetaPorId,
  obtenerRecetas,
} from "../controllers/recetas.controllers";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(crearReceta);

router.route("/recetas/:id").get(obtenerRecetaPorId).delete(borrarReceta);

export default router;
