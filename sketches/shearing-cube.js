var rotX=0, rotY=0;
var vertices;
var yy=0;
var xx=0;
var c;


var sh=false,lu=false,ld=false,ll=false,lr=false,rs=false;

var zcam=25;
var p1,p2,p3,p4,p5,p6,p7,p8;


function setup(){

    var mycanvas=createCanvas(700, 700, WEBGL);
    mycanvas.parent('shearing_cube_id');
    init();

}

function init(){
  p1=createVector(-100,100,-100);
  p2=createVector(100,100,-100);
  p3=createVector(100,-100,-100);
  p4=createVector(-100,-100,-100);
  p5=createVector(-100,100,100);
  p6=createVector(100,100,100);
  p7=createVector(100,-100,100);
  p8=createVector(-100,-100,100);
}


function draw(){
   background(50);

   camera(0, 0, zcam , 0, 0, 0, 0, 1, 0);
   rotateX(rotX);
   rotateY(-rotY);
   strokeWeight(7);

   axes();
   delt();
   shear();
   cube();
}

function lines(){
  stroke("#115299");
  line(p1.x,p1.y,p1.z,p2.x,p2.y,p2.z);
  line(p2.x,p2.y,p2.z,p3.x,p3.y,p3.z);
  line(p3.x,p3.y,p3.z,p4.x,p4.y,p4.z);
  line(p4.x,p4.y,p4.z,p1.x,p1.y,p1.z);

  line(p5.x,p5.y,p5.z,p6.x,p6.y,p6.z);
  line(p6.x,p6.y,p6.z,p7.x,p7.y,p7.z);
  line(p7.x,p7.y,p7.z,p8.x,p8.y,p8.z);
  line(p8.x,p8.y,p8.z,p5.x,p5.y,p5.z);

  line(p1.x,p1.y,p1.z,p4.x,p4.y,p4.z);
  line(p4.x,p4.y,p4.z,p8.x,p8.y,p8.z);
  line(p8.x,p8.y,p8.z,p5.x,p5.y,p5.z);
  line(p5.x,p5.y,p5.z,p1.x,p1.y,p1.z);

  line(p2.x,p2.y,p2.z,p3.x,p3.y,p3.z);
  line(p3.x,p3.y,p3.z,p7.x,p7.y,p7.z);
  line(p7.x,p7.y,p7.z,p6.x,p6.y,p6.z);
  line(p6.x,p6.y,p6.z,p2.x,p2.y,p2.z);

  line(p1.x,p1.y,p1.z,p2.x,p2.y,p2.z);
  line(p2.x,p2.y,p2.z,p6.x,p6.y,p6.z);
  line(p6.x,p6.y,p6.z,p5.x,p5.y,p5.z);
  line(p5.x,p5.y,p5.z,p1.x,p1.y,p1.z);

  line(p3.x,p3.y,p3.z,p4.x,p4.y,p4.z);
  line(p4.x,p4.y,p4.z,p8.x,p8.y,p8.z);
  line(p8.x,p8.y,p8.z,p7.x,p7.y,p7.z);
  line(p7.x,p7.y,p7.z,p3.x,p3.y,p3.z);

}
function cube(){
    lines();
    
    fill(81,214,214,150);
    beginShape();
    vertex(p1.x,p1.y,p1.z);
    vertex(p2.x,p2.y,p2.z);
    vertex(p3.x,p3.y,p3.z);
    vertex(p4.x,p4.y,p4.z);
    endShape(CLOSE);

    beginShape();
    vertex(p5.x,p5.y,p5.z);
    vertex(p6.x,p6.y,p6.z);
    vertex(p7.x,p7.y,p7.z);
    vertex(p8.x,p8.y,p8.z);
    endShape(CLOSE);

    beginShape();
    vertex(p1.x,p1.y,p1.z);
    vertex(p4.x,p4.y,p4.z);
    vertex(p8.x,p8.y,p8.z);
    vertex(p5.x,p5.y,p5.z);
    endShape(CLOSE);

    beginShape();
    vertex(p2.x,p2.y,p2.z);
    vertex(p3.x,p3.y,p3.z);
    vertex(p7.x,p7.y,p7.z);
    vertex(p6.x,p6.y,p6.z);
    endShape(CLOSE);

    beginShape();
    vertex(p1.x,p1.y,p1.z);
    vertex(p2.x,p2.y,p2.z);
    vertex(p6.x,p6.y,p6.z);
    vertex(p5.x,p5.y,p5.z);
    endShape(CLOSE);

    beginShape();
    vertex(p3.x,p3.y,p3.z);
    vertex(p4.x,p4.y,p4.z);
    vertex(p8.x,p8.y,p8.z);
    vertex(p7.x,p7.y,p7.z);
    endShape(CLOSE);
}

function shear(){

    p1.x=p1.x+xx*p1.z;
    p1.y=p1.y+yy*p1.z;
    p2.x=p2.x+xx*p2.z;
    p2.y=p2.y+yy*p2.z;
    p3.x=p3.x+xx*p3.z;
    p3.y=p3.y+yy*p3.z;
    p4.x=p4.x+xx*p4.z;
    p4.y=p4.y+yy*p4.z;
    p5.x=p5.x+xx*p5.z;
    p5.y=p5.y+yy*p5.z;
    p6.x=p6.x+xx*p6.z;
    p6.y=p6.y+yy*p6.z;
    p7.x=p7.x+xx*p7.z;
    p7.y=p7.y+yy*p7.z;
    p8.x=p8.x+xx*p8.z;
    p8.y=p8.y+yy*p8.z;
    xx=xx*0;
    yy=yy*0;

}


function delt(){
    if (key==8){
      yy-=0.05;
    }
    else if (key==2){
      yy+=0.05;
		}

    if (key==4){
      xx-=0.05;
		}
    if (key==6){
      xx+=0.05;
    }
    if (key==5) {
      init();
    }
    return false;
}



function mouseDragged(){
    rotY -=(mouseX - pmouseX) * 0.01;
    rotX -=(mouseY - pmouseY) * 0.01;
}


function mouseWheel(event) {
  zcam += event.delta;
}

function axes() {

  strokeWeight(4);

  fill(255, 0, 0);
  line(-350, 0, 0, 350, 0, 0);
  line(355,-20,-20,355,20,20);
  line(355,-20,20,355,20,-20);

  fill(0, 255, 0);
  line(0, -350, 0, 0, 350, 0);
  line(-20,-355,20,0,-355,0);
  line(20,-355,20,0,-355,0);
  line(0,-355,0,0,-355,-20);

  fill(0, 0, 255);
  line(0, 0, -350, 0, 0, 350);
  line(-20, -20, 355, 20, -20, 355);
  line(-20, 20, 355, 20, 20, 355);
  line(-20, 20, 355, 20, -20, 355);

}
