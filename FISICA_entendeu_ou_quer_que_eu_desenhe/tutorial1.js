function tutorial1(){
  if(tutorial_frame==0){
    background(tutorial[0])
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialdireita[0])
    }
  }else if(tutorial_frame==1){
    background(tutorial[1])
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[1])
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialdireita[1])
    }
  }else if(tutorial_frame==2){
    background(tutorial[2])
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[2])
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialdireita[2])
    }
  }else if(tutorial_frame==3){
    background(tutorial[3])
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[3])
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialdireita[3])
    }
  }else if(tutorial_frame==4){
    background(tutorial[4])
    if(mouseX>20 && mouseX<82 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialesquerda[4])
    }
    if(mouseX>1200 && mouseX<1255 && mouseY>335 && mouseY<445 && mouseIsPressed){
      background(tutorialdireita[4])
    }
  }
}