<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>
                        <label for="">ID</label>
                        <label for="">Nombre</label>
                        <label for="">Apellido</label>
                        <label for="">Cedula</label>
                    </td>
                </tr>
            </thead>
            <tbody>
                <!-- usar algo del pop push, algo asi para poner nuevos datos en una lista de vue, ver la documentacion -->
            </tbody>
        </table>
    </div>
</template>

<script>
import { buscarEstudianteFachada } from "../helpers/estudianteApi";
    
    export default {
        data() {
            return {
                id: null,
                nombre: null,
                apellido: null,
                cedula: null,
            }
        },    
        methods: {
            async buscarID(){
                // tiene que llegar del Insertar la cedula
                return await buscarEstudianteFachada(cedula)
            }
        },
    }
</script>

<style scoped>

</style>