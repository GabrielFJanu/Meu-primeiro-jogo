function menu(){
  //FUNDO
  background(255);
  //NEWTON
image(newtongif[parseInt(tempo0a29)],35,height-600*newtongif[parseInt(tempo0a29)].height/newtongif[parseInt(tempo0a29)].width-30,600,600*newtongif[parseInt(tempo0a29)].height/newtongif[parseInt(tempo0a29)].width)
   //TEXTURA PAPEL
 //background(fundoanotações)
  background(papel)
  background(lapispapel)
  background(maça)

  //TEMPO
  if(tempo0a2<2.9){
      tempo0a2+=0.025
    }else{
      tempo0a2 = 0
    }
  if(tempo0a7<7.9){
      tempo0a7+=0.08
    }else{
      tempo0a7 = 0
    }
  if(botaojogarsolto==false && botaoopçõessolto==false && botaoinstruçõessolto==false && botaocréditossolto==false){
    if(tempo0a29<3.9999){
      tempo0a29+=0.01
    }else{
      tempo0a29 = 0
    }
  }else{
    if(tempo0a29<4){
      tempo0a29=4
    }
    if(tempo0a29<28.9999){
      tempo0a29+=0.4
    }else{
      if(botaojogarsolto){
        botaojogarsolto=false
        tela = "cap1"
      }else if(botaoopçõessolto){
        botaoopçõessolto = false
        tela = "opções"
      }else if(botaoinstruçõessolto){
        botaoinstruçõessolto = false
        tela = "instruções"
      }else if(botaocréditossolto){
        botaocréditossolto = false
        tela = "créditos"
      }
    }
  }
  //BOTOES
  if(mouseX>450 && mouseX<770 && mouseY>235 && mouseY<305 && mouseIsPressed){
      background(menujogar)
    }else if(mouseX>450 && mouseX<770 && mouseY>340 && mouseY<415 && mouseIsPressed){
      background(menuopções)
    }else if(mouseX>450 && mouseX<770 && mouseY>445 && mouseY<520 && mouseIsPressed){
      background(menuinstruções)
    }else if(mouseX>450 && mouseX<770 && mouseY>550 && mouseY<625 && mouseIsPressed){
      background(menucréditos)
    }else{
      background(menu[parseInt(tempo0a2)])
    }
  //lapis gif
  if(mouseX>450 && mouseX<770 && mouseY>235 && mouseY<305){
    image(lapis[parseInt(tempo0a7)],775,190,100,100*lapis[parseInt(tempo0a7)].height/lapis[parseInt(tempo0a7)].width)
  }
  if(mouseX>450 && mouseX<770 && mouseY>340 && mouseY<415){
    image(lapis[parseInt(tempo0a7)],775,290,100,100*lapis[parseInt(tempo0a7)].height/lapis[parseInt(tempo0a7)].width)
  }
  if(mouseX>450 && mouseX<770 && mouseY>445 && mouseY<520){
    image(lapis[parseInt(tempo0a7)],775,395,100,100*lapis[parseInt(tempo0a7)].height/lapis[parseInt(tempo0a7)].width)
  }
  if(mouseX>450 && mouseX<770 && mouseY>550 && mouseY<625){
    image(lapis[parseInt(tempo0a7)],775,500,100,100*lapis[parseInt(tempo0a7)].height/lapis[parseInt(tempo0a7)].width)
  }
}