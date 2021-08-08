window.onload = () => {

    // Elección usuario
    const eligeUsuario = function(){
        let eleccionDelUsuario = parseInt(window.prompt("Elija: [1] = Piedra, [2] = Papel, [3] = Tijera:"));
        while (eleccionDelUsuario!=1 && eleccionDelUsuario!=2 && eleccionDelUsuario!=3){
            eleccionDelUsuario = parseInt(prompt(' Introduzca el valor correcto! Elija: [1] = Piedra, [2] = Papel, [3] = Tijera:'));
        }
        return eleccionDelUsuario;
    }

    // Elección PC
    const eleccionPC = function() {
        return parseInt(Math.random() * 3 + 1);
    }

    // Mostrar elecciones
    const nombre = ["Piedra","Papel","Tijera"]

    function mostrarElecciones(eleccionPC,eleccionUsuario){
        alert("Elección Usuario= " + nombre[eleccionUsuario - 1]);
        alert("Elección PC= " + nombre[eleccionPC - 1]);    
    }
    //Se agrega el - 1 porque tenemos las elecciones en un array que va de 0 a 2

    // Comparar elecciones
    // 1 pierde --> 2
    // 2 pierde --> 3
    // 3 pierde --> 1

    function comparar(eleccionPC,eleccionUsuario){
        let resultado = -1;
        switch (eleccionPC) {
            case 1:
                if (eleccionUsuario == 1) {
                    //empate
                    resultado = 0;
                } else if (eleccionUsuario == 2) {
                    // gana usuario
                    resultado = 1;
                } 
            break;

            case 2:
                if (eleccionUsuario == 2) {
                    //empate
                    resultado = 0;
                } else if (eleccionUsuario == 3) {
                    // gana usuario
                    resultado = 1;
                } 
            break;

            case 3:
                if (eleccionUsuario == 3) {
                    //empate
                    resultado = 0;
                } else if (eleccionUsuario == 1) {
                    // gana usuario
                    resultado = 1;
                } 
            break;
        }
        return resultado;
    }

    // Mostrar ganador

    function mostrarGanador(resultado){
        let mensaje = "Has perdido esta mano";
        if (resultado == 0) {
            mensaje = "Has empatado esta mano";
        } else if (resultado == 1) {
            mensaje = "Has ganado esta mano";
        }
        alert(mensaje);
    }

    //Ejecución

    function mejorDeTres() {
        let puntajeTotal = 0;
        for(let i=0; i < 3; i++) {
            let eleccionQueHizoElUsuario = eligeUsuario();
            let eleccionQueHizoPC = eleccionPC();
            mostrarElecciones(eleccionQueHizoPC,eleccionQueHizoElUsuario);
            let resultado = comparar(eleccionQueHizoPC,eleccionQueHizoElUsuario);
            mostrarGanador(resultado);
            puntajeTotal += resultado;             
        }
        let mensaje = "";
        if(puntajeTotal < 0) {
            mensaje = "Perdiste el partido, prueba una revancha!";
        } else if(puntajeTotal = 0) {
            mensaje = "Empataste el partido";
        } else {
            mensaje = "Ganaste la partida, felicitaciones!!!";
        }
        alert(mensaje);
    }
    setTimeout(mejorDeTres(),2000);

}




