import axios from "axios";

export const insertarEstudianteFachada = async (body) => {
  await insertarEstudiante(body);
};

export const buscarEstudianteFachada = async (cedula) => {
  return await buscarEstudiante(cedula);
};
const buscarEstudiante = async (cedula) => {
  await axios
    .post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${cedula}`)
    .then((r) => r.data);
};
const insertarEstudiante = async (body) => {
  await axios
    .post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, body)
    .then((r) => r.data);
};
