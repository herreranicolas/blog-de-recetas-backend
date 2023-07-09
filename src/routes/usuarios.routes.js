import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarioPorId,
  obtenerUsuarios,
} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/").get(obtenerUsuarios);
router.route("/usuario/:id").get(obtenerUsuarioPorId);
router.route("/nuevo-usuario").post(crearUsuario);

export default router;
