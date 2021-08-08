window.onload = () => {

    const imagenes = document.querySelectorAll('.imagen');
    imagenes.forEach((imagen,i) => {
        const urlImagen = prompt('Ingrese la url de la imagen ' + (i+1) + ' por favor');

        imagen.setAttribute('src', urlImagen);
        imagen.setAttribute('width','300px');
    })
}    
    


