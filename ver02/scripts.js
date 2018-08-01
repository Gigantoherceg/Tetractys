var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var i = 1;

function triangle (x,y,color) {
  context.strokeStyle = color;
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x+100,y);
  context.lineTo(x+50,y-90);
  context.lineTo(x,y);
  context.stroke();
  context.fill();
}

triangle(200,100,'rgb(227, 98, 102)');
triangle(150,190,'rgb(38, 173, 73)');
triangle(250,190,'rgb(38, 173, 73)');
for ( i = 100; i <= 300; i+=100) {
  triangle(i ,280,'rgb(35, 129, 128)');
}