//Nome: Gabriel de Freitas januário
//http://www.colabeduc.org/descricao/show/1521
//http://www.colabeduc.org/projeto/show/1728
//https://www.youtube.com/watch?v=J0OiHzmeq8s
//VAR TELAS
var tela = "menu"
//VAR VETORES IMAGEM
var newtongif = []
var menu = []
var lapis = []
var base = []
var botaovoltar = []
var boneco = []
var tutorial = []
var tutorialesquerda = []
var tutorialdireita = []
//VAR TEMPOS
var tempo0a29 = 0
var tempo0a2 = 0
var tempo0a7 = 0
var tempo0a3 = 0
var tempoerro = 0
//VAR BOOLEANAS
var botaojogarsolto = false
var botaoopçõessolto = false
var botaoinstruçõessolto = false
var botaocréditossolto = false
var cap1f1 = false
var cap1f2 = false
var cap1f3 = false
var cap1f1solto = false
var cap1f2solto = false
var cap1f3solto = false
var cap1direita = false
var cap1direitasolto = false
var voltar = false
var voltarsolto = false
//VAR TUTORIAL
var tutorial_frame = 0
//vAR CAP1
var x,y
var raioHitbox
var versor_boneco = new Array(0,-1)
var vetor_mouse = new Array(0,0)
var velocidade = new Array(0,0)
var versor_velocidade = new Array(0,0)
var versor_mouse = new Array(0,0)
var espessura_parede
var beta
var x_alvo,y_alvo
var vitoria = false
var derrota = false
var raioAlvo
var vetor = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
]
var contador_vetores
var mapa = [
  "",
  "",
  "",
  "",
]
var N
var vetor_resultante = new Array(0,0)
var mostrando_vetor_resultante = false
var apertando_espaço=false
var t
var versor_resultante = new Array(0,0)
var x0,y0
var andando = false
//VAR CAP1F2
erro= false
//VAR CAP2F1
//var x,y
//var raioHitbox = 27.5
var versor_carro = new Array(0,0)
var pressionandoCarro
//var vetor_mouse = new Array(0,0)
//var velocidade = new Array(0,0)
//var versor_velocidade = new Array(0,0)
//var versor_mouse = new Array(0,0)
var vetor_flecha = new Array(0,0)
//var espessura_parede = 10
var bateu
var tempoBatida=0
//var tempo0a3=0
//var vitoria = false
//var derrota = false
var controleshabilitados
var yayando
//VAR OPÇÔES
var som = 0
//INSTRUÇÕES
var insttuto1=0
var insttuto2=0
function preload(){
  for(var i=0;i<=29;i++){
    newtongif[i] = loadImage('7a992b8f-bc2b-410e-839e-1c5b59edc226-'+(i+82)+'.png')
  }
  for(var u=0;u<=7;u++){
    lapis[u] = loadImage('lapis-'+(u)+'.png')
  }
  menu[0] = loadImage("menu00.png")
  menu[1] = loadImage("menu01.png")
  menu[2] = loadImage("menu02.png")
  menujogar = loadImage("menujogar.png")
  menuopções = loadImage("menuopções.png")
  menuinstruções = loadImage("menuinstruções.png")
  menucréditos = loadImage("menucréditos.png")
  papel = loadImage("papel.png")
  fundoanotações = loadImage("fundoanotações.png")
  base[0] = loadImage("base0.png")
  base[1] = loadImage("base1.png")
  base[2] = loadImage("base2.png")
  fases1 = loadImage("fases1.png")
  lapispapel = loadImage("lapispapel.png")
  maça = loadImage("maça.png")
  fases1f1 = loadImage("fases1f1.png")
  fases1f2 = loadImage("fases1f2.png")
  fases1f3 = loadImage("fases1f3.png")
  botaovoltar[0] = loadImage("botaovoltar01.png")
  botaovoltar[1] = loadImage("botaovoltar02.png")
  botaovoltar[2] = loadImage("botaovoltar03.png")
  botaovoltar[3] = loadImage("botaovoltar04.png")
  botaovoltarapertado = loadImage("botaovoltarapertado0.png")
  fases1direita = loadImage("fases1direita.png")
  flecha3 = loadImage("flecha3.png")
  boneco[0] = loadImage("boneco0.png")
  boneco[1] = loadImage("boneco1.png")
  alvo = loadImage("target.png")
  vitoria1 = loadImage("win1.png")
  vitoria2 = loadImage("win2.png")
  vitoria3 = loadImage("win3.png")
  vitoria4 = loadImage("win4.png")
  vitoriaproximafase = loadImage("winproximafase.png")
  vitoriaretry = loadImage("winretry.png")
  vitoriamenu = loadImage("winmenu.png")
  vitoriavoltar = loadImage("winvoltar.png")
  tutorial[0] = loadImage("tutorial0.png")
  tutorial[1] = loadImage("tutorial1.png")
  tutorial[2] = loadImage("tutorial2.png")
  tutorial[3] = loadImage("tutorial3.png")
  tutorial[4] = loadImage("tutorial4.png")
  tutorialesquerda[1] = loadImage("tutorial1esquerda.png")
  tutorialesquerda[2] = loadImage("tutorial2esquerda.png")
  tutorialesquerda[3] = loadImage("tutorial3esquerda.png")
  tutorialesquerda[4] = loadImage("tutorial4esquerda.png")
  tutorialdireita[0] = loadImage("tutorial0direita.png")
  tutorialdireita[1] = loadImage("tutorial1direita.png")
  tutorialdireita[2] = loadImage("tutorial2direita.png")
  tutorialdireita[3] = loadImage("tutorial3direita.png")
  tutorialdireita[4] = loadImage("tutorial4direita.png")
  fases2 = loadImage("fases2.png")
  fases2esquerda = loadImage("fases2esquerda.png")
  fases2f1 = loadImage("fases2f1.png")
  fases2f2 = loadImage("fases2f2.png")
  fases2f3 = loadImage("fases2f3.png")
  fases2f4 = loadImage("fases2f4.png")
  carro = loadImage("carro.png")
  flecha = loadImage("flecha.png")
  faixa = loadImage("faixa.png")
  explosao = loadImage("Explosion.png")
  tuto2 = loadImage("tuto2.png")
  tuto2direita = loadImage("tuto2direita.png")
  opções = loadImage("opções.png")
  opçõesmarcado = loadImage("opçõesmarcado.png")
  instruções = loadImage("instruções.png")
  instruçõescap1 = loadImage("instruçõescap1.png")
  instruçõescap2 = loadImage("instruçõescap2.png")
  créditos1 = loadImage("créditos1.png")
  locked = loadImage("locked.png")
  soundFormats('mp3')
  yay = loadSound("yay.mp3")
}
function produtoEscalar(a,b,c,d){
  produto_escalar=a*c + b*d
  return produto_escalar
}
function colisao(x0,y0,x1,y1){
  if(y1-y0==0){                              //horizontal
    line(x0,y0,x1,y1)
    let a = 0
    let b = -1
    let c = y0
    let distancia = abs(a*(x+versor_carro[0]*35)+b*(y+versor_carro[1]*35)+c)/mag(a,b)
    let n = new Array(0,1)
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1]))
    if(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1])!=0){
      x+=mod*-versor_carro[0]
      y+=mod*-versor_carro[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }else if(x1-x0==0){                        //vertical
    line(x0,y0,x1,y1)
    let a = -1
    let b = 0
    let c = x0
    let distancia = abs(a*(x+versor_carro[0]*35)+b*(y+versor_carro[1]*35)+c)/mag(a,b)
    let n = new Array(1,0)
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1]))
    if(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1])!=0){
      x+=mod*-versor_carro[0]
      y+=mod*-versor_carro[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }else{                                     //diagonal
    line(x0,y0,x1,y1)
    let a = (y1-y0)/(x1-x0)
    let b = -1
    let c = ((y1-y0)/(x1-x0))*(-x0)+y0
    let distancia = abs(a*(x+versor_carro[0]*35)+b*(y+versor_carro[1]*35)+c)/mag(a,b)
    let n = new Array(1/mag(1,-(x1-x0)/(y1-y0)),-(x1-x0)/(y1-y0)/mag(1,-(x1-x0)/(y1-y0)))
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1]))
    if(produtoEscalar(versor_carro[0],versor_carro[1],n[0],n[1])!=0){
      x+=mod*-versor_carro[0]
      y+=mod*-versor_carro[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }
}
function colisaoboneco(x0,y0,x1,y1){
  if(y1-y0==0){                              //horizontal
    line(x0,y0,x1,y1)
    let a = 0
    let b = -1
    let c = y0
    let distancia = abs(a*(x)+b*(y)+c)/mag(a,b)
    let n = new Array(0,1)
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1]))
    if(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1])!=0){
      x+=mod*-versor_boneco[0]
      y+=mod*-versor_boneco[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }else if(x1-x0==0){                        //vertical
    line(x0,y0,x1,y1)
    let a = -1
    let b = 0
    let c = x0
    let distancia = abs(a*(x)+b*(y)+c)/mag(a,b)
    let n = new Array(1,0)
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1]))
    if(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1])!=0){
      x+=mod*-versor_boneco[0]
      y+=mod*-versor_boneco[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }else{                                     //diagonal
    line(x0,y0,x1,y1)
    let a = (y1-y0)/(x1-x0)
    let b = -1
    let c = ((y1-y0)/(x1-x0))*(-x0)+y0
    let distancia = abs(a*(x)+b*(y)+c)/mag(a,b)
    let n = new Array(1/mag(1,-(x1-x0)/(y1-y0)),-(x1-x0)/(y1-y0)/mag(1,-(x1-x0)/(y1-y0)))
    let mod=(raioHitbox-distancia)/abs(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1]))
    if(produtoEscalar(versor_boneco[0],versor_boneco[1],n[0],n[1])!=0){
      x+=mod*-versor_boneco[0]
      y+=mod*-versor_boneco[1]
      velocidade[0]=0
      velocidade[1]=0
    }
  }
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  if(tela=="menu"){
    menu()
  }
  else if(tela=="opções"){
    opcoes()
  }
  else if(tela=="instruções"){
    instrucoes()
  }
  else if(tela=="créditos"){
    creditos()
  }
  else if(tela=="cap1"){
    cap1()
  }
  else if(tela=="cap2"){
    cap2()
  }
  else if(tela=="cap1f1"){
    cap1f1()
  }
  else if(tela=="cap1f2"){
    cap1f2()
  }
  else if(tela=="cap1f3"){
    cap1f3()
  }
  else if(tela=="tutorial1"){
    tutorial1()
  }
  else if(tela=="tutorial2"){
    tutorial2()
  }
  else if(tela=="cap2f1"){
    cap2f1()
  }
  else if(tela=="cap2f2"){
    cap2f2()
  }
}