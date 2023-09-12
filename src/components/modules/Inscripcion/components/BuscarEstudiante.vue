<template>
  <div>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cedula</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="estudiante.id">
              <th scope="row"> {{ estudiante.id }} </th>
              <td>{{ estudiante.nombre }}</td>
              <td>{{ estudiante.apellido }}</td>
              <td>{{ estudiante.cedula }}</td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>


export default {
  props: {
    estudiantes: Array,
  },

 
  
};
</script>

<style scoped></style>
