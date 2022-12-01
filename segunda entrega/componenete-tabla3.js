Vue.component('componente-tabla3',{
    props:{
        nombre:String,
        apellido:String,               
        direccion:String,
        estilo:String,
    },
    template:`<tr :class="estilo">
                <td>{{nombre}}</td>
                <td>{{apellido}}</td>
                <td>{{direccion}}</td>
             </tr>`
})