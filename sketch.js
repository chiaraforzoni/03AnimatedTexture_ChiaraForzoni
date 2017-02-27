function setup() {
  createCanvas (430,430);
  background('#ff8095');
  frameRate(10);
}

function draw() {
  
  stroke('#d5ff80');
  noFill();
 for (var e=20; e<400; e+=20){
    ellipse (20*frameCount,20+e, 10,10);
    ellipse (20+e,20*frameCount, 10,10);
  }/*
   text(frameCount, 10, 10);*/
  
  
  if (frameCount > 20){
  background('#80ffd3');
  fill('#d5ff80');
  noStroke();
 for (var e=20; e<400; e+=20){
    ellipse (400*random(),30+e, 10,10);
    ellipse (10+e,10+20*random(), 10,10);
    ellipse (10+e,390+20*random(), 10,10);
  }
    }  
  
  
  
}
