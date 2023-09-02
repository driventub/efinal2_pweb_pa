<template>
    <div>
        <!-- tiene que ir una tabla aqui traerse de Insertar el dato -->
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