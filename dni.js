// Álvaro Llamas Huerta

    /*
    Programa que pida mediante un prompt un DNI y compruebe si la letra es correcta
    */

    // Declaración de variables
    let dni = prompt("Introduce un DNI");
    let numeros = dni.slice(0,7);
    let letra = dni.slice(8);
    let compruebaLetra;
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    document.write("Comprobamos si la letra del DNI es correcta");

    compruebaLetra = numeros % 23;

    

    document.write(numeros);
    document.write(compruebaLetra);