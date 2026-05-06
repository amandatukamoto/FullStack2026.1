let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

// quadrado
ctx.beginPath()
ctx.linewidth = 5;
ctx.fillStyle = "purple";
ctx.strokeStyle = "blue";
ctx.fillRect(10, 10, 50, 50);
ctx.strokeRect(10, 10, 50, 50)
ctx.closePath()

// linhas
ctx.beginPath()
ctx.linewidth = 2;
ctx.fillStyle = "purple";
ctx.moveTo(200, 150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath()

// arcos
ctx.beginPath ();
ctx.lineWidth = 2;
ctx.fillstyle = "purple";
ctx.strokestyle = "blue";
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx. fill ();
ctx.stroke ();
ctx.closePath ();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "purple";
ctx.strokeStyle = "purple";
ctx.font = "90px Times New Roman"
ctx.textAlign = "center";
ctx.fillText("Olá",205,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();
