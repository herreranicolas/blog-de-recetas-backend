import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerRecetaPorId,
  obtenerRecetas,
} from "../controllers/recetas.controllers";
import validarReceta from "../helpers/validacionReceta";

const router = Router();

router.route("/recetas").get(obtenerRecetas).post(validarReceta, crearReceta);

router
  .route("/recetas/:id")
  .get(obtenerRecetaPorId)
  .delete(borrarReceta)
  .put(validarReceta, editarReceta);

export default router;
