import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators: {
        /* 'max-length-nombre': function(value){
            return value.toString().length < 15
        } */
        'is-numerico': function(numero){
            var rta = false;
            console.log(!isNaN(numero));
            if(!isNaN(numero)){
                rta = true;
            }
            return rta;
        }
        
    }
}

Vue.use(VueForm, options);

