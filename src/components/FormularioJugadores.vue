<template lang="html">

  <section class="src-components-formulario-jugadores">
    <h1>Formulario Jugadores</h1>
     <h2>Ingrese sus datos para participar</h2>
            <br>
      <div class="container">

        <vue-form :state="formstate" @submit.prevent="enviar()" class="row" >
          
           <validate tag="label" class="col-lg-12 text-left">
              <span>Nombre*</span>
              <input 
                autocomplete="off" 
                type="text"
                class="form-control" 
                v-model.trim="formData.nombre" 
                name="nombre"
                required
                :minlength="MIN_NOMBRE_LENGTH"
                :maxlength="MAX_NOMBRE_LENGTH"
              />
      
            <field-messages name="nombre" show="$dirty">
              <div class="text-success" >Success!</div>
              <div slot="required" class="text-danger"  >(*) Nombre es un campo requerido</div>
              <div slot="minlength" class="text-danger" >(*) Nombre debe tener al menos {{MIN_NOMBRE_LENGTH}} caracteres</div>
            </field-messages>
             <!-- <p>Cant. disponibles: {{ MAX_NOMBRE_LENGTH - formData.nombre.length}}</p> -->
          </validate>


          <validate tag="label" class="col-lg-12 text-left">
              <span>Apellido*</span>
              <input 
                autocomplete="off" 
                type="text"
                class="form-control" 
                v-model.trim="formData.apellido" 
                name="apellido"
                required
                :minlength="MIN_APELLIDO_LENGTH"
                :maxlength="MAX_APELLIDO_LENGTH"
              />
      
            <field-messages name="apellido" show="$dirty">
              <div class="text-success" >Success!</div>
              <div slot="required" class="text-danger"  >(*) Apellido es un campo requerido</div>
              <div slot="minlength" class="text-danger" >(*) Apellido debe tener al menos {{MIN_APELLIDO_LENGTH}} caracteres</div>
            </field-messages>
             <!-- <p>Cant. disponibles: {{ MAX_apellido_LENGTH - formData.nombre.length}}</p> -->
          </validate>

          <validate tag="label" class="col-lg-12 text-left">

              <span>Email*</span>
              <input 
                autocomplete="off" 
                type="email"
                class="form-control" 
                v-model.trim="formData.email" 
                name="email"
                required
              />
      
            <field-messages name="email" show="$dirty">
              <div class="text-success">Success!</div>
              <div slot="required" class="text-danger">(*) Email es un campo requerido</div>
              <div slot="email" class="text-danger">(*) Email invalido </div>
            </field-messages>

          </validate>

          <validate tag="label" class="col-lg-12 text-left">

              <span>DNI*</span>
              <input 
                type="text"
                autocomplete="off" 
                class="form-control" 
                v-model.trim="formData.dni" 
                name="dni"
                required
                :minlength="MIN_DNI_LENGTH"
                :maxlength="MAX_DNI_LENGTH"
                :is-numerico="formData.dni"
              />
      
            <field-messages name="dni" show="$dirty">
              <div class="text-success" >Success!</div>
              <div slot="required" class="text-danger"  >(*) DNI es un campo requerido</div>
              <div slot="minlength" class="text-danger">(*) DNI no puede se inferior a {{MIN_DNI_LENGTH}} caracteres</div>
              <div slot="is-numerico" class="text-danger">(*) El valor debe ser numerico</div>
            </field-messages>

          </validate>

          <div class="col-lg-12">
            <button type="submit" class="btn btn-success float-right" :disabled="formstate.$invalid">Agregar jugador</button>
          </div>

        </vue-form>

<!-- 
          <form action="/api/partipantes" method="post" autocomplete="off">
                <div class="form-group text-left">
                    <label for="nombre ">Nombre</label>
                    <input type="text" id="nombre" name="nombre" class="form-control" required>
                </div>

                <div class="form-group text-left">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" class="form-control" required>
                </div>

                <div class="form-group text-left">
                    <label for="domicilio">Domicilio</label>
                    <input type="text" id="domicilio" name="domicilio" class="form-control" required>
                </div>

                <div class="form-group text-left">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" class="form-control" required>
                </div>

                <button class="btn btn-success mt-3 float-right">Enviar</button>
            </form> -->
      </div>
            
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario-jugadores',
    props: [],
    mounted () {

    },
    data () {
      return {
        API_URL_JUGADORES: "https://6366f216f5f549f052ce96e7.mockapi.io/TP_PNT2_ORT/jugadores",
        MIN_NOMBRE_LENGTH: 5,
        MAX_NOMBRE_LENGTH: 15,
        MIN_APELLIDO_LENGTH: 5,
        MAX_APELLIDO_LENGTH: 15,
        MIN_DNI_LENGTH: 8,
        MAX_DNI_LENGTH: 9,
        formstate: {},
        formData: {
          nombre: null,
          apellido: null,
          email: null,
          dni: null
        }
      }
    },
    methods: {
      enviar(){
        console.log("Enviar");
        console.log("Enviar", {...this.formData} );
        var data = {...this.formData};
        this.guardarDatosJugador(data);
        this.formstate._reset();
      },
      guardarDatosJugador(data){
        this.axios.post(this.API_URL_JUGADORES, data)
        .then(res => { console.log(res) })
            .catch(error => console.log(error)); 
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario-jugadores {

  }
</style>
