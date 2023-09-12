<template>
  <!-- <BuscarEstudiante/> -->

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center"></h1>
            <InsertarEstudiante @estudianteInsertado="actualizarTabla"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center"></h1>
            <BuscarEstudiante :estudiantes="lista"/>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import BuscarEstudiante from "../components/BuscarEstudiante.vue";
import InsertarEstudiante from "../components/InsertarEstudiante.vue";
export default {
  components: {
    BuscarEstudiante,
    InsertarEstudiante,
  },

  data() {
    return {
      lista : []
    }
  },
  methods: {
    actualizarTabla(estudiante){
      this.lista.push(estudiante)
    }
  },
};
</script>

<style scoped></style>
