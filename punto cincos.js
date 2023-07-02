function cuadrado (alto, ancho){
    console.log("*".repeat(ancho))
    for (i=0; i<alto-2; i++){
        console.log("*" + " ".repeat(ancho-2)+"*")
    }
    console.log("*".repeat(ancho))
}
rectangulo(4,6);
