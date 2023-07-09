import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerRecetaPorId,
  obtenerRecetas,
} from "../controllers/recetas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/recetas")
  .get(obtenerRecetas)
  .post(
    [
      check("nombre")
        .notEmpty()
        .withMessage("El nombre de la receta es obligatorio")
        .isLength({ min: 3, max: 50 })
        .withMessage(
          "El nombre de la receta debe tener entre 3 y 50 caracteres como máximo"
        ),
    ],
    crearReceta
  );

router
  .route("/recetas/:id")
  .get(obtenerRecetaPorId)
  .delete(borrarReceta)
  .put(editarReceta);

export default router;
