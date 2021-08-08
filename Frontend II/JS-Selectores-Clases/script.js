window.onload = () => {
    
    let modoOscuro = confirm('¿Desde cambiar a modo oscuro?');

    if(modoOscuro){
        document.querySelector('body').classList.add('bodyModoOscuro');
    }
}   
    
