class Destinos{
    constructor(id,nombre,precio,detalle,img){
        this.id= parseInt(id);
        this.nombre= nombre.toUpperCase();
        this.precio= parseInt (precio);
        this.detalle= detalle;
        this.img= img;
        this.cantidad= 1;
    }
    nuevaCantidad(){
        this.cantidad++;
    }
    subTotal(){
        return this.precio * this.cantidad;
    }
    masCantidad(numero){
        this.cantidad += numero;
    }
    fechaDeReserva(){
        let fechaElegida= DateTime.now();
        this.fechaElegida= fechaElegida.toLocaleString(DateTime.DATE_HUGE);
    }
}