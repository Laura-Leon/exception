let cuadrados = [];
let a;
let eliminado;
let boton;

let agregarMas;
let eliminarMas;
let hayC;

let arr = [];
let arr2 = [];

let pantalla;
let dia;

function setup(){
  createCanvas(700,700);
  menos = loadImage ('Images/menos.png');
  menosc = loadImage ('Images/menosc.png');
  mas = loadImage ('Images/mas.png');
  masc = loadImage ('Images/masc.png');
  continuar = loadImage ('Images/cont.png');
  continuarc = loadImage ('Images/contc.png');
  dup = loadImage ('Images/dup.png');
  dupc = loadImage ('Images/dupc_1.png');
  tran = loadImage ('Images/tran.png');
  tranc = loadImage ('Images/transc.png');

  clic = false;
  eliminarMas = false;
  hayC = false;
  agregarMas = false;

  pantalla =0;
  a = 0;
  b = 10;
  c = 0;
  dia = 50;

  //arreglitos
  for (let i = 0; i < a; i++){
    arr[i] = new Cuadrado(random(width),2,dia);
}

 for(let j = 0; j < a; j++){
    arr2[j] = new Circulo (random(width),2,dia);
}


/*  for (var i = 0; i < a; i++) {
   a = num[i];
  }*/
}

function draw (){

    switch(pantalla){
        case 0:
                 background(0);
                 fill(255);
                 textSize(100,100);
                 text(a,350,250);
                 
                 image(menos,250,350,100,100);
                 if(mouseX > 350-100 && mouseX < 450-100  && mouseY >350 && mouseY < 450){
                 image(menosc,250,350,100,100);
                 }
                 image(mas,350,350,100,100);
                 if(mouseX > 350 && mouseX < 450  && mouseY >350 && mouseY < 450){
                 image(masc,350,350,100,100);
                 }
                 image(continuar,450,450,100,50);
                 if(mouseX > 450 && mouseX < 450+100  && mouseY >450 && mouseY < 450+50 &&  a > 0 && a <=10 ){
                 image(continuarc,450,450,100,50);
                 }

                 try {
                    validate(a);
                    validate2(a)
                    
               } catch (error) {
                   console.log(error.message);
                   textSize(20,20);
                   text(error.message,100,100);
                 
                   ellipse(300,300,50,50);
           
               }

    
        break;
         case 1:
            background(200,200,0);
            //cuadrados

            for (let i = 0; i < arr.length; i++) {
                cuadrados = arr[i];
                cuadrados.pintar();
                cuadrados.mover();
            }

            //pintar circulos
            for(let j=0; j < arr2.length; j++){
               circulos = arr2[j];
                circulos.pintar();
               circulos.mover(); 
            }
            // exp agregar

            try {
                noMas(arr.length); 
            } catch (nomas) {
               
                agregarMas = false;

                console.log(nomas.message);
                fill(250);
                textSize(20,20);
                text(nomas.message,100,100);
            }

            //excepcion eliminar
            try {
                noMenos(arr.length); 
            } catch (nomenos) {
               
                eliminarMas = false;

                console.log(nomenos.message);
                textSize(20,20);
                text(nomenos.message,100,100);
            }



            image(menos,150,480,100,100);
            if(mouseX > 150 && mouseX < 250  && mouseY >500 && mouseY < 600){
            image(menosc,150,480,100,100);
            }
            image(mas,250,480,100,100);
             if(mouseX > 250 && mouseX < 350  && mouseY >500 && mouseY <600){
             image(masc,250,480,100,100);
            }

             //boton doblar tamaño
             fill(75,75,200);
             
             rect(450,500,100,50);
            
             fill(355);
             textSize(22);
             text("Tamaño", 460, 530);
             if(mouseX > 450 && mouseX < 550 && mouseY >500 && mouseY < 550){
                fill(130,130,200);
             
                rect(450,500,100,50);
               
                fill(355);
                textSize(22);
                text("Tamaño", 460, 530);
             }


              //boton duplicar
              fill(75,75,200);
            
             rect(350,500,100,50);
             fill(255);
             text("duplicar", 360, 530);
             if(mouseX > 350 && mouseX < 450 && mouseY >500 && mouseY < 550){
                fill(130,130,200);
            
                rect(350,500,100,50);
                fill(255);
                text("duplicar", 360, 530);
             }
             
              

                
          
        break;
}
   


}

function mousePressed(){

   switch(pantalla){
       case 0:
           //sumar numero pant 1
    if(mouseX > 350 && mouseX < 450  && mouseY >350 && mouseY < 450){
        if(a <= 9){
            clic = false;

        a += 1;
        arr.push(new Cuadrado(random(width),2,dia));

        }
    }
    //restar numero pant 1
        if(mouseX > 350-100 && mouseX < 450-100  && mouseY >350 && mouseY < 450){
            if(a >= 1){
                a -= 1;
                arr.pop();
            
            }
        }
        //cambio de pantalla
        if(mouseX > 450 && mouseX < 450+100  && mouseY >450 && mouseY < 450+50 &&  a > 0 && a <=10 ){
            if(a != 0){
            pantalla = 1;
            }
            clic = true;
            //if (a <= 10 && a >= 1) {
              //  arreglo();
            //}
        }
    break;
    case 1:
           //duplicar el tamaño
           if(mouseX > 450 && mouseX < 550 && mouseY > 500 && mouseY < 550){
            arr.forEach(e => {
                e.tamanno();
            });
            arr2.forEach(e2 => {
                e2.tamanno();
            });
            }

//añadir

        if (mouseX >250 && mouseX < 350 && mouseY > 500&& mouseY < 600 ) {
        
            if(agregarMas == true){
                arr.push(new Cuadrado(random(width),2,dia));
                if(hayC == true){
                    arr2.push(new Cuadrado(random(width),2,dia));
                }
            }
            
        }
        //eliminar
        if(mouseX > 150 && mouseX < 250  && mouseY >500 && mouseY < 550 ){
            if(eliminarMas == true){
                arr.pop();
                if(hayC == true){
                    arr2.pop();
                }
            }
        }


            //duplicar arreglo
            if(mouseX > 350 && mouseX < 450 && mouseY >500 && mouseY < 550){
                if(hayC == false){
                arr2 = arr.map(e => {
                    return e = new  Circulo(random(0,555),random(360,555),20,20);
                })
                
                hayC = true;

            }
        
    
            
        break;
    }
}
}


function validate(a){

    if((a <= c ) ) {

        throw new Exp( 'No puede ser menor a 0, avanza Esperancita');
    }
}

function validate2(a){

    if((a >= 10)){

        throw new Exp( 'Te pasaste Esperancita, echate pa tras');
}
}


function noMas(b){
    if(b >= 10){
        throw new Exp("No puede agregar más,maldita liciada");
    }else{
        agregarMas = true;
    }


}

function noMenos(c){
    if(c <= 0){
        throw new Exp("No puede elimininar más, escuincla");
    }else{
        eliminarMas = true;
    }
}

/*if((a >= 10)&&(clic == true)){

    throw new Exp( 'Te pasaste Esperancita, echate pa tras');

}*/


function arreglo(){
    nuevo = a;
        for (let i = 0; i < nuevo.length; i++) {
            a = nuevo[i];
        }
        for (let i = 0; i < nuevo; i++) {
            cuadrados.push(new Cuadrado(random(width),2,dia));   
        }
    }

  