var num1;
var num2;

var answer=0;

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
