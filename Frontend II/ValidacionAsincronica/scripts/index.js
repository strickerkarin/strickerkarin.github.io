// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

const form = document.forms.inscripcion;
const boton = document.querySelector('.login-btn');
const loader = document.querySelector('#loader');
const error = document.querySelector('#error-container');
const email = form.email;
const contrasenia = form.password;
const titulo = document.querySelector('h1');
const closer = document.querySelector('.closer');


window.onload = () => {
  if (localStorage.getItem('Nombre') == null || localStorage.getItem('Nombre') == '') {
    form.classList.remove('hidden');
    closer.classList.add('hidden');
    titulo.innerText = 'Iniciar Sesión';
    email.value = '';
    contrasenia.value = '';
  } else {
    form.classList.add('hidden');
    titulo.innerText = "Bienvenido al sitio " + localStorage.getItem('Nombre') + "😀";
    closer.classList.remove('hidden');
  }

  boton.addEventListener('click', () => {

    const emailValido = validarEmail(email.value);
    const contraseniaValida = validarContrasenia(contrasenia.value);

    if (!emailValido || !contraseniaValida) {
      error.classList.remove('hidden');
    } else {
      loader.classList.remove('hidden');
      error.classList.add('hidden');

      setTimeout(function () {
        loader.classList.add('hidden');
        form.classList.add('hidden');
        titulo.innerText = "Bienvenido al sitio " + localStorage.getItem('Nombre') + "😀";
        closer.classList.remove('hidden');
      }, 3000);
    }
  });

  closer.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  })

}

function validarEmail(valor) {
  const expresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const test = expresion.test(valor);
  let encontrado = false;
  baseDeDatos.usuarios.forEach(usuario => {
    if (usuario.email == valor) {
      encontrado = true;
    }
  })
  let emailValido = false;
  if (test && encontrado) {
    emailValido = true;
  }
  return emailValido;
}

function validarContrasenia(valor) {
  let largo = false;
  if (contrasenia.value.length > 5) {
    largo = true;
  };
  let encontrado = false
  baseDeDatos.usuarios.forEach(usuario => {
    if (usuario.password == valor) {
      encontrado = true;
      localStorage.setItem('email', email.value);
      localStorage.setItem('Nombre', usuario.name);
    };
  });
  let passwordValido = false;
  if (largo && encontrado) {
    passwordValido = true;
  }
  return passwordValido;
}

