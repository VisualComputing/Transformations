var sketch = function( p ) {
    p.setup = function() {
        p.createCanvas(500, 500);
        p.frameRate(10);
    };
    var ind = 0;
    var step = 0;
    p.call_method = function() {
    p.translate(200,200);
    switch(p.value){
      case 0:
        p.background(100, 100, 100, 78);
        // Equivalent to translate(x, y);
        p.applyMatrix(1, 0, 0, 1, 40 + step, 50);
        p.fill(90,90,230,50); 
        p.rect(0,0,55,55);
        //ellipse(0, 0, 55, 55);
      break;
  
      case 1:
        p.background(100, 100, 100, 78);
        p.translate(50, 50);
        // Equivalent to scale(x, y);
        p.applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
        p.fill(100,0,32);
        p.rect(0,0,55,55);
        //ellipse(0, 0, 55, 55);
      break;
      case 2:
        var angle = map(step, 0, 20, 0, TWO_PI);
        var cos_a = cos(angle);
        var sin_a = sin(angle);
        p.background(100, 100, 100, 78);
        p.translate(50, 50);
        // Equivalent to rotate(angle);
        p.applyMatrix(cos_a, sin_a, -sin_a,cos_a, 0, 0);
        p.fill(32,255,50);
        p.rect(56,56,55,55);
        //ellipse(56,56 , 55, 55);
      break;
      case 3:
        var angle = p.map(step, 0, 20, -PI/4, PI/4);
        p.background(100, 100, 100, 78);
        p.translate(50, 50);
        // equivalent to shearX(angle);
        var shear_factor = 1 / tan(PI/2 - angle);
        p.applyMatrix(1, 0, shear_factor, 1, 0, 0);
        p.fill(210,32,32,50);
        p.rect(0, 0, 50, 50);
      break;
        
  }
}
  p.draw = function() {
  
  step = p.frameCount % 20;
  if (p.keyIsPressed === true) {
   ind += 1;
   ind = ind%4;
   console.log("ind", ind);
   p.call_method(ind);
  } else {
   p.call_method(ind);
 }

}
  
};
var myp5_1 = new p5(sketch, 'mysketchandres');






