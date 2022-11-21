<template>

  <section class="src-components-ganadores">
    
    <h1>Ganadores</h1>    
    <label for="">Seleccionar Id sorteo</label>
    <div class="input-group mb-3 p-2 w-50 m-auto">
      <!-- <input type="text" class="form-control" placeholder="ID Sorteo" v-model="idSorteo"> -->
      <select name="" id="" class="form-control" v-model="idSorteo">
        <option v-for="(item, index) in sorteos" :key="index">{{item.id}}</option>
      </select>
      <div class="input-group-append">
        <button class="btn btn-success" type="button" @click="getGanadores()">Ver sorteo</button>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="(item, index) in data" :key="index">
          <div class="card">
            <img class="card-img-top" src="item.img" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ (index+1) + ' - ' + item.nombre + ' ' + item.apellido }}</h5>
              <p class="card-text">DNI: {{ item.dni }}</p>
              <a href="#" class="btn btn-primary">Ver jugador</a>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <br>
      <br>
    {{ data }}
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-ganadores',
    props: [],
    mounted () {
      this.getSorteos();
    },
    data () {
      return {
        sorteos: null,
        idSorteo: null,
        data: null,
        API_URL_GANADORES: "https://6366f216f5f549f052ce96e7.mockapi.io/TP_PNT2_ORT/ganadores", 
      }
    },
    methods: {
      getSorteos(){
        this.axios(this.API_URL_GANADORES)
          .then(res => { this.sorteos = res.data; })
          .catch(error => console.log(error));
      },
      getGanadores(){
        this.axios(this.API_URL_GANADORES + `/${this.idSorteo}`)
          .then(res => { this.data = res.data.jugadores; })
          .catch(error => console.log(error));
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .src-components-ganadores {

  }
</style>

