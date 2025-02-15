function cap1() {
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
    if(mouseX>335 && mouseX<495 && mouseY>280 && mouseY<420 && mouseIsPressed){
      background(fases1f1)
    }else if(mouseX>545 && mouseX<705 && mouseY>280 && mouseY<420 && mouseIsPressed){
      background(fases1f2)
    }else if(mouseX>740 && mouseX<900 && mouseY>280 && mouseY<420 && mouseIsPressed){
      background(fases1f3)
    }else if(mouseX>1160 && mouseX<1220 && mouseY>290 && mouseY<420 && mouseIsPressed){
      background(fases1direita)
    }else{
      background(fases1)
    }
}