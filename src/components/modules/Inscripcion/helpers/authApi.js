import axios from "axios";

export const obtenerTokenFachada = async(body) =>{
    return await obtenerToken(body)
}

 const obtenerToken = async(body) =>{
    return await axios.get("http://localhost:8081/API/v1.0/Autorizacion/tokens/obtener",body).then(r=> r.data)
}

