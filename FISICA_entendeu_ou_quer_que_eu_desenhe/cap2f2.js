function cap2f2() {
//FUNDO
  background(220);
//TEMPO
  if(tempo0a3<3){
      tempo0a3+=0.05
    }else{
      tempo0a3=0
    }
//FAIXA DE CHEGADA
  push()
  imageMode(CENTER)
  translate(160,510)
  rotate(90)
  translate(-160,-510)
image(faixa,160,510,340*altura/height,340*altura/height*faixa.height/faixa.width)
  pop()
//CARRO
  //Image
  push()
  let v0 = createVector(versor_carro[0],versor_carro[1])
  let v1 = createVector(1,0)
  if(mag(versor_carro[0],versor_carro[1])!=0){
    alfa=v1.angleBetween(v0)
  }
  imageMode(CENTER)
  translate(x,y)
  rotate(alfa)
  image(carro,0,0,125,125*carro.height/carro.width)
  pop()
  /*
  //Hitbox
  push()
  strokeWeight(2)
  noFill()
  ellipse(x+versor_carro[0]*35,y+versor_carro[1]*35,raioHitbox*2)
  ellipse(x,y,raioHitbox*2)
  ellipse(x+versor_carro[0]*-35,y+versor_carro[1]*-35,raioHitbox*2)
  pop()
  */
//OBJETOS
  push()
  fill(180)
  noStroke()
  //parede baixo
  rect((width-comprimento)/2,altura+(height-altura)/2,comprimento,-espessura_parede)
  //parede esquerda
  rect((width-comprimento)/2,(height-altura)/2,espessura_parede,altura)
  //parede direita
  rect(width-(width-comprimento)/2,(height-altura)/2,-espessura_parede,altura)
  //parede cima
  rect((width-comprimento)/2,(height-altura)/2,comprimento,espessura_parede)
  //obj1
  rect(110,height/2-espessura_parede/2,800,espessura_parede)
  pop()
//BOTAO VOLTAR
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130 && mouseIsPressed && pressionandoCarro==false){
      push()
      imageMode(CORNER)
image(botaovoltarapertado,45,45)
      pop()
    }else{
      if(vitoria==false){
        push()
        if((tempo0a3).toFixed(0)==0){
          imageMode(CORNER)
          image(botaovoltar[0],45,45)
        }else if((tempo0a3).toFixed(0)==1){
          imageMode(CORNER)
          image(botaovoltar[1],45,45)
        }else if((tempo0a3).toFixed(0)==2){
          imageMode(CORNER)
          image(botaovoltar[2],45,45)
        }else if((tempo0a3).toFixed(0)==3){
          imageMode(CORNER)
          image(botaovoltar[3],45,45)
        }
        pop()
      }
    }
//CONTROLES
   if(controleshabilitados){
     if(pressionandoCarro==true){
    if(mouseIsPressed){
      if(mag(vetor_flecha[0],vetor_flecha[1])!=0){
        //seta
      push()
      translate(x,y)
      let v0 = createVector(vetor_flecha[0],vetor_flecha[1])
      let v1 = createVector(1,0)
      rotate(v1.angleBetween(v0))
      translate(-x,-y)
      translate(x+mag(vetor_flecha[0],vetor_flecha[1])/2,y)
      imageMode(CENTER)
      tint(255-0.1*mag(vetor_flecha[0],vetor_flecha[1]),255-1*mag(vetor_flecha[0],vetor_flecha[1]),255-1*mag(vetor_flecha[0],vetor_flecha[1]))
    image(flecha,0,0,mag(vetor_flecha[0],vetor_flecha[1]),mag(vetor_flecha[0],vetor_flecha[1])*flecha.height/flecha.width)
      pop()
      }
      //mostrando o modulo do vetor
      push()
      angleMode(DEGREES)
      textSize(12+0.03*mag(vetor_flecha[0],vetor_flecha[1]))
      let v0 = createVector(vetor_flecha[0],vetor_flecha[1])
      let v1 = createVector(1,0)
      translate(x,y)
      rotate(v1.angleBetween(v0))
      if(v1.angleBetween(v0)>90||v1.angleBetween(v0)<-90){
        rotate(180)
        textAlign(RIGHT)
    text("+"+(mag(vetor_flecha[0],vetor_flecha[1])/10).toFixed(1)+" m/s",-mag(vetor_flecha[0],vetor_flecha[1])-3,3)
      }else{
        textAlign(LEFT)
text("+"+(mag(vetor_flecha[0],vetor_flecha[1])/10).toFixed(1)+" m/s",mag(vetor_flecha[0],vetor_flecha[1])+3,3)
      }
      pop()
    }else{
      pressionandoCarro=false
      velocidade[0]+= vetor_flecha[0]/10
      velocidade[1]+= vetor_flecha[1]/10
    }
  }
   }
