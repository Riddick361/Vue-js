let app = new Vue({
    el:'#app',
    data:{
        bienvenida:"Bienvenido a Vue 2 !!!",
        carta:{
            imagen:"https://http2.mlstatic.com/D_Q_NP_2X_706423-MLM45758813910_042021-R.jpg",
            titulo:"Patito de hule con bebés",
            descripcion:"Hermosos patitos de hule para niños con sonido de cua cua cua",
            boton:"Ver precio",
            precio:2990.00
        },
        precioIva:0,
        nombre:"",
        numero:290
    },
    methods:{
        mostrarPrecio(){
            alert(`Este hermoso ${this.carta.titulo} sale $ ${this.carta.precio}`);
        },
        calcularIva(){
            this.precioIva = this.carta.precio * 1.21;
            return this.precioIva;
        },
        mostrarNombre2(){
            console.log("llamando a mostrar nombre 2");
            return this.nombre.toUpperCase();
        },
        cambiarNumero(){
            this.numero = this.numero + 10;
        },
        sumar() {
            this.numero++
        },
        restar() {
            this.numero--
        },
    }})