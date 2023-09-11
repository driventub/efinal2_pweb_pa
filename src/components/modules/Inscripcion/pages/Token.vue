<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title text-center"></h1>
                <GenerarToken/>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import GenerarToken from '../components/GenerarToken.vue'
    export default {
        components:{
            GenerarToken
        }
    }
</script>

<style scoped>

</style>