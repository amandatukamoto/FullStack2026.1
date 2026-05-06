let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

// quadrado vermelho
ctx.beginPath()
ctx.linewidth = 5;
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 50, 50);
ctx.strokeRect(0, 0, 50, 50)
ctx.closePath()

// quadrado azul
ctx.beginPath()
ctx.linewidth = 5;
ctx.fillStyle = "blue";
ctx.fillRect(450, 0, 50, 50);
ctx.strokeRect(450, 0, 50, 50)
ctx.closePath()

// quadrado amarelo
ctx.beginPath()
ctx.linewidth = 5;
ctx.fillStyle = "yellow";
ctx.fillRect(0, 450, 50, 50);
ctx.strokeRect(0, 450, 50, 50)
ctx.closePath()

// quadrado verde
ctx.beginPath()
ctx.linewidth = 5;
ctx.fillStyle = "green";
ctx.fillRect(450, 450, 50, 50);
ctx.strokeRect(450, 450, 50, 50)
ctx.closePath()

// linha vermelha
ctx.beginPath()
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(500, 500);
ctx.stroke()
ctx.closePath ();


//linha azul
ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.moveTo(500, 0);
ctx.lineTo(0, 500);
ctx.stroke()
ctx.closePath ();

// linha verde
ctx.beginPath()
ctx.strokeStyle = "green";
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);
ctx.stroke()
ctx.closePath ();


// os 2 circulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(400,175 ,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,175,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// metade circulo verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'green';
ctx.arc(250,250,100,0*Math.PI,1*Math.PI);
// ctx.fill();
ctx.stroke();
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web", 250,100);
ctx.closePath();