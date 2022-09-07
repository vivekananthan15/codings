// Draw a line
let x=document.getElementById('myCanvas');
let y=x.getContext('2d');
y.moveTo(0,0);
y.lineTo(300,300);
y.stroke();

//Draw circle
let x1=document.getElementById("myCanvas1");
let y1=x1.getContext('2d');
y1.beginPath();
y1.arc(140,150,100,0,2*Math.PI);
y1.stroke();

//Draw Text
let x2=document.getElementById('myCanvas2');
let y2=x2.getContext('2d');
y2.font='50px Roboto Arial';
y2.strokeText('JVNP',80,100);
y2.fillText('JVNP',80,150);
