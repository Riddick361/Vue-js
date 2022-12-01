const app = new Vue({
    el: '#app',
    data:{
        texto:"mis tablas con componentes",
        tabla:[
            {
                nombre:"Ricardo",
                apellido:"Bernio",
                usuario:"@RBernio",
                materia:"Biologia",
                nota:8,
                email:"Ricardo@gmail.com",
                direccion:"Estanislao 345",
            },
            {
                nombre:"Juan",
                apellido:"Newby",
                usuario:"@JNewby",
                materia:"Matematica",
                nota:7,
                email:"Juan@hotmmail.com",
                direccion:"Lanz 234",
            },
            {
                nombre:"Leonel",
                apellido:"Messi",
                usuario:"@LMessi",
                materia:"Historia",
                nota:8,
                email:"Leonel@gmail.com",
                direccion:"Mitre 1234",
            }
        ],
        estilo1:"text-primary",
        estilo2:"text-warning",
        estilo3:"text-success",    
    }

})