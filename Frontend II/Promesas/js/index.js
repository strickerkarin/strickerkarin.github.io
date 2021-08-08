// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
function userRandom() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            // console.log(data)

            renderizarDatosUsuario(data)

        });
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.

    let bdd = datos.results[0];
    let nombreCompleto = bdd.name.title + ' ' + bdd.name.first + ' ' + bdd.name.last //Object.values(bdd.name).join(' ').toUpperCase();
    let urlImagen = bdd.picture.thumbnail;
    let email = bdd.email;

    let tarjeta = document.querySelector('.tarjeta');

    // Dejo Como Igual y no += para limpiar la tarjeta con cada nuevo usuario
    tarjeta.innerHTML = `<img src=${urlImagen} alt="Foto Usuario">`;

    let template = `
            <p>
                Usuario: ${nombreCompleto}
            </P>
            <P>
                Email: ${email}    
            </p>
        `;

    tarjeta.innerHTML += template;


};


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.

window.onload = () => {
    userRandom();
    let botonRandom = document.querySelector("#random")
    botonRandom.addEventListener('click', function (e) {
        userRandom();
    });
}