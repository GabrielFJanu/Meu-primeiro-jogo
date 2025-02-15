function cap1f3() {
//FUNDO
  background(220);
//ERRO
  push()
  fill(30*-cos(35*tempoerro)+30+220,220,220)
  rect(347,45,582,630)
  pop()
//FUNDO2
  background(papel)
//TEMPO
  t++
  if(tempo0a3<3){
      tempo0a3+=0.05
    }else{
      tempo0a3=0
    }
  if(tempo0a2<2.9){
      tempo0a2+=0.025
    }else{
      tempo0a2 = 0
    }
  if(erro){
    if(tempoerro<22){
      tempoerro++
    }else{
      erro = false
      tempoerro=0
    }
  }
//ALVO
  push()
  imageMode(CENTER)
  image(alvo,x_alvo,y_alvo,raioAlvo,raioAlvo*alvo.height/alvo.width)
  pop()
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
  pop()
//TEXTO
  push()
  textSize(24)
  text("Você tem ",10,height/2)
  if(N-contador_vetores>1){
    text(" vetores",130,height/2)
  }else{
    text(" vetor",130,height/2)
  }
  text("*Regra Da Fase: \nOs 2 vetores têm que ser do \n               tamanho",10,height/2+50)
  fill(220,100,100)
  text("MESMO",10,470)
  pop()
  push()
  fill(220,100,100)
  textSize(32)
  text(N-contador_vetores,115,height/2)
  pop()
//BOTOES
  if(vitoria==false){
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130 && mouseIsPressed){
    image(botaovoltarapertado,45,45)
  }else{
    image(botaovoltar[parseInt(tempo0a2)],45,45)
  }
  }
//CONTROLES
  if(keyIsDown(32) && apertando_espaço==false){
    apertando_espaço=true
  if(mag(vetor[contador_vetores][0],vetor[contador_vetores][1])!=0){
      contador_vetores++
    }else if(contador_vetores==2 && mag(vetor[contador_vetores][0],vetor[contador_vetores][1])==0){
      mostrando_vetor_resultante=true
      for(e=1,soma_vetoresx=0,soma_vetoresy=0;e<=N;e++){
        soma_vetoresx+= vetor[e-1][0]
        soma_vetoresy+= vetor[e-1][1]
        if(e!=N && contador_vetores==e && mag(vetor[e][0],vetor[e][0])==0){
          vetor_resultante[0]= soma_vetoresx
          vetor_resultante[1]= soma_vetoresy
        }else if(contador_vetores==N){
          vetor_resultante[0]= soma_vetoresx
          vetor_resultante[1]= soma_vetoresy
        }
      }
 velocidade[0]+=3*vetor_resultante[0]/mag(vetor_resultante[0],vetor_resultante[1])
 velocidade[1]+=3*vetor_resultante[1]/mag(vetor_resultante[0],vetor_resultante[1])
    }
  }else if(keyIsDown(32)==false){
      apertando_espaço=false
    }
  {
  let xi = x0
  let yi = y0
  for(a=0;a<N;a++){
     if(mag(vetor[a][0],vetor[a][1])!=0 && contador_vetores>a){
        //seta
      push()
      translate(xi,yi)
      let v0 = createVector(vetor[a][0],vetor[a][1])
      let v1 = createVector(1,0)
      rotate(v1.angleBetween(v0))
      translate(-xi,-yi)
      translate(xi+mag(vetor[a][0],vetor[a][1])/2,yi)
      imageMode(CENTER)
       //ultima seta
       if(a==contador_vetores-1 && mostrando_vetor_resultante==false){
         tint(255,255*sin(4*t),255*sin(4*t))
       }else{
         tint(235,0,0)
       }
    image(flecha3,0,0,mag(vetor[a][0],vetor[a][1]),20+0.2*mag(vetor[a][0],vetor[a][1])*flecha3.height/flecha3.width)
      pop()
    }
    xi+=vetor[a][0]
    yi+=vetor[a][1]
   }
  }
  
  for(b=0;b<N;b++){
    mapa[b] = mapa[b].replace('cb', '')
    mapa[b] = mapa[b].replace('bc', '')
    mapa[b] = mapa[b].replace('de', '')
    mapa[b] = mapa[b].replace('ed', '') 
  }
  
  {
  let xi = x0
  let yi = y0
  for(c=0;c<N;c++){
    if(contador_vetores==c){
    let x_vetorzinho = xi
    let y_vetorzinho = yi
    push()
    textSize(65)
    for(let i=0;i<mapa[c].length;i++){
      if(mapa[c][i]=="c"){
        textAlign(CENTER)
        text("🠕",x_vetorzinho,y_vetorzinho-6.5)
        y_vetorzinho+=-50
      }else if(mapa[c][i]=="b"){
        textAlign(CENTER)
        text("🠗",x_vetorzinho,y_vetorzinho+50)
        y_vetorzinho+=50
      }else if(mapa[c][i]=="d"){
        textAlign(LEFT)
        text("🠖",x_vetorzinho,y_vetorzinho+22.5)
        x_vetorzinho+=50
      }else{
        textAlign(RIGHT)
        text("🠔",x_vetorzinho,y_vetorzinho+22.5)
        x_vetorzinho+=-50
      }
    }
    pop()
  }
    xi+=vetor[c][0]
    yi+=vetor[c][1]
  }
  }
  //vetor resultante
  if(mostrando_vetor_resultante){
    if(mag(vetor_resultante[0],vetor_resultante[1])!=0 && contador_vetores>=1){
        //seta
      push()
      translate(x0,y0)
      let v0 = createVector(vetor_resultante[0],vetor_resultante[1])
      let v1 = createVector(1,0)
      rotate(v1.angleBetween(v0))
      translate(-x0,-y0)
      translate(x0+mag(vetor_resultante[0],vetor_resultante[1])/2,y0)
      imageMode(CENTER)
      tint(0,195,0)
    image(flecha3,0,0,mag(vetor_resultante[0],vetor_resultante[1]),20+0.1*mag(vetor_resultante[0],vetor_resultante[1])*flecha3.height/flecha3.width)
      pop()
    }
    /*
    ellipse(x0+vetor_resultante[0],y0+vetor_resultante[1],20)
    */
    if(mag(x-(x0+vetor_resultante[0]),y-(y0+vetor_resultante[1]))<=mag(velocidade[0],velocidade[1])){
      velocidade[0]=0
      velocidade[1]=0
    }
  }
