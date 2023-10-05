//import { readDB } from "./reader.js";

function addCode() {
    console.log("Se ha llamado a la funcion addCode()");
    // Llamamos a la funcion que lee la base de datos
    readDB();

    // Encuentra el elemento con id "add_to_me"
    var container = document.getElementById("add_to_me");

    // Verifica si ya existe un elemento h3 dentro del contenedor
    var existingH3 = container.querySelector("#new_h3");

    // Si ya existe un elemento h3, no hacemos nada
    if (existingH3) {
        return;
    }

    /*
    USE CSS CLASSES FOR STYLES!
    */
    // Si no existe un elemento h3, creamos uno y lo agregamos
    var newH3 = document.createElement("div");
    newH3.id = "new_h3";
    //Add dimensions to the div and colors
    newH3.style.width = "70px";
    newH3.style.height = "50px";
    newH3.style.backgroundColor = "blue";
    newH3.style.borderRadius = "10px";
    newH3.margin = "auto";

    // Add text to the div
    container.appendChild(newH3);

    /* Necesitamos agregar 2 imagenes
    La primera consiste en la grafica de barras de los grados celcius utilizan el promedio por hora
    para mostrar la temperatura de cada hora del dia
    
    La segunda imagen consiste en la grafica de barras de los grados farenheit promedio por hora durante el dia
    (Lo mismo que la anterior pero en grados ferenheit)

    Idea primordial: Usar D3 para crear las graficas de barras y mostrarlas en la pagina web

    Solo habilitar con min y max los días encontrados en los datos leídos de firebase

    */
}
