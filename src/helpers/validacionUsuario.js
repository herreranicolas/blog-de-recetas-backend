import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "El nombre del usuario debe tener entre 3 y 50 caracteres como máximo."
    ),
  check("email")
    .notEmpty()
    .withMessage("El email del usuario es obligatorio.")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
    .withMessage("El email debe tener el siguiente formato mail@dominio.com"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña del usuario es obligatoria.")
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage(
      "La contraseña debe contener entre 8 y 16 caracteres, al menos un digito, al menos una minúscula y al menos una mayúscula. No puede tener otros simbolos."
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarUsuario;
