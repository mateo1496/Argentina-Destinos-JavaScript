//FUNCION PARA MAQUETAR EL ARRAY
function destinosCosta(costas){
    viajesCosta.innerHTML="";
    for (const costa of costas) {
        let destinosParaViajar= document.createElement("div");
        //AGREGO LA CLASE COLUMNA
        destinosParaViajar.classList.add("col");
        destinosParaViajar.innerHTML=`<div class="card"  style="width: 18rem; margin-bottom: 20px;">
                                            <img src="${costa.img}"  class="card-img-top " alt="...">
                                            <div class="card-body bg-primary">
                                                <h5 class="card-title">${costa.nombre}</h5>
                                                <p class="card-text">${costa.detalle}</p>
                                                <p class="card-text">$ ${costa.precio}</p>
                                                <button id="${costa.id}" class="btn botonOfertaCosta btn-primary btn btn-dark text-uppercase">COMPRAR</button><hr>
                                                </div>
                                      </div>`;
        viajesCosta.append(destinosParaViajar);
    }
    botonCosta();
}

//FUNCTION BOTON 
function botonCosta() {
    let viajes= document.getElementsByClassName("botonOfertaCosta");
    for (const viaje of viajes) {
        viaje.addEventListener("click", function () {
            let seleccionar= reservas.find(costa => costa.id == this.id);
            if(seleccionar) {
                seleccionar.nuevaCantidad();
            }else{
                seleccionar= costas.find(costa => costa.id == this.id);
                reservas.push(seleccionar);
            }
            localStorage.setItem("Reservas", JSON.stringify(reservas));
            //LLAMO LA FUNCION PARA GENERAR LA INTERFAZ
            comprarDestinos(reservas);
        })
    }
}

function totalCosta() {
    let totalCompra= reservas.reduce((compraTotal, actual) => compraTotal += actual.subTotal(),0);
    totalCostaInterFaz.innerHTML="Total: $ "+ totalCompra;
    return totalCompra;
}



function comprarDestinos(listado) {
    //AUMENTA LA CANTIDAD DE DESTINOS RESERVADOS
    carritoCosta.innerHTML= listado.length;
    // VACIAR LAS RESERVAS REALIZADAS
    pasajesReservados.innerHTML="";
    for (const destino of listado) {
        let destinosParaElegir= document.createElement("div");
        destinosParaElegir.innerHTML=`<table class="table table-primary ">
                                         <thead>
                                            <tr>
                                               <th scope="col">Precio ${destino.precio}</th>
                                               <th scope="col">${destino.cantidad}</th>
                                               <th scope="col">$ ${destino.subTotal()}</th>
                                            </tr>
                                         </thead>
                                      </table>
                                      <a id="${destino.id}" class="btn btn-info btn-primary btn-sumar">+</a>
                                      <a id="${destino.id}" class="btn btn-info btn-primary btn-restar">-</a>
                                      <a id="${destino.id}" class="btn btn-info btn-primary btn-quitar">Quitar</a>`;
        pasajesReservados.append(destinosParaElegir);
    }
    document.querySelectorAll(".btn-quitar").forEach(boton => boton.onclick = eliminarReserva);
    document.querySelectorAll(".btn-restar").forEach(boton => boton.onclick = restarReserva);
    document.querySelectorAll(".btn-sumar").forEach(boton => boton.onclick = sumarReserva);
    totalCosta();
}

//FUNCION PARA ELIMINAR VIAJE
function eliminarReserva(e) {
    //OBTENGO LA POSICION DEL ELEMENTO A ELIMINAR
    let ubicacion= reservas.findIndex(lugar => lugar.id == e.target.id);
    //AL OBTENER LA POSICION ELIMINO EL ELEMENTO
    reservas.splice(ubicacion,1);
    //PARTE VISUAL
    comprarDestinos(reservas);
    localStorage.setItem("Reservas",JSON.stringify(reservas));
}

//FUNCION PARA SUMAR VIAJE
function sumarReserva() {
    //BUSCAR PRODUCTO PARA AGREGAR
    let recorrido= reservas.find(viajar => viajar.id == this.id);
    //CADA CUANTA CANTIDAD AGREGO
    recorrido.masCantidad(1);
    //PARTE VISUAL
    this.parentNode.children[1].innerHTML="Cantidad: "+recorrido.cantidad;
    this.parentNode.children[2].innerHTML="Sub total: "+recorrido.subTotal();
    totalCosta();
    localStorage.setItem("Reservas", JSON.stringify(reservas));
}

//FUNCION PARA RESTAR VIAJE
function restarReserva() {
     //BUSCAR PRODUCTO PARA RESTAR
     let recorrido= reservas.find(viajar => viajar.id == this.id);
     if(recorrido.cantidad > 1){
         //CADA CUANTA CANTIDAD QUITO
         recorrido.masCantidad(-1);
         //PARTE VISUAL
         this.parentNode.children[1].innerHTML="Cantidad: "+recorrido.cantidad;
         this.parentNode.children[2].innerHTML="Sub total: $ "+recorrido.subTotal();
         totalCosta();
         localStorage.setItem("Reservas", JSON.stringify(reservas));
    }
}