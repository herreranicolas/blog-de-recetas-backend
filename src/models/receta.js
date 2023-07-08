import { Schema, model } from "mongoose";

const recetaSchema = new Schema({
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  ingredientes: {
    type: [String],
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  pasos: {
    type: [String],
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const Receta = model("receta", recetaSchema);

export default Receta;
