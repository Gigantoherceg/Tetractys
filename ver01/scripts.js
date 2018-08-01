var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = 200;        /* kezdeti koordináták */
var y = 100;
var i, db = 1;
var counter = 0;

for ( db = 1; db<4; db++) {
  counter++;
    context.beginPath();
  for ( i=1 ; i<db+1 ; i++) {
    if ( counter==1 ) {
      context.strokeStyle = "rgb(227, 98, 102)";
      context.fillStyle = "rgb(227, 98, 102)";
    } else if ( counter==2 ) {
      context.strokeStyle = "rgb(38, 173, 73)";
      context.fillStyle = "rgb(38, 173, 73)";
    } else {
      context.strokeStyle = "rgb(35, 129, 128)";
      context.fillStyle = "rgb(35, 129, 128)";
    }
    context.moveTo(x,y);
    context.lineTo(x+100,y);
    context.lineTo(x+50,y-90);
    context.lineTo(x,y);
    context.stroke();
    context.fill();
    x += 100;
  }
    x -= 100*db;
    x -= 50;
    y += 90;
}