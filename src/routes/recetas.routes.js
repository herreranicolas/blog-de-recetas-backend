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
          "El nombre de la receta debe tener entre 3 y 50 caracteres como máximo."
        ),
      check("descripcion")
        .notEmpty()
        .withMessage("La descripcion de la receta es obligatoria")
        .isLength({ min: 3, max: 200 })
        .withMessage(
          "La descripcion de la receta debe tener entre 3 y 200 caracteres como máximo."
        ),
      check("ingredientes")
        .notEmpty()
        .withMessage("Los ingredientes de la receta son obligatorios."),
      check("pasos")
        .notEmpty()
        .withMessage("Los pasos de la receta son obligatorios."),
      check("imagen")
        .notEmpty()
        .withMessage("La direccion URL de la imagen es obligatoria")
        .matches(/^https?:\/\/\S+\.(jpg|jpeg|png|gif)$/i)
        .withMessage("La direccion de la imagen ingresada no es válida."),
    ],
    crearReceta
  );

router
  .route("/recetas/:id")
  .get(obtenerRecetaPorId)
  .delete(borrarReceta)
  .put(editarReceta);

export default router;
