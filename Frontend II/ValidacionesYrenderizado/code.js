let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  
  let nombre = prompt('ingresa tu nombre');
  while(nombre == null || nombre == ""){
    nombre = prompt('ingresa tu nombre')
  };

  datosPersona.nombre = nombre;
  let anio = parseInt(window.prompt('ingresa el año en que naciste'));
  let anioActual = 2021;
  while(anio > anioActual || !anio){
    anio = parseInt(window.prompt('ingresa el año en que naciste'))
  };

  datosPersona.edad = anioActual - anio;
  let ciudad = prompt('ingresa la ciudad donde vives');
  while(ciudad == null || ciudad == ""){
    ciudad = prompt('ingresa la ciudad donde vives');
  };

  datosPersona.ciudad = ciudad;
  let javascript = confirm('¿Te interesa Javascript?');
  if(javascript){
    datosPersona.interesPorJs = 'si';
  } else {
    datosPersona.interesPorJs = 'no';
  } 
}

function renderizarDatosUsuario() {
  
  obtenerDatosDelUsuario();
  
  let nombre = document.getElementById('nombre');
  nombre.innerText = datosPersona.nombre;
  let edad = document.getElementById('edad');
  edad.innerText = datosPersona.edad;
  let ciudad = document.getElementById('ciudad');
  ciudad.innerText = datosPersona.ciudad;
  let javascript = document.getElementById('javascript');
  javascript.innerText = datosPersona.interesPorJs;
}



const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  
  listado.forEach(tarjeta =>{

    const template = `
      <div class='caja'>
        <img src=${tarjeta.imgUrl} alt=${tarjeta.lenguajes}>
        <p class='lenguajes'>Lenguajes: ${tarjeta.lenguajes}</p>
        <p class='bimestre'>Bimestre: ${tarjeta.bimestre}</p>
      </div>
    `
    const fila = document.getElementById('fila');
    fila.innerHTML += template;
  }) 
}


function mostrarYOcultarDescripcionCompleta() {
  
  const sobreMi = document.querySelector('.sobre-mi');
  sobreMi.classList.toggle('sobre-mi-completo');     
}
