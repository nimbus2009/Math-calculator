var num1;
var num2;

var answer=0;

function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num2=createInput();
  num1.position(5,60);
  num2.position(5,90);
  num1.style("background-color: PaleGoldenRod;color: black");
  num2.style("background-color: PaleGoldenRod;color: black");
  num1.size(150,15);
  num2.size(150,15); 

  add=createButton("Add");
  add.position(5,120);
  add.style("background-color: aqua;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)");
  add.size(70,20);

  subtract=createButton("Subtract");
  subtract.position(90,120);
  subtract.style("background-color: GreenYellow;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)");
  subtract.size(70,20);

  multiply=createButton("Multiply");
  multiply.position(5,160);
  multiply.style("background-color: coral;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);")
  multiply.size(70,20);

  divide=createButton("Divide");
  divide.position(90,160);
  divide.style("background-color: plum;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);");
  divide.size(70,20);

  add.mousePressed(addition);
  subtract.mousePressed(sub);
  multiply.mousePressed(mult);
  divide.mousePressed(div);
}

function draw() {
  background(220);
  n1=parseFloat(num1.value());
  n2=parseFloat(num2.value());

  fill("maroon");
  stroke("maroon");
  strokeWeight(0.5);
  textSize(15);
  text("Answer- " + answer,10,220);

}

function addition() {
  answer=n1+n2;
  console.log(answer);
}
function sub(){
  answer=n1-n2;
  console.log(answer)
}
function mult() {
  answer=n1*n2;
  console.log(answer);
}
function div() {
  answer=n1/n2;
  console.log(answer);
}
