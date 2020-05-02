class Cuadrado extends Figura {
    constructor(x,y,tam,){
        super(x,y,tam);

    }
    
    pintar(){
        fill(0, 0, 255);
        rect(this.x, this.y, this.tam, this.tam);
    

    }
}