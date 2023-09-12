<template>
  <div>
    <h1>Estudiante</h1>
    <div class="mb-3">
      <label class="form-label" for="">Token</label>
      <div class="form-floating">
        <textarea
          class="form-control"
          v-model="token"
          placeholder="algo"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Nombre</label>
      <input class="form-control" v-model="nombre" type="text" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Apellido</label>
      <input class="form-control" v-model="apellido" type="text" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Cedula</label>
      <input class="form-control" v-model="cedula" type="text" required />
    </div>

    <button type="button" class="btn btn-primary" @click="insertarEstudiante">
      Enviar
    </button>
  </div>
</template>

<script>
import { buscarEstudianteFachada, insertarEstudianteFachada } from "../helpers/estudianteApi";

export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
  methods: {
    async insertarEstudiante() {
      const datos = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      await insertarEstudianteFachada(datos, this.token);

      const ide = await buscarEstudianteFachada(this.cedula, this.token)

      console.log(ide);
      const enviar = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        id: ide
      }
      this.$emit("estudianteInsertado", enviar);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
