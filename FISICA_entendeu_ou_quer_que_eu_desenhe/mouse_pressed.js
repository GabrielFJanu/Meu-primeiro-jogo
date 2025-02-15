function mousePressed(){
  if(tela=="cap2f1"){
    if(controleshabilitados){
    push()
  translate(x,y)
  if((mouseX-x)**2+(mouseY-y)**2<=raioHitbox**2 || (mouseX-x-versor_carro[0]*35)**2+(mouseY-y-versor_carro[1]*35)**2<=raioHitbox**2 || (mouseX-x-versor_carro[0]*-35)**2+(mouseY-y-versor_carro[1]*-35)**2<=raioHitbox**2){
    pressionandoCarro = true
  }
  pop()
  }
  }else if(tela=="cap2f2"){
    if(controleshabilitados){
    push()
  translate(x,y)
  if((mouseX-x)**2+(mouseY-y)**2<=raioHitbox**2 || (mouseX-x-versor_carro[0]*35)**2+(mouseY-y-versor_carro[1]*35)**2<=raioHitbox**2 || (mouseX-x-versor_carro[0]*-35)**2+(mouseY-y-versor_carro[1]*-35)**2<=raioHitbox**2){
    pressionandoCarro = true
  }
  pop()
  }
  }
}