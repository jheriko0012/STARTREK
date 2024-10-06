// funcion para abrir una trageta
function ap(a){
    document.getElementById('ccp').style.display = 'flex';
    document.getElementById(`cp${a}`).style.display = 'block';
   }
   
   // funcion cierra un targeta
   function ct(b){
    document.getElementById('ccp').style.display = 'none';
    document.getElementById(`cp${b}`).style.display = 'none';
   }
   
   // funcion activar animacion
   let num = 1;
   function ba(){
    if(num == 1){
     for (i = 2;i <= 10;i++){
      document.getElementById(`co${i}`).style.animationPlayState = 'running';
      document.getElementById('btn-move').style.color = 'white'
     }
     num--;
    } else{
     for (i = 2;i <= 10;i++){
      document.getElementById(`co${i}`).style.animationPlayState = 'paused';document.getElementById('btn-move').style.color = 'gray'
     }
     num++;
    }
   }