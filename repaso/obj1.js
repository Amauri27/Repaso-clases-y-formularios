function Agregar(){
    x=document.getElementById("x").value
    y=document.getElementById("y").value
    punto = new Punto(x,y)
    re=document.getElementById("coordenadas").innerHTML
    document.getElementById("coordenadas").innerHTML=re +"<br>"+ punto.info();
    ruta.agregar(punto);
}
function Distancia(){

    let res = ruta.distancia();
    document.getElementById("distancia").innerHTML=res;
}