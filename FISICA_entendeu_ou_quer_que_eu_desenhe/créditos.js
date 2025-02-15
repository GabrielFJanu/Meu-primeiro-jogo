function creditos(){
  background(créditos1)
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
}