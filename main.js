let nombre = prompt ("Ingrese su nombre aquí!")


let tekken = 2000;
let streetFighter = 3500;
let pokemon = 4000;
let fotnite = 5000;

alert ("Biendenido/a " + nombre );

let pedir = prompt ("¿Sabes que juego quieres adquirir? Ingrese SI o NO ");


if ((pedir === "no") || (pedir === "No")|| (pedir === "NO") || (pedir === "nO")){
    alert (" Esperemos que regrese pronto para comprar nuestros productos");
} else {
    let orden = prompt ("Ingresa el juego que quieras: tekken / streetFighter / pokemon / fortnite");

    
switch (orden){
    case "tekken": 
    alert ("Gracias por tu compra. Su total es de: $ " + tekken);

    break;



    case "streetFighter": 
    alert ("Gracias por tu compra. Su total es de: $ " + streetFighter);

    break;



    case "pokemon": 
    alert ("Gracias por tu compra. Su total es de: $ " + pokemon);
    break;



    case "fortnite": 
    alert ("Gracias por tu compra. Su total es de: $ " + fortnite);
    break;

}
}

function agradecer (){
    alert ( nombre + ", ya hemos procesado su pedido. Se encuentra en prepración. Pronto será contactado.");
}

agradecer ()