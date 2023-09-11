<template>
    <div >
        <h1>TOKEN</h1>
        <div>

            <div class="mb-3">
                <label class="form-label" for="">Semilla</label>
                <input class="form-control" v-model="semilla" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label" for="">Tiempo de Vigencia</label>
                <input class="form-control" v-model="tiempo" type="number">
            </div>

            <div class="mb-3">
                <label class="form-label" for="">Token</label>
                <div class="form-floating">
                    <textarea class="form-control" v-model="token" placeholder="algo" id="floatingTextarea2" style="height: 100px" readonly></textarea>
                </div>
            </div>

            
            
           
           
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
                token: null,
            }
        },
        methods: {
            async generarToken(){
                const data = {
                    username : "user",
                    password : "12345",
                    semilla : this.semilla,
                    tiempoExpiracion: this.tiempo
                }

                const res = await obtenerTokenFachada(data)
                this.token = res.data
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