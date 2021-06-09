let modoOscuro = confirm('¿Desde cambiar a modo oscuro?');

if(modoOscuro){
    document.querySelector('body').classList.add('bodyModoOscuro');
    document.querySelector('h1').classList.add('h1modoOscuro');

    let items = document.querySelectorAll('.item');
    for(let item of items){
        item.classList.add('itemModoOscuro')
    };

    let h2s = document.querySelectorAll('.item h2');
    for(let h2 of h2s){
        h2.classList.add('textoModoOscuro');
    }

    let parrafos = document.querySelectorAll('.item p');
    for (let parrafo of parrafos) {
        parrafo.classList.add('textoModoOscuro'); 
    }     
}