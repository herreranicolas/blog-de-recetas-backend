import Receta from "../models/receta";

export const obtenerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener recetas.",
    });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();
    res.status(201).json({
      mensaje: "La receta fue creada exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear receta.",
    });
  }
};
