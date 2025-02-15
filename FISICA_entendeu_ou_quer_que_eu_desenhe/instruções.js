function instrucoes(){
  //TEMPO
  if(tempo0a2<2.9){
      tempo0a2+=0.025
    }else{
      tempo0a2 = 0
    }
  //var
  if(insttuto1>5){
    insttuto1=0
  }
  if(insttuto2>1){
    insttuto2=0
  }
  //BOTOES
    if(mouseX>310 && mouseX<620 && mouseY>500 && mouseY<605 && mouseIsPressed){
      background(instruçõescap1)
    }else if(mouseX>665 && mouseX<990 && mouseY>500 && mouseY<605 && mouseIsPressed){
      background(instruçõescap2)
    }else{
      background(instruções)
    }
  if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130 && mouseIsPressed){
      image(botaovoltarapertado,45,45)
    }else{
      image(botaovoltar[parseInt(tempo0a2)],45,45)
    }
  //
  if(insttuto2==1){
    background(tuto2)
    if(mouseX>1155 && mouseX<1225 && mouseY>295 && mouseY<430 && mouseIsPressed){
      background(tuto2direita)
    }
  }
  if(insttuto1==1){
    background(tutorial[0])
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450 && mouseIsPressed){
      background(tutorialdireita[0])
    }
  }else if(insttuto1==2){
    background(tutorial[1])
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450 && mouseIsPressed){
      background(tutorialdireita[1])
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[1])
    }
  }else if(insttuto1==3){
    background(tutorial[2])
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450 && mouseIsPressed){
      background(tutorialdireita[2])
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[2])
    }
  }else if(insttuto1==4){
    background(tutorial[3])
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450 && mouseIsPressed){
      background(tutorialdireita[3])
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[3])
    }
  }else if(insttuto1==5){
    background(tutorial[4])
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450 && mouseIsPressed){
      background(tutorialdireita[4])
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[4])
    }
  }
}