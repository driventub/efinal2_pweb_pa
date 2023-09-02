<template>
    <div class="container">
        <h1>TOKEN</h1>
        <div>
            <label for="">Semilla</label>
            <input v-bind="semilla" type="text">
            <label for="">Tiempo de Vigencia</label>
            <input v-bind="tiempo" type="text">
            <label for="">Token</label>
            <input type="text" disabled>
            <button type="button" class="btn btn-primary" @click="generarToken">Generar</button>
        </div>
    </div>
</template>

<script>

import { obtenerTokenFachada } from "../helpers/authApi";

    export default {
        data() {
            return {
                semilla: null,
                tiempo: null,
            }
        },
        methods: {
            async generarToken(){
                const data = {
                    "username" : "John Doe",
                    "password" : "123",
                    "semilla" : this.semilla,
                    "tiempoExpiracion": this.tiempo
                }

                return await obtenerTokenFachada(data)
            }
        },
    }
</script>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>