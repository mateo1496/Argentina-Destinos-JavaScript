//GENERAR INTERFAZ DE COSTA CON UNA FUNCION
//destinosCosta(costas)

//DOM
const viajesCosta= document.getElementById("viajesCosta");

//FETCH
fetch("../datos/costa.json")
.then((respuesta) => respuesta.json())
.then(datos =>{
    console.log(datos);
    for (const numero of datos) {
        costas.push(new Destinos(numero.id, numero.nombre, numero.precio, numero.detalle, numero.img, numero.cantidad)); 
    }
    console.log(costas);

    destinosCosta(costas);

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