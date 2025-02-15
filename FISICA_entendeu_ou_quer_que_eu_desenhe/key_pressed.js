function keyPressed(){
  if(tela=="cap1f1"){
    if(mostrando_vetor_resultante==false){
    for(d=0;d<N;d++){
    if(contador_vetores==d){
      if(keyIsDown(87)){
        vetor[d][1]+=-50
        mapa[d]= mapa[d]+"c"
      }
      if(keyIsDown(83)){
        vetor[d][1]+=50
        mapa[d]= mapa[d]+"b"
      }
      if(keyIsDown(68)){
        vetor[d][0]+=50
        mapa[d]= mapa[d]+"d"
      }
      if(keyIsDown(65)){
        vetor[d][0]+=-50
        mapa[d]= mapa[d]+"e"
      }
    }
  }
  }
  }else if(tela=="cap1f2"){
    if(mostrando_vetor_resultante==false){
    for(d=0;d<N;d++){
    if(contador_vetores==d){
      if(keyIsDown(87)){
        vetor[d][1]+=-50
        mapa[d]= mapa[d]+"c"
      }
      if(keyIsDown(83)){
        vetor[d][1]+=50
        mapa[d]= mapa[d]+"b"
      }
      if(keyIsDown(68)){
        vetor[d][0]+=50
        mapa[d]= mapa[d]+"d"
      }
      if(keyIsDown(65)){
        vetor[d][0]+=-50
        mapa[d]= mapa[d]+"e"
      }
    }
  }
  }
  }else if(tela=="cap1f3"){
    if(mostrando_vetor_resultante==false){
    for(d=0;d<N;d++){
    if(contador_vetores==d){
      if(keyIsDown(87)){
        vetor[d][1]+=-50
        mapa[d]= mapa[d]+"c"
      }
      if(keyIsDown(83)){
        vetor[d][1]+=50
        mapa[d]= mapa[d]+"b"
      }
      if(keyIsDown(68)){
        vetor[d][0]+=50
        mapa[d]= mapa[d]+"d"
      }
      if(keyIsDown(65)){
        vetor[d][0]+=-50
        mapa[d]= mapa[d]+"e"
      }
    }
  }
  }
  }
}