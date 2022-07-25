class Regiones{
    constructor(id,nombre,texto,img){
        this.id= id;
        this.nombre= nombre;
        this.texto= texto;
        this.img= img;
    }
}

const zonas=[];

zonas.push(new Regiones(1,"Costa","Sí queres disfrutar de las mejores playas del país y del Mar Argentino, sin dudas la mejor opción es que visit la Costa Atlantica. Tenemos más de 10 lugares para ofrecerte y que elijas la mejor opción para vos y con los que desees viajar","../assets/Imagenes/costaatlanticaDestinos1.jpg"));
zonas.push(new Regiones(2,"Cuyo","Cuyo tiene para ofrecerte muchos paisajes desde la cordillera de los andes, hasta si sos un gran amante de los vinos, podemos disfrutar de los mejores viñedos. Estas opciones y muchas más son las que puede ofrecerte esta gran zona Argentina.","../assets/Imagenes/cuyoDestinos1.jpg"));
zonas.push(new Regiones(3,"Mesopotamia","La mesopotamia es mucho más que disfrutar de las Cataratas del Iguazu por eso en Argentina Destinos tenemos para ofrecerte muchos más destinos para que puedas conocer, disfrutar y descansar.","../assets/Imagenes/mesopotamiaDestinos1.jpg"));
zonas.push(new Regiones(4,"Norte","El norte Argentino tiene una inmensa cantidad de destinos para ofrecerte y si estas pensando en visitarlo, tenes que ver las opciones que tenemos para ofrecerte y que elijas la mejor opción para vos.","../assets/Imagenes/norteDestinos1.jpg"));
zonas.push(new Regiones(5,"sur","El sur Argentino dejo de ser un destino solamente para el invierno, por eso en Argentina Destinos tenemos las mejores opciones para mostrarte para que puedas visitarlo en cualquier momento del año y disfrutes de un gran viaje.","../assets/Imagenes/surDestinos1.jpg"));

//FUNCION PARA MAQUETAR ARRAY DESTINO
function destinosRegiones(zonas, id) {
    let regionesArgentina = document.getElementById(id);
    regionesArgentina.innerHTML="";
    for (const zona of zonas) {
        let zonasViaje = document.createElement("div");
        //AGREGO LA CLASE COLUMNA
        zonasViaje.classList.add("col");
        zonasViaje.innerHTML=` <div class="card mb-3">
                                  <img src="${zona.img}"  class="card-img-top" alt="...">
                                  <div class="card-body">
                                      <h5 class="card-title text-center text-uppercase">${zona.nombre}</h5>
                                      <p class="card-text text-center">${zona.texto}</p>
                                      <button id="${zona.id}" type="submit" class="btn btn-primary botonCosta  text-uppercase rounded-circle border-dark button">Ver destinos</button>
                                  </div>
                                </div>`;
        regionesArgentina.append(zonasViaje);
    }
}

//GENERAR INTERFAZ DE DESTINOS CON UNA FUNCION
destinosRegiones(zonas,"destinosParaViajar");


//BOTON PARA HACER CLICK 
const regionCosta = document.getElementsByClassName("botonCosta");
for (const botonCosta of regionCosta) {
    botonCosta.addEventListener("click",function () {
      let zona= zonas.find(z=> z.id == this.id);
        Toastify({
          text: "Hacer Click",
          duration: 6000,
          destination: `../paginasDestinos/${zona.nombre}.html`,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to bottom right, blue, white);",
          },
          onClick: function(){} // Callback after click
        }).showToast();
  })
}



