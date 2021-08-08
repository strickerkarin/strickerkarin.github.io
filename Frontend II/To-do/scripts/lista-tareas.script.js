window.onload = () => {
    // agregarTarea();
    getTareas();

    document.forms.agregarTarea.addEventListener('submit', event => {
        event.preventDefault();
        agregarTarea()
    });
}


function removerFondos(){
    var body = document.querySelector('body'); 
    var header = document.querySelector('header');
    body.classList.remove("fondo-uno");
    body.classList.remove("fondo-dos");
    body.classList.remove("fondo-tres");
    body.classList.remove("fondo-cuatro");
    body.classList.remove("fondo-cinco");
    body.classList.remove("fondo-seis");
    header.classList.remove("header-fondo-uno");
    header.classList.remove("header-fondo-dos");
    header.classList.remove("header-fondo-tres");
    header.classList.remove("header-fondo-cuatro");
    header.classList.remove("header-fondo-cinco");
    header.classList.remove("header-fondo-seis");

}

function colocarFondo(fondo) {
    var body = document.querySelector('body');  
    var header = document.querySelector('header');
    removerFondos();
    header.classList.add("header-"+fondo);
    body.classList.add(fondo);
}


comprobarToken();
setInterval(() => {
    comprobarToken();
}, 100000)

function comprobarToken() {
    const token = localStorage.getItem('token');
    if (!token) {
        location.href = './login.html'
    }
}

function crearTareas(tareas) {
    document.querySelector('ul.tareas-pendientes').innerHTML = '';
    document.querySelector('ul.tareas-terminadas').innerHTML = '';

    tareas.forEach(tarea => {
        renderizarTarea(tarea)
    })
}

function renderizarTarea(tarea) {
    const fechaTarea = dayjs(tarea.createdAt); 
    const fechaTareaRenderizada = fechaTarea.format('DD/MM/YYYY H:mm'); 
    
    const template = `
    <li class="tarea animar-entrada">
      <div class="not-done" onclick='completarTarea(${tarea.id}, ${tarea.completed})'></div>
      <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
        <p class="timestamp">Creado el: ${fechaTareaRenderizada}</p>
        <button class="eliminar"  onclick='eliminarTarea(${tarea.id})'>Eliminar</button>
      </div>
    </li>
  `;

    const contenedorTareas = document.querySelector('ul.tareas-pendientes');
    const contenedorTareasCompletas = document.querySelector('ul.tareas-terminadas');
    if (!tarea.completed) {
        contenedorTareas.innerHTML += template;
    } else {
        contenedorTareasCompletas.innerHTML += template;
    }
}

function agregarTarea() {
    const descripcion = document.forms.agregarTarea.descripcionNuevaTarea.value;
    const body = {
        description: descripcion,
        completed: false
    }
    RequestManager.post(`/tasks`, body)
        .then(tarea => {
            getTareas(tarea);
            //renderizarTarea(tarea);
        }).catch(err => {
            console.log(err);
        })
}


function getTareas() {
    
    RequestManager.get('/tasks').then(tareas => {
        crearTareas(tareas);
    }).catch(err => {
        console.log(err)
    })
}

function completarTarea(id, completed) {
    const body = {
        completed: !completed
    };
    RequestManager.put(`/tasks/${id}`, body)
        .then(tarea => {
            getTareas();
        }).catch(err => {
            console.log(err)
        })
}



function eliminarTarea(id) {
    if (!confirm('Esta seguro que desea eliminar la tarea?')) {
        return;
    }
    RequestManager.delete(`/tasks/${id}`)
        .then(tarea => {
            console.log("entró");
            getTareas();
        }).catch(err => {
            console.log(err)
        })

}

