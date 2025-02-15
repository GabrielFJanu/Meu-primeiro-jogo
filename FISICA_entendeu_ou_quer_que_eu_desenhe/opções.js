function opcoes(){
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
    if(som%2==0){
      background(opçõesmarcado)
    }else{
      background(opções)
    }
}