//VETORES
  vetor_mouse[0]= mouseX - x
  vetor_mouse[1]= mouseY - y
  if(mag(velocidade[0],velocidade[1])!=0){
    versor_velocidade[0]= velocidade[0]/mag(velocidade[0],velocidade[1])
    versor_velocidade[1]= velocidade[1]/mag(velocidade[0],velocidade[1])
  }else{
    versor_velocidade[0]=0
    versor_velocidade[1]=0
  }
  if(mag(versor_velocidade[0],versor_velocidade[1])!=0){
    versor_carro[0] = versor_velocidade[0]
    versor_carro[1] = versor_velocidade[1]
  }
  if(mag(vetor_mouse[0],vetor_mouse[1])!=0){
    versor_mouse[0]= vetor_mouse[0]/mag(vetor_mouse[0],vetor_mouse[1])
    versor_mouse[1]= vetor_mouse[1]/mag(vetor_mouse[0],vetor_mouse[1])
  }else{
    versor_mouse[0]=0
    versor_mouse[1]=0
  }
  vetor_flecha[0] = versor_mouse[0]*((-50000/(mag(vetor_mouse[0],vetor_mouse[1])+200))+250)
  vetor_flecha[1] = versor_mouse[1]*((-50000/(mag(vetor_mouse[0],vetor_mouse[1])+200))+250)
