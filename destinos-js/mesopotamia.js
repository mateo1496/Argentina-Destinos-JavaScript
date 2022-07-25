//GENERAR INTERFAZ DE COSTA CON UNA FUNCION
//destinosCosta(costas)

//DOM
const viajesMesopotamia= document.getElementById("viajesMesopotamia");

//FETCH
fetch("../datos/mesopotamia.json")
.then((respuesta) => respuesta.json())
.then(datos =>{
    console.log(datos);
    for (const numero of datos) {
        mesopotamia.push(new Destinos(numero.id, numero.nombre, numero.precio, numero.detalle, numero.img, numero.cantidad)); 
    }
    console.log(mesopotamia);

    destinosMesopotamia(mesopotamia);

}).catch((mensaje) => console.log(mensaje));

//BOTON PARA COMPRAR
comprarCosta.onclick=() => {
    //USAR LUXON
    reservas.forEach(lugar => {
        lugar.fechaDeReserva()
        console.log(reservas);
    });
     //BORRAR LOCALSTORAGE
     localStorage.clear();
     //BORRAR LAS RESERVAS CON SPLICE
     reservas.splice(0,reservas.length);
     //LLAMAR A LA FUNCION PARA VACIAR LA INTERFAZ
     comprarDestinos(reservas);
     //LIBRERIA SWEETALERT2
     Swal.fire({
        title: '¿Queres comprar los pasajes seleccionados?',
        showDenyButton: true,
        confirmButtonText: 'SÍ',
        denyButtonText: `Reservarlos`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('FELICITACIONES!! Sus pasajes se han reservados', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Tenes 48hs para confirmar su compra, sino los pasajes se daran de baja', '', 'info')
        }
      })
}

//FUNCION PARA MAQUETAR EL ARRAY
function destinosMesopotamia(mesopotamia){
    viajesMesopotamia.innerHTML="";
    for (const lugar of mesopotamia) {
        let destinosParaViajar= document.createElement("div");
        //AGREGO LA CLASE COLUMNA
        destinosParaViajar.classList.add("col");
        destinosParaViajar.innerHTML=`<div class="card"  style="width: 18rem; margin-bottom: 20px;">
                                            <img src="${lugar.img}"  class="card-img-top " alt="...">
                                            <div class="card-body bg-success">
                                                <h5 class="card-title">${lugar.nombre}</h5>
                                                <p class="card-text">${lugar.detalle}</p>
                                                <p class="card-text">$ ${lugar.precio}</p>
                                                <button id="${lugar.id}" class="btn botonOfertaMesopotamia btn-primary btn btn-dark text-uppercase">COMPRAR</button><hr>
                                                </div>
                                      </div>`;
        viajesMesopotamia.append(destinosParaViajar);
    }
    botonMesopotamia();
}

//FUNCTION BOTON 
function botonMesopotamia() {
  let viajes= document.getElementsByClassName("botonOfertaMesopotamia");
  for (const viaje of viajes) {
      viaje.addEventListener("click", function () {
          let seleccionar= reservas.find(lugar => lugar.id == this.id);
          if(seleccionar) {
              seleccionar.nuevaCantidad();
          }else{
              seleccionar= mesopotamia.find(lugar => lugar.id == this.id);
              reservas.push(seleccionar);
          }
          localStorage.setItem("Reservas", JSON.stringify(reservas));
          //LLAMO LA FUNCION PARA GENERAR LA INTERFAZ
          comprarDestinos(reservas);
      })
  }
}