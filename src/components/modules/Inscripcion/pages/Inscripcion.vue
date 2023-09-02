<template>
    <div>
        <BuscarEstudiante/>
        <InsertarEstudiante/>
    </div>
</template>

<script>
import BuscarEstudiante from '../components/BuscarEstudiante.vue'
import InsertarEstudiante from '../components/InsertarEstudiante.vue'
    export default {
        components:{
            BuscarEstudiante, InsertarEstudiante
        }
    }
</script>

<style scoped>

</style>