//FÍSICA
  velocidade[0] += 0
  velocidade[1] += 0
  x+=velocidade[0]
  y+=velocidade[1]
  
  //colisão e consequências
  //parede cima
  hit_frente_ParedeC = collideLineCircle((width-comprimento)/2, (height-altura)/2+espessura_parede, (width-comprimento)/2+comprimento, (height-altura)/2+espessura_parede, x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  //distancia_ParedeC = abs(-y-versor_carro[1]*35+(height-altura)/2+espessura_parede)
  if(hit_frente_ParedeC){
    colisao((width-comprimento)/2, (height-altura)/2+espessura_parede, (width-comprimento)/2+comprimento, (height-altura)/2+espessura_parede)
  }
  //parede baixo
  hit_frente_ParedeB = collideLineCircle((width-comprimento)/2, height-(height-altura)/2-espessura_parede, comprimento+(width-comprimento)/2, height-(height-altura)/2-espessura_parede, x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  //distancia_ParedeB = abs(-y-versor_carro[1]*35+height-(height-altura)/2-espessura_parede)  //quero automatizar para qualquer reta
  if(hit_frente_ParedeB){
    colisao((width-comprimento)/2, height-(height-altura)/2-espessura_parede, comprimento+(width-comprimento)/2, height-(height-altura)/2-espessura_parede)
  }
  //parede esquerda
  hit_frente_ParedeE = collideLineCircle((width-comprimento)/2+espessura_parede, (height-altura)/2, (width-comprimento)/2+espessura_parede, height-(height-altura)/2, x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  //distancia_ParedeE = abs(-x-versor_carro[0]*35+(width-comprimento)/2+espessura_parede)
  if(hit_frente_ParedeE){
    colisao((width-comprimento)/2+espessura_parede, (height-altura)/2, (width-comprimento)/2+espessura_parede, height-(height-altura)/2)
  }
  //parede direita
  hit_frente_ParedeD = collideLineCircle(comprimento+(width-comprimento)/2-espessura_parede, (height-altura)/2, comprimento+(width-comprimento)/2-espessura_parede, height-(height-altura)/2, x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  //distancia_ParedeD = abs(-x-versor_carro[0]*35+comprimento+(width-comprimento)/2-espessura_parede)
  if(hit_frente_ParedeD){
    colisao(comprimento+(width-comprimento)/2-espessura_parede, (height-altura)/2, comprimento+(width-comprimento)/2-espessura_parede, height-(height-altura)/2)
  }
  //obj1
  hit_frente_Obj1 = collideLineCircle(110,360,910,360,x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  if(hit_frente_Obj1){
    colisao(110,360,910,360)
  }
//DERROTA E VITORIA
  //vitoria
  hit_frente_Faixa = collideLineCircle(170, 365, 170, 655,x+versor_carro[0]*35,y+versor_carro[1]*35, 2*raioHitbox+0.001)
  if(hit_frente_Faixa){
    vitoria=true
  }
  if(yayando==false && hit_frente_Faixa){
    yayando = true
    if(som%2==0){
      yay.play()
    }
  }
  if(vitoria){
    push()
    controleshabilitados=false
    if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210 && mouseIsPressed){
      imageMode(CENTER)
image(vitoriavoltar,width/2,height/2,800,800*vitoriavoltar.height/vitoriavoltar.width)
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410 && mouseIsPressed){
      imageMode(CENTER)
image(vitoriamenu,width/2,height/2,800,800*vitoriamenu.height/vitoriamenu.width)
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410 && mouseIsPressed){
      imageMode(CENTER)
image(vitoriaretry,width/2,height/2,800,800*vitoriaretry.height/vitoriaretry.width)
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410 && mouseIsPressed){
      imageMode(CENTER)
image(vitoriaproximafase,width/2,height/2,800,800*vitoriaproximafase.height/vitoriaproximafase.width)
    }else{
      if((tempo0a3).toFixed(0)==0){
      imageMode(CENTER)
      image(vitoria1,width/2,height/2,800,800*vitoria1.height/vitoria1.width)
    }else if((tempo0a3).toFixed(0)==1){
      imageMode(CENTER)
      image(vitoria2,width/2,height/2,800,800*vitoria2.height/vitoria2.width)
    }else if((tempo0a3).toFixed(0)==2){
      imageMode(CENTER)
      image(vitoria3,width/2,height/2,800,800*vitoria3.height/vitoria3.width)
    }else if((tempo0a3).toFixed(0)==3){
      imageMode(CENTER)
      image(vitoria4,width/2,height/2,800,800*vitoria4.height/vitoria4.width)
    }
  }
    pop()
    }
  //derrota
    //bateu em qualquer parede
  if(hit_frente_ParedeC || hit_frente_ParedeB || hit_frente_ParedeE || hit_frente_ParedeD || hit_frente_Obj1){
    bateu=true
  }else{
    bateu=false
  }
  if(bateu){
    controleshabilitados = false
    tempoBatida++
    if(tempoBatida<12){
      push()
      imageMode(CENTER)
image(explosao,x+50*versor_carro[0],y+50*versor_carro[1],100,100*explosao.width/explosao.height)
      pop()
    }else if(vitoria==false){
      derrota = true
    }
  }else{
    tempoBatida=0
  }
  if(derrota==true){
    //RESTART
    pressionandoCarro=false
    controleshabilitados = true
    x=195
    y=220
    velocidade[0]=0
    velocidade[1]=0
    versor_carro[0]=1
    versor_carro[1]=0
    derrota=false
    yayando=false
  }
//DEBUG
  /*
  //colisao
  line((width-comprimento)/2, height-(height-altura)/2-espessura_parede, comprimento+(width-comprimento)/2, height-(height-altura)/2-espessura_parede)
  line((width-comprimento)/2+espessura_parede, (height-altura)/2, (width-comprimento)/2+espessura_parede, height-(height-altura)/2)
  line(comprimento+(width-comprimento)/2-espessura_parede, (height-altura)/2, comprimento+(width-comprimento)/2-espessura_parede, height-(height-altura)/2)
  line((width-comprimento)/2, (height-altura)/2+espessura_parede, (width-comprimento)/2+comprimento, (height-altura)/2+espessura_parede)
  
  push()
  if(hit_frente_ParedeB){
    fill(110,0,0)
    text("Parede Baixo",0 ,215)
  }else{
    fill(0,110,0)
    text("Parede Baixo",0 ,215)
  }
  if(hit_frente_ParedeC){
    fill(110,0,0)
    text("Parede Cima",0 ,230)
  }else{
    fill(0,110,0)
    text("Parede Cima",0 ,230)
  }
  if(hit_frente_ParedeE){
    fill(110,0,0)
    text("Parede Esquerda",0 ,245)
  }else{
    fill(0,110,0)
    text("Parede Esquerda ",0 ,245)
  }
  if(hit_frente_ParedeD){
    fill(110,0,0)
    text("Parede Direita",0 ,260)
  }else{
    fill(0,110,0)
    text("Parede Direita",0 ,260)
  }
  pop()
  push()
  translate(x,y)
line(versor_carro[0]*-62.5,versor_carro[1]*-62.5,versor_carro[0]*62.5,versor_carro[1]*62.5)
  pop()
  push()
  textSize(12)
  text("pressionandoCarro: ",0,10)
  text("velocidade: "+(mag(velocidade[0],velocidade[1])).toFixed(1),0,25)
  text("vetor_flecha: "+(mag(vetor_flecha[0],vetor_flecha[1])).toFixed(1),0,40)
  text("bateu: "+bateu,0,130)
  text("Tempo de batida: "+tempoBatida,0,145)
  text("derrota: "+derrota,0,160)
  text("vitoria: "+vitoria,0,175)
  pop()
  push()
  if(pressionandoCarro==true){
    fill(0,150,0)
    text(pressionandoCarro,110,10)
  }
  if(pressionandoCarro==false){
    fill(150,0,0)
    text(pressionandoCarro,110,10)
  }
  pop()
  push()
  textAlign(CENTER)
  text(mouseX+" "+mouseY,mouseX,mouseY-10)
  pop()
  */
}