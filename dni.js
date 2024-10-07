// Álvaro Llamas Huerta

    /*
    Programa que pida mediante un prompt un DNI y compruebe si la letra es correcta
    */

    // Declaración de variables
    let dni = prompt("Introduce un DNI");
    let numeros = dni.slice(0,8);
    let letra = dni.slice(8).toUpperCase;
    let suma;
    let resto;
    let compruebaLetra;
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    document.write("Comprobamos si la letra del DNI es correcta");

    // Sumamos y dividimos los números entre 23 y almacenamos el resto
    resto = numeros % 23;

    // Condicional if que comprueba que la letra sea la misma que la que se encuentra
    // en la posición del Array (la cual sacamos del resto)
    if(letra === letras[resto]){
        document.write("La letra del DNI es correcta");
    } else {
        document.write("La letra del DNI es incorrecta");
    }