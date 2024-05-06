let myInput

let largoValue = 0
let pLargo
let sliderLargo

let capasValue = 0
let pCapas
let sliderCapas

let backColor = 'black'
let letraColor = 'white'

let sliderColor

var h1;
var canvas;
var p;
var a;


function setup() {
  // Código inicial. Se ejecuta una sola vez
createCanvas(windowWidth, windowHeight, WEBGL);
camera(2000,30,2000);


let rectWidth = 300;
  let rectHeight = 410;
  let rectDiv = createDiv(); // Create a <div> element
  rectDiv.size(rectWidth, rectHeight); // Set the size of the <div>
  rectDiv.style('background-color', 'white'); // Set the background color
  rectDiv.style('border', '2px solid red');
  rectDiv.position(40, -5);


  h1=createElement("h1", "FUGA")
  h1.position(60,-40);
  h1.style('font-family', 'arial');
  h1.style('font-size', '90px');
  h1.style('color', 'red');
  h1.style('font-weight', 'bold')
  p= createP("CAMERA CONTROL");
  p.position(60,330);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'red');
  p.style('font-weight', 'bold')

  p= createP("Color1");
  p.position(60,220-30);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');
  p.style('font-weight', 'bold')

  p= createP( "Color2" );
  p.position(165,220-30);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');
  p.style('font-weight', 'bold')

  p= createP(" Color3");
  p.position(269,220-30);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');
  p.style('font-weight', 'bold')
  p= createP("DEPTH");
  p.position(60,280-30);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');
  p.style('font-weight', 'bold')


  p= createP("Zoom | Rotate | Move");
  p.position(60,350);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');


  p= createP("TYPE HERE");
  p.position(60,122);
  p.style('font-family', 'arial');
  p.style('font-size', '16px');
  p.style('color', 'black');
  p.style('font-weight', 'bold')

  a=createA("../MODO1/index.html","go to KAOS_MODE")
  a.position(172,105);
  a.style('font-family', 'arial');
  a.style('font-size', '16px');
  a.style('color', 'black');
  a.style('font-weight', 'bold')

  myInput = createInput("FUGA")
  myInput.position(60, 160)
  myInput.style('padding', '3px');
  myInput.style('border', '1.5px solid black');
  myInput.size(250)
  myInput.style('font-family', 'arial');
  myInput.style('font-size', '14px');
  myInput.style('color', 'red');

sliderLargo= createSlider(100, 5000, 100, 100)
sliderLargo.position(58, 320-30)
sliderLargo.size(260)
sliderLargo.class('slider')

sliderCapas= createSlider(20, 100, 0, 10)
sliderCapas.position(58,340-30)
sliderCapas.size(260)
sliderCapas.class('slider')

sliderColor = createSlider(0, 2, 0, 1);
 sliderColor.position(58,260-30)
sliderColor.size(260)
sliderColor.class('slider')


Btn = createButton("save"); 
Btn.position(275, 365) 
Btn.class('button1')
Btn.style('font-family', 'arial')
Btn.mousePressed(saveToFile); 

}
function saveToFile() { 
  // Save the current canvas to file as png 
  saveCanvas('FUGA', 'png') 
} 
  
function draw() {

  if (sliderColor.value() == 0) {
    backColor = 'black';
    letraColor = 'white';
  } else if (sliderColor.value() == 1) {
    backColor = 'white';
    letraColor = 'red';
  } else if (sliderColor.value() == 2) {
    backColor = 'black';
    letraColor = 'blue';
  }

  background(backColor);

orbitControl();
texto= myInput.value()

largoValue= sliderLargo.value()
capasValue=sliderCapas.value()

 for (let i = 0; i < largoValue; i = i + capasValue) {
push()
translate(0, 0, 0 + i)
printText(0,0,texto)
pop()
}


}



function printText (x,y,texto){

let ancholetra = 300
let color = letraColor
let colorStroke = backColor

  //forof
for (let letra of texto.toUpperCase()) {

if(letra=='A' || letra == 'a')
  LETRA_A(x,y,1,color, colorStroke)
if(letra=='B' || letra == 'b')
  LETRA_B(x,y,1,color, colorStroke)
if(letra=='C' || letra == 'c')
  LETRA_C(x,y,1,color, colorStroke)
if(letra=='D' || letra == 'd')
  LETRA_D(x,y,1,color, colorStroke)
if(letra=='E' || letra == 'e')
  LETRA_E(x,y,1,color, colorStroke)
if(letra=='F' || letra == 'f')
LETRA_F(x,y,1,color, colorStroke)
if(letra=='G' || letra == 'g')
LETRA_G(x,y,1,color, colorStroke)
if(letra=='H' || letra == 'h')
  LETRA_H(x,y,1,color, colorStroke)
if(letra=='I' || letra == 'i')
  LETRA_I(x,y,1,color, colorStroke)
if(letra=='J' || letra == 'j')
  LETRA_J(x,y,1,color, colorStroke)
  if(letra=='K' || letra == 'k')
  LETRA_K(x,y,1,color, colorStroke)
if(letra=='L' || letra == 'l')
  LETRA_L(x,y,1,color, colorStroke)
if(letra=='M' || letra == 'm')
  LETRA_M(x,y,1,color, colorStroke)
if(letra=='N' || letra == 'n')
  LETRA_N(x,y,1,color, colorStroke)
if(letra=='Ñ' || letra == 'ñ')
  LETRA_N2(x,y,1,color, colorStroke)
if(letra=='O' || letra == 'o')
  LETRA_O(x,y,1,color, colorStroke)
if(letra=='P' || letra == 'p')
  LETRA_P(x,y,1,color, colorStroke)
if(letra=='Q' || letra == 'q')
  LETRA_Q(x,y,1,color, colorStroke)
if(letra=='R' || letra == 'r')
  LETRA_R(x,y,1,color, colorStroke)
if(letra=='S' || letra == 's')
  LETRA_S(x,y,1,color, colorStroke)
if(letra=='T' || letra == 't')
  LETRA_T(x,y,1,color, colorStroke)
if(letra=='U' || letra == 'u')
  LETRA_U(x,y,1,color, colorStroke)
if(letra=='V' || letra == 'v')
  LETRA_V(x,y,1,color, colorStroke)
if(letra=='W' || letra == 'w')
  LETRA_W(x,y,1,color, colorStroke)
if(letra=='X' || letra == 'x')
  LETRA_X(x,y,1,color, colorStroke)
if(letra=='Y' || letra == 'y')
  LETRA_Y(x,y,1,color, colorStroke)
if(letra=='Z' || letra == 'z')
  LETRA_Z(x,y,1,color, colorStroke)

 x+= ancholetra+50


}



}

