// funcion 
function generaAletorio(min,max)
{
    return Math.round(Math.random() * (max - min) + min)
}
// Funcion array de n posiciones (aletoria

function generaNaletorio(n, min, max)
{
    var arrayNaletorios = new Array (n);
    var control = 0 ;
    while (control<n)
    {
        arrayNaletorios [control]= generaAletorio(min,max);
        control ++;
    }
    return arrayNaletorios;
}