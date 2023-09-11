import axios from "axios";

export const obtenerTokenFachada = async (body) => {
  return await obtenerToken(body);
};

const obtenerToken = async (body) => {
  console.log(body);
  const response = await axios.post(
    "http://localhost:8081/API/v1.0/Autorizacion/tokens/obtener",
    body
  );
    console.log("===> "+ response);
  return response;
};
