//FUNCION PARA MAQUETAR EL ARRAY OFERTA
function destinosEnOferta(ofertas, id) {
    let destinosOferta = document.getElementById(id);
    //destinosOferta.innerHTML="";
    for (const oferta of ofertas) {
        let lugaresConDescuento= document.createElement("div");
        //AGREGO LA CLASE COLUMNA
        lugaresConDescuento.classList.add("col");
        lugaresConDescuento.innerHTML=`<div class="card ofertas" style="width: 18rem;">
                                            <img src="${oferta.img}" class="card-img-top" alt="...">
                                            <div class="card-body OfertasDestinos">
                                                 <h5 class="card-title text-uppercase mx-auto text-center">${oferta.nombre}</h5>
                                                 <p class="card-text mx-auto">${oferta.detalle}</p>
                                                 <p class="card-text">$ ${oferta.precio}</p>
                                                 <button id="${oferta.id}" class="btn botonOferta btn-primary btn btn-dark text-uppercase">Reservar</button><hr>
                                                 <p class="card-text mx-auto >${oferta.texto}<p>
                                            </div>
                                        </div>`;
        destinosOferta.append(lugaresConDescuento);
    }
    botonCompraOferta();
}


//FUNCION BOTON EVENTO
function botonCompraOferta() {
    let botones= document.getElementsByClassName("botonOferta");
    for (const boton of botones) {
        boton.addEventListener("click",function () {
            let elegir= reserva.find(oferta => oferta.id == this.id);
            if (elegir) {
                elegir.sumarCantidad();
            }else{
                elegir= ofertas.find(oferta => oferta.id ==this.id);
                reserva.push(elegir);
            }
            localStorage.setItem("Reserva",JSON.stringify(reserva));
            //LLAMO LA FUNCION PARA GENERAR LA INTERFAZ
            compraOferta(reserva);
        })
    }
}


//FUNCION TOTAL
function totalCompra() {
    let total= reserva.reduce((compraTotal, actual) => compraTotal += actual.subTotal(),0);
    totalCompraInterFaz.innerHTML="Total: $" + total;
    return total;
}


//FUNCION PARA GENERAR LA INTERFAZ DEL MODAL
function compraOferta(lista) {
    //AUMENTA LA CANTIDAD DE DESTINOS RESERVADOS
    cantidad.innerHTML= lista.length;
    //VACIAR LAS RESERVAS REALIZADAS
    reservarPasaje.innerHTML="";
    for (const lugar of lista){
        let lugaresOferta= document.createElement("div");
        lugaresOferta.innerHTML=`${lugar.nombre}
                                 <table class="table table-dark text-primary">
                                   <thead>
                                      <tr>
                                         <th scope="col">Precio ${lugar.precio}</th>
                                         <th scope="col">${lugar.cantidad}</th>
                                         <th scope="col">$ ${lugar.subTotal()}</th>
                                       </tr>
                                    </thead>
                                  </table>
                                  <a id="${lugar.id}" class="btn btn-info btn-add">+</a> 
                                  <a id="${lugar.id}" class="btn btn-info btn-sub">-</a> 
                                  <a id="${lugar.id}" class="btn btn-info btn-eliminar">Quitar</a> `;
        reservarPasaje.append(lugaresOferta);
    }
    document.querySelectorAll(".btn-eliminar").forEach(boton => boton.onclick = eliminarViaje);
    document.querySelectorAll(".btn-add").forEach(boton => boton.onclick = sumarViaje);
    document.querySelectorAll(".btn-sub").forEach(boton => boton.onclick = restarViaje);
    totalCompra();
}

//FUNCION PARA ELIMINAR VIAJE
function eliminarViaje(e) {
    //OBTENGO LA POSICION DEL ELEMENTO A ELIMINAR
    let posicion= reserva.findIndex(destino => destino.id == e.target.id);
    //AL OBTENER LA POSICION ELIMINO ESE ELEMENTO
    reserva.splice(posicion,1);
    //PARTE VISUAL
    compraOferta(reserva);
    localStorage.setItem("Reserva",JSON.stringify(reserva));
}

//FUNCION PARA AGREGAR VIAJE
function sumarViaje() {
    //BUSCAR PRODUCTO PARA AGREGAR
    let viaje= reserva.find(v => v.id == this.id);
    //CADA CUANTA CANTIDAD QUIERO AGREGAR
    viaje.agregarCantidad(1);
    //PARTE VISUAL
    this.parentNode.children[1].innerHTML="Cantidad: "+viaje.cantidad;
    this.parentNode.children[2].innerHTML= "Subtotal: "+viaje.subTotal();
    totalCompra();
    localStorage.setItem("Reserva",JSON.stringify(reserva));
}

//FUNCION PARA RESTAR VIAJE
function restarViaje() {
    //BUSCAR PRODUCTO PARA RESTAR
    let viaje= reserva.find(v => v.id == this.id);
    if(viaje.cantidad > 1){
        //CADA CUANTA CANTIDAD QUIERO RESTAR
        viaje.agregarCantidad(-1);
        //PARTE VISUAL
        this.parentNode.children[1].innerHTML="Cantidad: "+viaje.cantidad;
        this.parentNode.children[2].innerHTML="Subtotal: "+viaje.subTotal();
        totalCompra();
        localStorage.setItem("Reserva",JSON.stringify(reserva));
    }
}

