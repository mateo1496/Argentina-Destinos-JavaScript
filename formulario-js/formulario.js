//DECLARO CLASE CONSTRUCTORA DE FORMULARIO
class Formulario{
    constructor(nombre,apellido,telefono,email,estadoCivil){
        this.nombre= nombre;
        this.apellido= apellido;
        this.telefono= telefono;
        this.email= email;
        this.estadoCivil= estadoCivil;
    }
}

//DECLARO ARRAY
const contactos=[];

//DOM
const registroDeContactos= document.getElementById("registroDeContactos");
const enviar= document.getElementById("enviar");

//FUNCION PARA PRODUCIR EVENTO
registroDeContactos.onsubmit= (e) => {
    //PARA EVITAR REFRESCAR LA PAGINA
    e.preventDefault();
    //GUARDA LOS HIJOS DEL CONTACTO EN LA VARIABLE CONTACTO
    let hijos= registroDeContactos.children;
    console.log(hijos);
    //USAR .VALUE PARA OBTENER LA INFORMACION
    contactos.push(new Formulario(hijos[0].value, hijos[1].value, hijos[2].value, hijos[3].value, hijos[4].value));
    console.log(contactos);
    //SELECT
    //DESPUES DE ENVIAR LA INFORMACION, SE BORRE LA INFORMACION QUE ESTA DENTRO DE LOS INPUT
    e.target.reset();
    //GUARDAR INFORMACION EN EL LOCALSTORAGE
    //PASO DE UN OBJETO A JSON Y SE GUARDA EN LOCALSTORAGE
    localStorage.setItem("Contactos", JSON.stringify(contactos));
}

enviar.onclick= () =>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Felicitaciones se acaba de registrarse en Argentina-Destinos, va a recibir por email las ultimas ofertas y noticias que tenemos para brindarte',
    showConfirmButton: false,
    timer: 4000
  })
}







//FUNCION PARA MAQUETAR
/*function contacto(listas) {
    for (const lista of listas) {
        let registro= document.createElement("form");
        registro.innerHTML=`<div class="form-group elementosFormulario">
        <label for="exampleInputName1"></label>
        <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Nombre">
        <small id="NameHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group elementosFormulario">
        <label for="exampleInputApellido1"></label>
        <input type="apellido" class="form-control" id="exampleInputApellido1" placeholder="Apellido">
      </div>
      <div class="form-group elementosFormulario">
        <label for="exampleInputPassword1"></label>
        <input type="telefono" class="form-control" id="exampleInputTelefono1" placeholder="Telefono">
      </div>
      <div class="form-group elementosFormulario">
        <label for="exampleInputEmail1"></label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo Electronico">
      </div>
      <div class="form-group elementosFormulario">
        <label for="exampleInputContraseña1"></label>
        <input type="contraseña" class="form-control" id="exampleInputContraseña1" placeholder="Contraseña">
      </div>
      <div class="form-group elementosFormulario">
          <label for="exampleFormControlSelect1"></label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Casado/a</option>
            <option>Soltero/a</option>
            <option>Otro</option>
          </select>
      </div>
        <h4 class="opcion texto elementosFormulario">¿Queres suscribirte para recibir las ultimas novedades?</h4>
             <label class="opcion label" for="si">Sí
             <input type="checkbox" name="aceptar" value="1">
             </label>
             <div class="mb-3">
              <label for="validationTextarea elementosFormulario "></label>
              <textarea class="form-control is-invalid elementosFormulario" id="validationTextarea" placeholder="Comentarios"></textarea>
              <div class="invalid-feedback">
              </div>
            <button class="btn btn-primary elementosFormulario border border-white bottonContacto" type="submit">Eliminar</button>
            <div class="form-group elementosFormulario">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">
                  Acepto los terminos y condiciones
                </label>
              </div>  
            </div>  
            <button class="btn btn-primary elementosFormulario border border-white bottonContacto" type="submit">Enviar</button>`;
        registroDeContactos.append(registro);    
    }
}*/

