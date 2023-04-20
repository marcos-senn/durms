let btnSonido = document.querySelectorAll('.btn-sonido'); //obtengo todos los elementos con clase .btn-sonido y los almaceno en la variable btnSonido
let sonidoActual = null; //creo  variable vacia que sera usada luego para detener la reproduccion del audio cuando haga click en otro boton
//esto sirve para que no se esten reproduciendo dos audios al mismo tiempo 

for(let i=0; i < btnSonido.length; i++){
    btnSonido[i].addEventListener('click', function(){
        // En el html cada botón tiene su propio atributo data-sound, que contiene la ruta del archivo de sonido que se 
        // desea reproducir cuando se hace clic en ese botón. 
        let sonido = new Audio(this.getAttribute('data-sound')) //Instancio el objeto audio con el archivo de sonido del elemento y lo almaceno en sonido
        // this se refiere al objeto que desencadenó el evento, que es el botón en donde se hizo clic. this.getAttribute('data-sound') 
        // quiere decir dame el valor del atributo data-sound de ese botón en particular que se hizo clic.
        if(sonidoActual){ //condicion en la que voy a ver si el sonido se esta reproduciendo o no
            //para saber si se reproduce o no al final del for le doy a boton actual el valor del boton actual y a sonido actual el sonido actual
            //si esas variables tienen un valor se va a disparar este if
            sonidoActual.pause()
        }
        sonido.play() //si las variables siguen en null que es el valor que defini antes, se reproduce el sonido
        sonidoActual = sonido;//y el sonido a la variable
    })
}

