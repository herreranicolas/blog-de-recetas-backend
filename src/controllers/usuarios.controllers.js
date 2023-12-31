import Usuario from "../models/usuario";
import bcrypt from "bcrypt";

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar usuarios.",
    });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar usuario.",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    let mailEsExistente = await Usuario.findOne({ email: req.body.email });
    if (mailEsExistente) {
      return res.status(400).json({
        mensaje: "Ya existe un usuario registrado con el mail ingresado.",
      });
    }
    const usuarioNuevo = new Usuario(req.body);
    const salt = bcrypt.genSaltSync(10);
    usuarioNuevo.password = bcrypt.hashSync(req.body.password, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fue creado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear usuario.",
    });
  }
};

export const login = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ email: req.body.email });
    if (!usuario) {
      return res.status(404).json({
        mensaje: "Correo o contraseña invalida.",
      });
    }
    let passwordValido = bcrypt.compareSync(
      req.body.password,
      usuario.password
    );
    if (!passwordValido) {
      return res.status(400).json({ mensaje: "Correo o contraseña invalida." });
    }
    res.status(200).json({
      mensaje: "El usuario es correcto.",
      nombreUsuario: usuario.nombreUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al iniciar sesión.",
    });
  }
};
