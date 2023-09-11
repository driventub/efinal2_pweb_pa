import axios from "axios";

export const insertarEstudianteFachada = async (body, token) => {
  await insertarEstudiante(body, token);
};

export const buscarEstudianteFachada = async (cedula, token) => {
  return await buscarEstudiante(cedula, token);
};

const obtenerToken = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

const buscarEstudiante = async (cedula, token) => {
  await axios
    .post(
      `http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${cedula}`,
      obtenerToken(token)
    )
    .then((r) => r.data);
};
const insertarEstudiante = async (body, token) => {
  console.log(obtenerToken(token));

  await axios
    .post(
      `http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,
      body,
      obtenerToken(token)
    )
    .then((r) => r.data);
};
