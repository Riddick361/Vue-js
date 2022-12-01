Vue.component('componente-tabla1',{
    props:{
        nombre:String,
        usuario:String,
        email:String,
        estilo:String,
    },
    template:`
    <tr :class="estilo">
        <td>{{nombre}}</td>
        <td>{{usuario}}</td>
        <td>{{email}}</td>
    </tr>
    `
})