// Álvaro Llamas Huerta

    /*
    Programa que pida mediante un prompt un DNI y compruebe si la letra es correcta
    */

    // Declaración de variables
    let dni = prompt("Introduce un DNI"); // Pedimos el DNI
    let numeros = dni.slice(0,8); // Extraemos los números
    let letra = dni.slice(8).toUpperCase(); // Extraemos la letra, .toUpperCase para convertir la letra a mayúscula
    let resto; // Guardamos el resto de la división

    // Array que almacena las posibles letras de un DNI
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    // Sumamos y dividimos los números entre 23 y almacenamos el resto
    resto = numeros % 23;

    // Condicional if que comprueba que la letra sea la misma que la que se encuentra
    // en la posición del Array (la cual sacamos del resto)
    if(letra === letras[resto]){
        alert("La letra del DNI es correcta");
    } else {
        alert("La letra del DNI es incorrecta");
    }