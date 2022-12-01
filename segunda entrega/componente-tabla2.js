Vue.component('componente-tabla2',{
    props:{
        apellido:String,        
        materia:String,
        nota:Number,
        estilo:String,
    },
    template:`<tr :class="estilo">
                <td>{{apellido}}</td>
                <td>{{materia}}</td>
                <td>{{nota}}</td>
             </tr>`
})