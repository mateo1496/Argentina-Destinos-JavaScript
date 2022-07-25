//GENERAR INTERFAZ DE OFERTA CON UNA FUNCION
destinosEnOferta(ofertas,"viajesEnOferta");


//BOTON PARA COMPRAR
comprar.onclick= () =>{
     //USAR LUXON
     reserva.forEach(oferta => {
         oferta.fechaCompra()
         console.log(reserva);
     });
     //BORRAR LOCALSTORAGE
     localStorage.clear();
     //BORRAR LAS RESERVAS CON SPLICE
     reserva.splice(0,reserva.length);
     //LLAMAR LA FUNCION PARA VACIAR LA INTERFAZ
     compraOferta(reserva);
     //LIBRERIA SWEETALERT2
     Swal.fire({
        title: '¿Estas seguro que quieres comprar los pasajes?',
        showDenyButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `Quiero reservarlos`,
      }).then((result) => {
        // Read more about isConfirmed, isDenied below 
        if (result.isConfirmed) {
          Swal.fire('FELICITACIONES! Su compra se realizo con exito!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Tiene una semana para confirmar su compra, sino la misma se dara de baja', '', 'info')
        }
      })
}

setTimeout(() =>{
  Toastify({
    text: `Click para saber más sobre nuestras ofertas`,
    duration: 5000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {
      console.log("Chat de ayuda");
    },
    gravity: "bottom"
  }).showToast();
},5000)