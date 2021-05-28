var num1;
var num2;

function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num2=createInput();
  num1.position(5,60);
  num2.position(5,90);

  add=createButton("Add");
  add.position(5,120);

  subtract=createButton("Subtract");
  subtract.position(90,120);

  multiply=createButton("Multiply");
  multiply.position(5,160);

  divide=createButton("Divide");
  divide.position(90,160);

  add.mousePressed(addition);
  subtract.mousePressed(sub);
  multiply.mousePressed(mult);
  divide.mousePressed(div);
}

function draw() {
  background(220);
  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
}

function addition() {
  console.log(n1+n2);
}
function sub(){
  console.log(n1-n2)
}
function mult() {
  console.log(n1*n2);
}
function div() {
  console.log(n1/n2);
}