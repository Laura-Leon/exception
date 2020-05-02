class Circulo extends Figura {
    constructor(x,y,tam){
        super(x,y,tam);

    }

    pintar(){
        fill(250, 0, 255);
        ellipse(this.x, this.y, this.tam, this.tam);
    

    }
   
}