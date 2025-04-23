function setup() {
  createCanvas(400, 400);
}
let OlhoX
let OlhoY

function draw() {
  background(97,97,202);
  fill(100);
  circle(200,200,300);//cabeça
  fill(999);
  circle(150,150,60);//olho
  circle(250,150,60);//olho
  line(150,270,270,250);//boca
  fill(250,200,15);
  triangle(136,229,199,180,214,221);//nariz
  line(118,113,174,113);//sobrancelha
  line(211,119,261,98);//sobrancelha
  fill(0,999,999);
  //circle(150,150,30);//pupila
  //circle(250,150,30);//pupila
    
OlhoX= map(mouseX,0,400,130,170)
OlhoY= map(mouseY,0,400,130,170)
  
circle(OlhoX,OlhoY,35)//novo olho  
circle(OlhoX+100,OlhoY,35)// novo olho
fill(1)
circle(OlhoX,OlhoY,15)//novo olho  
circle(OlhoX+100,OlhoY,15)// novo olho
  ellipse(200, 70, 300, 40, 6);//Parte de baixo do chapeu
   ellipse(200, 40, 220, 80, 20);//Parte de cima do chapeu
  
  if(mouseIsPressed){
console.log(mouseX,mouseY);
}  
}