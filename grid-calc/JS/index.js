let display = document.querySelector("#display")
let numdisplay = "";

function limpar(){
    numdisplay = ""
    display.innerHTML= numdisplay;
}
function click1(){
    numdisplay += "1";
    display.innerHTML= numdisplay;
}
function click2(){
    numdisplay += "2";
    display.innerHTML= numdisplay;
}
function click3(){
    numdisplay += "3";
    display.innerHTML= numdisplay;
}
function click4(){
    numdisplay += "4";
    display.innerHTML= numdisplay;
}
function click5(){
    numdisplay += "5";
    display.innerHTML= numdisplay;
}
function click6(){
    numdisplay += '6';
    display.innerHTML= numdisplay;
}
function click7(){
    numdisplay += '7';
    display.innerHTML= numdisplay;
}
function click8(){
    numdisplay += '8';
    display.innerHTML= numdisplay;
}function click9(){
    numdisplay += '9';
    display.innerHTML= numdisplay;
}function click0(){
    numdisplay += 0;
    display.innerHTML= numdisplay;
}
function soma(){
    n1 = numdisplay;
    numdisplay = '';
}
function show(){
    numdisplay = parseInt(numdisplay) + parseInt(n1);
    display.innerHTML= numdisplay;
}