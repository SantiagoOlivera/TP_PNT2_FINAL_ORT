<template lang="html">

  <section class="src-components-jugadores">
    <h1>Jugadores</h1>
    <div class="col-12 ">
      <button class="btn btn-success float-right" @click="sortearGanadores()" :disabled="data.length < CANT_GANADORES">Sortear ganadores</button>
    </div>
    <br>
    <br>
    <table v-if="data" class="table">
      <thead>
        <tr class="tableFixedHeader">
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">DNI</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in data" :key=index>
            <td>{{item.id}}</td>
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.email}}</td>
            <td>{{item.dni}}</td>
          </tr>
      </tbody>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-jugadores',
    props: [],
    mounted () {
      this.getJugadores();
    },
    data () {
      return {
        data: [],
        API_URL_JUGADORES: "https://6366f216f5f549f052ce96e7.mockapi.io/TP_PNT2_ORT/jugadores",
        API_URL_GANADORES: "https://6366f216f5f549f052ce96e7.mockapi.io/TP_PNT2_ORT/ganadores",
        CANT_GANADORES: 3, 
        ganadores: [],
      }
    },
    methods: {
      sortearGanadores(){
        var ganadores = [];
        var j = null;
        var idx = null;
        for(var i=0; i<this.CANT_GANADORES; i++){
          idx = this.random(0, this.data.length);
          j = this.data[idx];

          var yaGano = ganadores.find((e)=>{e.id === j.id});
          //si ya fue elegido como ganador volvemos a sortear
          while(yaGano){
            idx = this.random(0, this.data.length);
            yaGano = ganadores.find((e)=>{e.id === j.id});
          }

          ganadores.push(j);
        }

        this.ganadores = ganadores;

        this.guardarGanadores();

      },
      random(min, max){
        return min + ( Math.floor(Math.random() * (max - min + 1)) );
      },
      getJugadores(){
        this.axios(this.API_URL_JUGADORES)
          .then(res => { this.data = res.data})
          .catch(error => console.log(error));
      },
      guardarGanadores(){
        this.axios.post(this.API_URL_GANADORES, {
          id: null,
          jugadores: this.ganadores
        }).then(res => { console.log(res) })
          .catch(error => console.log(error)); 
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .src-components-jugadores {

  }
  .tableFixedHeader{
    position: sticky; 
    top: 0; 
    z-index: 1; 
    background:white; 
    outline: 2px solid rgba(128, 128, 128, 0.356);
  }
</style>
