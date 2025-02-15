function mouseReleased(){
  if(tela=="menu"){
    if(mouseX>450 && mouseX<770 && mouseY>235 && mouseY<305){
      botaojogarsolto = true
    }else{
      botaojogarsolto=false
    }
    if(mouseX>450 && mouseX<770 && mouseY>340 && mouseY<415){
      botaoopçõessolto = true
    }else{
      botaoopçõessolto=false
    }
    if(mouseX>450 && mouseX<770 && mouseY>445 && mouseY<520){
      botaoinstruçõessolto = true
    }else{
      botaoinstruçõessolto=false
    }
    if(mouseX>450 && mouseX<770 && mouseY>550 && mouseY<625){
      botaocréditossolto = true
    }else{
      botaocréditossolto=false
    }
  }else if(tela=="cap1"){
    if(mouseX>335 && mouseX<495 && mouseY>280 && mouseY<420){
      tela = "tutorial1"
      tutorial_frame = 0
    }
    if(mouseX>545 && mouseX<705 && mouseY>280 && mouseY<420){
      tela="cap1f2"
      comprimento=900
      altura=150
      x=width/2-400
      y=height/2
      x0=x
      y0=y
      angleMode(DEGREES)
      x_alvo=1030
      y_alvo=height/2
      //vAR CAP1FASE1
      raioHitbox = 27.5
      versor_boneco = new Array(0,-1)
      vetor_mouse = new Array(0,0)
      velocidade = new Array(0,0)
      versor_velocidade = new Array(0,0)
      versor_mouse = new Array(0,0)
      espessura_parede = 10
      beta = 0
      vitoria = false
      derrota = false
      raioAlvo = 70
      vetor = [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
      ]
      contador_vetores = 0
      mapa = [
        "",
        "",
        "",
        "",
      ]
      N = 3
      vetor_resultante = new Array(0,0)
      mostrando_vetor_resultante = false
      apertando_espaço=false
      t = 0
      versor_resultante = new Array(0,0)
      andando = false
      erro=false
      yayando=false
    }
    if(mouseX>740 && mouseX<900 && mouseY>280 && mouseY<420){
      tela="cap1f3"
      comprimento=600
      altura=650
      x=430
      y=3*720/4+45
      x0=x
      y0=y
      angleMode(DEGREES)
      x_alvo=875
      y_alvo=100
      //vAR CAP1FASE1
      raioHitbox = 27.5
      versor_boneco = new Array(0,-1)
      vetor_mouse = new Array(0,0)
      velocidade = new Array(0,0)
      versor_velocidade = new Array(0,0)
      versor_mouse = new Array(0,0)
      espessura_parede = 10
      beta = 0
      vitoria = false
      derrota = false
      raioAlvo = 70
      vetor = [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
      ]
      contador_vetores = 0
      mapa = [
        "",
        "",
        "",
        "",
      ]
      N = 2
      vetor_resultante = new Array(0,0)
      mostrando_vetor_resultante = false
      apertando_espaço=false
      t = 0
      versor_resultante = new Array(0,0)
      andando = false
      erro=false
      yayando=false
    }
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "menu"
    }
    if(mouseX>1160 && mouseX<1220 && mouseY>290 && mouseY<420){
      tela="cap2"
    }
  }else if(tela=="cap1f1"){
    if(vitoria){
      if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210){
      tela = "cap1"
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410){
      tela = "cap1"
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410){
        //RETRY
        vitoria=false
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
        yayando=false
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410){
      tela="cap1f2"
      comprimento=900
      altura=150
      x=width/2-400
      y=height/2
      x0=x
      y0=y
      angleMode(DEGREES)
      x_alvo=1030
      y_alvo=height/2
      //vAR CAP1FASE1
      raioHitbox = 27.5
      versor_boneco = new Array(0,-1)
      vetor_mouse = new Array(0,0)
      velocidade = new Array(0,0)
      versor_velocidade = new Array(0,0)
      versor_mouse = new Array(0,0)
      espessura_parede = 10
      beta = 0
      vitoria = false
      derrota = false
      raioAlvo = 70
      vetor = [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
      ]
      contador_vetores = 0
      mapa = [
        "",
        "",
        "",
        "",
      ]
      N = 3
      vetor_resultante = new Array(0,0)
      mostrando_vetor_resultante = false
      apertando_espaço=false
      t = 0
      versor_resultante = new Array(0,0)
      andando = false
      erro=false
      yayando=false
    }
    }else if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "cap1"
    }
  }else if(tela=="tutorial1"){
    if(tutorial_frame==0){
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445){
      tutorial_frame++
    }
  }else if(tutorial_frame==1){
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445){
      tutorial_frame--
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445){
      tutorial_frame++
    }
  }else if(tutorial_frame==2){
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445){
      tutorial_frame--
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445){
      tutorial_frame++
    }
  }else if(tutorial_frame==3){
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445){
      tutorial_frame--
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445){
      tutorial_frame++
    }
  }else if(tutorial_frame==4){
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445){
      tutorial_frame--
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445){
      tela="cap1f1"
      comprimento=600
      altura=650
      x=430
      y=3*720/4+45
      x0=x
      y0=y
      angleMode(DEGREES)
      x_alvo=875
      y_alvo=100
      //vAR CAP1FASE1
      raioHitbox = 27.5
      versor_boneco = new Array(0,-1)
      vetor_mouse = new Array(0,0)
      velocidade = new Array(0,0)
      versor_velocidade = new Array(0,0)
      versor_mouse = new Array(0,0)
      espessura_parede = 10
      beta = 0
      vitoria = false
      derrota = false
      raioAlvo = 70
      vetor = [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
      ]
      contador_vetores = 0
      mapa = [
        "",
        "",
        "",
        "",
      ]
      N = 1
      vetor_resultante = new Array(0,0)
      mostrando_vetor_resultante = false
      apertando_espaço=false
      t = 0
      versor_resultante = new Array(0,0)
      andando = false
      erro=false
      yayando=false
    }
  }
  }else if(tela=="cap1f2"){
    if(vitoria){
      if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210){
      tela = "cap1"
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410){
      tela = "cap1"
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410){
        //RETRY
        vitoria = false
        x=width/2-400
        y=height/2
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
        yayando =false
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410){
      tela="cap1f3"
      comprimento=600
      altura=650
      x=430
      y=3*720/4+45
      x0=x
      y0=y
      angleMode(DEGREES)
      x_alvo=875
      y_alvo=100
      //vAR CAP1FASE1
      raioHitbox = 27.5
      versor_boneco = new Array(0,-1)
      vetor_mouse = new Array(0,0)
      velocidade = new Array(0,0)
      versor_velocidade = new Array(0,0)
      versor_mouse = new Array(0,0)
      espessura_parede = 10
      beta = 0
      vitoria = false
      derrota = false
      raioAlvo = 70
      vetor = [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
      ]
      contador_vetores = 0
      mapa = [
        "",
        "",
        "",
        "",
      ]
      N = 2
      vetor_resultante = new Array(0,0)
      mostrando_vetor_resultante = false
      apertando_espaço=false
      t = 0
      versor_resultante = new Array(0,0)
      andando = false
      erro=false
      yayando=false
    }
    }else if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "cap1"
    }
  }else if(tela=="cap1f3"){
    if(vitoria){
      if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210){
      tela = "cap1"
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410){
      tela = "cap1"
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410){
        //RETRY
        vitoria=false
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
        yayando=false
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410){
      tela = "cap2"
    }
    }else if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "cap1"
    }
  }else if(tela=="cap2"){
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "menu"
    }else if(mouseX>65 && mouseX<120 && mouseY>285 && mouseY<420){
      tela= "cap1"
    }else if(mouseX>270 && mouseX<420 && mouseY>280 && mouseY<420){
      tela="tutorial2"
    }else if(mouseX>460 && mouseX<610 && mouseY>280 && mouseY<420){
      tela="cap2f2"
      //SETUP
      angleMode(DEGREES)
      comprimento=0.84*width
      altura=0.84*height
      x=195
      y=220
      //VAR
      raioHitbox = 27.5
      espessura_parede = 10
      vitoria = false
      derrota = false
      pressionandoCarro=false
      controleshabilitados=true
      yayando = false
      vetor_flecha = new Array(0,0)
      versor_carro = new Array(1,0)
    }else if(mouseX>660 && mouseX<805 && mouseY>290 && mouseY<420){
      
    }else if(mouseX>855 && mouseX<1015 && mouseY>290 && mouseY<420){
      
    }
  }else if(tela=="cap2f1"){
    if(vitoria){
      if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210){
      tela = "cap2"
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410){
      tela = "cap2"
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410){
      vitoria=false
      //RESTART
      controleshabilitados=true
      x=185
      y=585
      velocidade[0]=0
      velocidade[1]=0
      versor_carro[0]=1280/2156800**(1/2)
      versor_carro[1]=-720/2156800**(1/2)
      yayando=false
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410){
      tela="cap2f2"
      //SETUP
      angleMode(DEGREES)
      comprimento=0.84*width
      altura=0.84*height
      x=195
      y=220
      //VAR
      raioHitbox = 27.5
      espessura_parede = 10
      vitoria = false
      derrota = false
      pressionandoCarro=false
      controleshabilitados=true
      yayando = false
      vetor_flecha = new Array(0,0)
      versor_carro = new Array(1,0)
    }
    }else if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "cap2"
    }
  }else if(tela=="tutorial2"){
    if(mouseX>1155 && mouseX<1225 && mouseY>295 && mouseY<430){
      tela = "cap2f1"
      //SETUP
      angleMode(DEGREES)
      comprimento=0.84*width
      altura=0.84*height
      x=185
      y=585
      //VAR
      raioHitbox = 27.5
      espessura_parede = 10
      vitoria = false
      derrota = false
      pressionandoCarro=false
      controleshabilitados=true
      yayando = false
      vetor_flecha = new Array(0,0)
      versor_carro = new Array(1280/2156800**(1/2),-720/2156800**(1/2))
    }
  }else if(tela=="cap2f2"){
    if(vitoria){
      if(mouseX>270 && mouseX<360 && mouseY>150 && mouseY<210){
      tela = "cap2"
    }else if(mouseX>475 && mouseX<580 && mouseY>330 && mouseY<410){
      tela = "cap2"
    }else if(mouseX>585 && mouseX<690 && mouseY>330 && mouseY<410){
      vitoria=false
      //RESTART
      controleshabilitados=true
      x=195
      y=220
      velocidade[0]=0
      velocidade[1]=0
      versor_carro[0]=1
      versor_carro[1]=0
      yayando=false
    }else if(mouseX>695 && mouseX<800 && mouseY>330 && mouseY<410){
      
    }
    }else if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "cap2"
    }
  }else if(tela=="opções"){
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "menu"
    }else if(mouseX>420 && mouseX<515 && mouseY>315 && mouseY<405){
      som++
    }
  }else if(tela=="instruções"){
    if(insttuto2==1){
      if(mouseX>1155 && mouseX<1225 && mouseY>295 && mouseY<430){
        insttuto2++
      }
    }
    if(insttuto1==1){
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450){
      insttuto1++
    }
  }else if(insttuto1==2){
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450){
      insttuto1++
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445){
      insttuto1--
    }
  }else if(insttuto1==3){
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450){
      insttuto1++
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445){
      insttuto1--
    }
  }else if(insttuto1==4){
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450){
      insttuto1++
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445){
      insttuto1--
    }
  }else if(insttuto1==5){
    if(mouseX>1200 && mouseX<1255 && mouseY>340 && mouseY<450){
      insttuto1++
    }else if(mouseX>20 && mouseX<85 && mouseY>65 && mouseY<445){
      insttuto1--
    }
  }
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "menu"
      insttuto1=0
      insttuto2=0
    }else if(mouseX>310 && mouseX<620 && mouseY>500 && mouseY<605){
      insttuto1++
    }else if(mouseX>665 && mouseX<990 && mouseY>500 && mouseY<605){
      insttuto2++
    }
  }else if(tela=="créditos"){
    if(mouseX>45 && mouseX<175 && mouseY>45 && mouseY<130){
      tela = "menu"
    }
  }
}