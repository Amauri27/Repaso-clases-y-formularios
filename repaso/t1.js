class Punto
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    distancia(puntoDos)
    {
        let rx = (puntoDos.x-this.x)*(puntoDos.x-this.x);
        let ry = (puntoDos.y-this.y)*(puntoDos.y-this.y);
        return Math.sqrt(rx+ry);
    }
    info()
    {
        return `(${this.x},${this.y})`;
    }
}

class Recorrido
{
    constructor()
    {
        this.puntos = new Array();
    }
    agregar(punto)
    {
        this.puntos.push(punto);
    }
    distancia()
    {
        let sd = 0;
        for (let i = 0; i < this.puntos.length-1; i++) 
        {
            sd += this.puntos[i].distancia(this.puntos[i+1]);
        }
        return sd;
    }
}

ruta = new Recorrido();
