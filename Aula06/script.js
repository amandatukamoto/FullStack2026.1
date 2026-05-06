document.getElementById("d1").innerHTML = "Amanda Tukamoto"

//function mensagem(){
    //alert("olá");
//}

//function mensagem_2(texto){
  //  alert(texto);
//}


//mensagem();
//mensagem();
//mensagem_2("Amanda");
//mensagem_2("Tukamoto");


function soma(a, b){return a + b}
function sub(a, b){return a - b}
function mult(a, b){return a * b}
function divs(a, b){return a / b}


resp = soma(5, 7);
document.getElementById("soma").innerHTML = resp

function exemplo2(){
   let x = parseInt(document.getElementById("in_ex2").value); 
    
   for(let i = 1; i <= x; i++){
    console.log(x + i);
    }

   document.getElementById("resp_ex2").innerHTML = x;
}


function exemplo3(){
    let a = parseInt(document.getElementById("in_1_ex3").value);
    let b = parseInt(document.getElementById("in_2_ex3").value);

    let resp = soma (a,b);

    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4(){
    let a = parseInt(document.getElementById("in_1_ex4").value);
    let b = parseInt(document.getElementById("in_2_ex4").value);

    let resp = 0;
    if(a < 0 || b > 0){
        resp = soma(a,b);
    }else{
        resp = mult(a,b);
    }
    
    document.getElementById("resp_ex4").innerHTML = resp
}