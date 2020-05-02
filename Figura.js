class Figura {
    constructor (x,y,tam){
        this.x = x;
        this.y = y;
        this.vel = 3;
        this.tam = tam; 
       
    }
    mover(){
        this.x += this.vel;
        this.y += 0;
        if( this.x > width -30){
            this.vel = -3;
        }
        if ( this.x< 0){
            this.vel = 3;
        }
            }


    pintar(){}

    tamanno(){
        if(this.tam < 80)
        this.tam *= 2;
    }
    

    

}