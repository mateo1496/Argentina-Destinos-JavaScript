class Promociones{
    constructor(id,nombre,detalle,precio,planFamiliar,texto,img,cantidad){
        this.id= id;
        this.nombre= nombre;
        this.detalle= detalle;
        this.precio= precio;
        this.planFamiliar= planFamiliar;
        this.texto= texto;
        this.img= img;
        this.cantidad= cantidad;
    }
    sumarCantidad(){
        this.cantidad++;
    }
    subTotal(){
        return this.precio * this.cantidad;                
    }
    fechaCompra(){
        let fechaReserva= DateTime.now();
        this.fechaReserva =fechaReserva.toLocaleString(DateTime.DATE_HUGE);
    }
    agregarCantidad(valor){
        this.cantidad += valor;
    }
}

ofertas.push(new Promociones(1,"Calafate","Combo por 2 excursiones| 10 días | Estadía en hotel de cuatro estrellas | Descuentos en vuelos del 25%",26000,80000,"*El plan familiar es solo para cuatro personas","../assets/Imagenes/calafateIndex.jpg",1));
ofertas.push(new Promociones(2,"Purmamarca","Descuentos en 4 excursiones del 20%| 10 días | Descuentos en vuelos del 20%",15000,50000,"*El plan familiar es solo para cuatro personas","../assets/Imagenes/purmamarcaofertas2.jpg",1));
ofertas.push(new Promociones(3,"Mar del Plata","Beneficios en hospedaje | 14 días | Descuentos en vuelos del 15%",20000,60000,"*El plan familiar es solo para cuatro personas","../assets/Imagenes/mardelplataofertas (2).jpg",1));


