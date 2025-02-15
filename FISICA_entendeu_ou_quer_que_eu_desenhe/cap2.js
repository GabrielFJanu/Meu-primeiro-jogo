function cap2() {
  //FUNDO
  background(249)
  //PAPEL
  background(fundoanotações)
  background(papel)
  //BASE
  background(base[parseInt(tempo0a2)]);
  //TEMPO
  if(tempo0a2<2.9){
      tempo0a2+=0.025
    }else{
      tempo0a2 = 0
    }
  //BOTOES
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130 && mouseIsPressed){
      image(botaovoltarapertado,45,45)
    }else{
      image(botaovoltar[parseInt(tempo0a2)],45,45)
    }
    if(mouseX>65 && mouseX<120 && mouseY>285 && mouseY<420 && mouseIsPressed){
      background(fases2esquerda)
    }else if(mouseX>270 && mouseX<420 && mouseY>280 && mouseY<420 && mouseIsPressed){
      background(fases2f1)
    }else if(mouseX>460 && mouseX<610 && mouseY>280 && mouseY<420 && mouseIsPressed){
      background(fases2f2)
    }else if(mouseX>660 && mouseX<805 && mouseY>290 && mouseY<420 && mouseIsPressed){
      background(fases2)
    }else if(mouseX>855 && mouseX<1015 && mouseY>290 && mouseY<420 && mouseIsPressed){
      background(fases2)
    }else{
      background(fases2)
    }
   background(locked)
}