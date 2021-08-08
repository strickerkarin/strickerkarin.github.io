window.onload = () => {

    /* const form = document.querySelector('form'); */

    const formInscripcion = document.forms.inscripcion;

    const nombre = formInscripcion.nombre;
    const contrasenia = formInscripcion.pass;
    const telefono = formInscripcion.tel;
    const hobbies = formInscripcion.hobbies;
    const nacionalidad = formInscripcion.nacionalidad;

    
    const boton = formInscripcion.querySelector('button');
    const datos = {
        nombreCompleto: null,
        contrasenia: null,
        telefono: null,
        hobbies: [],
        nacionalidad: null,
    }

    nombre.addEventListener('keyup', () => {
        datos.nombreCompleto = nombre.value.toLowerCase().trim();
    })

    contrasenia.addEventListener('keyup', () => {
        datos.contrasenia = contrasenia.value.trim();
    })

    telefono.addEventListener('keyup', () => {
        const number = parseInt(telefono.value);

        if (isNaN(number)) {
            boton.disabled = true;
            datos.telefono = null;
        } else {
            boton.disabled = false;
            datos.telefono = telefono.value;
        }

    })

    formInscripcion.addEventListener('submit', (event) => {
        event.preventDefault();

        hobbies.forEach(hobbie => {
            if (hobbie.checked) {
                datos.hobbies.push(hobbie.value);
            }
        })        
    })

    formInscripcion.addEventListener('click', () =>{
        let cantHobbies = 0;
        hobbies.forEach(hobbie => {            
            if (hobbie.checked) {
                cantHobbies++
            }
        })
        if(cantHobbies > 4){
            alert('No puede ingresar más de cuatro hobbies');
            boton.disabled = true;
        }else{
            boton.disabled = false;
        }

    })

    formInscripcion.addEventListener('submit', () => {
        nacionalidad.forEach(function (elemento) {
               
            if (elemento.checked) {
                datos.nacionalidad = elemento.value;
            }
        })
    })

    class Usuario {
        constructor(nombre, contrasenia, telefono, hobbies, nacionalidad) {
            this.nombre = nombre;
            this.contrasenia = contrasenia;
            this.telefono = telefono;
            this.hobbies = hobbies;
            this.nacionalidad = nacionalidad;
        }
    }

    formInscripcion.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(datos);

        let usuario = new Usuario(datos.nombreCompleto, datos.contrasenia, datos.telefono, datos.hobbies, datos.nacionalidad);
        console.log(usuario);
        let exitosa = document.querySelector(".inscripcion-exitosa");
        exitosa.innerText = "Inscripción exitosa";
    })

}





