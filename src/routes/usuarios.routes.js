import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarioPorId,
  obtenerUsuarios,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route("/").get(obtenerUsuarios);
router.route("/usuario/:id").get(obtenerUsuarioPorId);
router.route("/nuevo-usuario").post(validarUsuario, crearUsuario);

export default router;