//BONECO
  if(vitoria==false){
    push()
    imageMode(CENTER)
    translate(x,y)
    if(mag(velocidade[0],velocidade[1])>0){
      if(beta<360){
        beta++
      }else{
        beta=0
      }
      rotate(10*sin(20*beta))
    }
    image(boneco[0],0,0,60,60*boneco[0].height/boneco[0].width)
    pop()
  }else{
    push()
    imageMode(CENTER)
    image(boneco[1],x,y,60,60*boneco[1].height/boneco[1].width)
    pop()
  }
  /*
//Hitbox
  push()
  strokeWeight(2)
  noFill()
  ellipse(x,y,raioHitbox*2)
  pop()
  */
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
    versor_boneco[0] = versor_velocidade[0]
    versor_boneco[1] = versor_velocidade[1]
  }
  if(mag(vetor_mouse[0],vetor_mouse[1])!=0){
    versor_mouse[0]= vetor_mouse[0]/mag(vetor_mouse[0],vetor_mouse[1])
    versor_mouse[1]= vetor_mouse[1]/mag(vetor_mouse[0],vetor_mouse[1])
  }else{
    versor_mouse[0]=0
    versor_mouse[1]=0
  }
//FÍSICA
  velocidade[0] +=0
  velocidade[1] +=0
  x+=velocidade[0]
  y+=velocidade[1]
  
  //colisão e consequências
  //parede cima
  hit_frente_ParedeC = collideLineCircle((width-comprimento)/2, (height-altura)/2+espessura_parede, (width-comprimento)/2+comprimento, (height-altura)/2+espessura_parede, x,y, 2*raioHitbox+0.001)
  if(hit_frente_ParedeC){
    colisaoboneco((width-comprimento)/2, (height-altura)/2+espessura_parede, (width-comprimento)/2+comprimento, (height-altura)/2+espessura_parede)
  }
  //parede baixo
  hit_frente_ParedeB = collideLineCircle((width-comprimento)/2, height-(height-altura)/2-espessura_parede, comprimento+(width-comprimento)/2, height-(height-altura)/2-espessura_parede, x,y, 2*raioHitbox+0.001)
  if(hit_frente_ParedeB){
    colisaoboneco((width-comprimento)/2, height-(height-altura)/2-espessura_parede, comprimento+(width-comprimento)/2, height-(height-altura)/2-espessura_parede)
  }
  //parede esquerda
  hit_frente_ParedeE = collideLineCircle((width-comprimento)/2+espessura_parede, (height-altura)/2, (width-comprimento)/2+espessura_parede, height-(height-altura)/2, x,y, 2*raioHitbox+0.001)
  if(hit_frente_ParedeE){
    colisaoboneco((width-comprimento)/2+espessura_parede, (height-altura)/2, (width-comprimento)/2+espessura_parede, height-(height-altura)/2)
  }
  //parede direita
  hit_frente_ParedeD = collideLineCircle(comprimento+(width-comprimento)/2-espessura_parede, (height-altura)/2, comprimento+(width-comprimento)/2-espessura_parede, height-(height-altura)/2, x,y, 2*raioHitbox+0.001)
  if(hit_frente_ParedeD){
    colisaoboneco(comprimento+(width-comprimento)/2-espessura_parede, (height-altura)/2, comprimento+(width-comprimento)/2-espessura_parede, height-(height-altura)/2)
  }
