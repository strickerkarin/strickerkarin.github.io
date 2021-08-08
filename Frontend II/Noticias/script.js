window.onload = () => {
    crearNoticias();
    const agregar = document.querySelector(".agregar-noticia");
    agregar.addEventListener("click",()=>{
        agregarNoticia();
    })
    
};

function crearNoticias() {
    noticias.forEach(noticia => {
        renderizarNoticia(noticia);
    })
}

function renderizarNoticia(noticia){
    const templateNoticia = `
        <div class="contenedor-noticia"            
            <p>${noticia.fecha}</p>
            <h2>${noticia.titulo}</h2>
            <p>${noticia.descripcion}</p>
            <div><img src=${noticia.imgUrl} alt="" width="250px"></div>            
        </div>
    `;

    const contenedorNoticiasNacionales = document.querySelector('.noticias-nacionales');
    const contenedorNoticiasInternacionales = document.querySelector('.noticias-internacionales');

    if(noticia.tipoNacional){
        contenedorNoticiasNacionales.innerHTML += templateNoticia;
    } else {
        contenedorNoticiasInternacionales.innerHTML += templateNoticia;
    }

}

function agregarNoticia() {
    const nuevaNoticia = {titulo: 'titulo1', fecha: '18/06/89', descripcion: "descripción Noticia", imgUrl: "www.google.com", tipoNacional: true};
    
    const tituloNuevaNoticia = prompt('Ingrese el titulo de la noticia: ');
    nuevaNoticia.titulo = tituloNuevaNoticia;

    const fechaNuevaNoticia = prompt('Ingrese la fecha de la noticia: ');
    nuevaNoticia.fecha = fechaNuevaNoticia;

    const descripcionNuevaNoticia = prompt('Ingrese la descripción de la noticia: ');
    nuevaNoticia.descripcion = descripcionNuevaNoticia;

    const imagenNuevaNoticia = prompt('Ingrese el url de la imagen de la noticia: ');
    nuevaNoticia.imgUrl = imagenNuevaNoticia;

    const tipoNuevaNoticia = confirm('¿Es una noticia Nacional?');
    nuevaNoticia.tipoNacional = tipoNuevaNoticia;
    
    renderizarNoticia(nuevaNoticia);
} 


const noticias = [
    {
    titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
    imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
    descripcion:"Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami.En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
    fecha: "07/06/21",
    tipoNacional: true
    },
    {
    titulo: "El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
    imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
    descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
    fecha: "02/06/21",
    tipoNacional: false
    },
    {
    titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
    imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
    descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación.Paso a paso para evitar que se empañen",
    fecha: "01/06/21",
    tipoNacional: true
    },
    {
    titulo: "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
    imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
    descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
    fecha: "04/06/21",
    tipoNacional: false
    },
    {
    titulo: "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
    imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
    descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
    fecha: "07/06/21",
    tipoNacional: true
    },
];