//VITORIA E DERROTA
  //vitoria
  if(mag(x-x_alvo,y-y_alvo)<=raioAlvo && derrota==false){
    vitoria=true
  }
  if(vitoria){
    if(yayando==false){
    yayando = true
    if(som%2==0){
      yay.play()
    }
  }
    push()
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
      if(parseInt(tempo0a3)==0){
      imageMode(CENTER)
      image(vitoria1,width/2,height/2,800,800*vitoria1.height/vitoria1.width)
    }else if(parseInt(tempo0a3)==1){
      imageMode(CENTER)
      image(vitoria2,width/2,height/2,800,800*vitoria2.height/vitoria2.width)
    }else if(parseInt(tempo0a3)==2){
      imageMode(CENTER)
      image(vitoria3,width/2,height/2,800,800*vitoria3.height/vitoria3.width)
    }else if(parseInt(tempo0a3)==3){
      imageMode(CENTER)
      image(vitoria4,width/2,height/2,800,800*vitoria4.height/vitoria4.width)
    }
  }
    pop()
  }
  //derrota
  if(vitoria==false){
    if(hit_frente_ParedeC || hit_frente_ParedeB || hit_frente_ParedeE || hit_frente_ParedeD){
      derrota = true
    }
    if(mostrando_vetor_resultante && mag(velocidade[0],velocidade[1])==0){
      derrota=true
    }
    if(contador_vetores==2 && mag(vetor[0][0],vetor[0][1])!=0 && mag(vetor[1][0],vetor[1][1])!=0 && mag(vetor[0][0],vetor[0][1])!=mag(vetor[1][0],vetor[1][1])){
      derrota = true
      erro = true
    }
  }
  if(derrota){
    derrota = false
    //RETRY
      x=430
      y=3*height/4+45
      velocidade[0]=0
      velocidade[1]=0
      versor_boneco[0]=0
      versor_boneco[1]=-1
      vetor = [
      [0,0],
      [0,0],
      [0,0],
      [0,0],
      [0,0],
      ]
      mapa = [
      "",
      "",
      "",
      "",
      ]
      vetor_resultante = [0,0]
      contador_vetores = 0
      mostrando_vetor_resultante = false
      andando=false
      t = 0
  }
//DEBUG
  /*
  //alvo
  push()
  noFill()
  ellipse(x_alvo,y_alvo,raioAlvo)
  pop()
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
line(versor_boneco[0]*-raioHitbox,versor_boneco[1]*-raioHitbox,versor_boneco[0]*raioHitbox,versor_boneco[1]*raioHitbox)
  pop()
  push()
  textSize(12)
  text("velocidade: "+(mag(velocidade[0],velocidade[1])).toFixed(1),0,25)
  text("vitoria: "+vitoria,0,40)
  text("derrota: "+derrota,0,55)
  text("mapa[0] : "+mapa[0],0,70)
  text("mapa[1] : "+mapa[1],0,85)
  text("mapa[2] : "+mapa[2],0,100)
  text("contador vetores: "+contador_vetores,0,115)
  text("vetor[0] : "+vetor[0][0]+" "+vetor[0][1],0,130)
  text("vetor[1] : "+vetor[1][0]+" "+vetor[1][1],0,145)
  text("vetor[2] : "+vetor[2][0]+" "+vetor[2][1],0,160)
  text("mostrando vetor resultante: "+mostrando_vetor_resultante,0,175)
  text("vetor resultante: "+vetor_resultante[0]+" "+vetor_resultante[1],0,190)
  text("apertando espaço: "+apertando_espaço,0,205)
  text("andando: "+andando,0,275)
  pop()
  push()
  textAlign(CENTER)
  text(mouseX+" "+mouseY,mouseX,mouseY-10)
  pop()
  */
}