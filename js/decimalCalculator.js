let expression="";

function operation (e){
    var btn = e.target.value;
    expression = expression + btn;
    document.getElementById("res").innerHTML = expression;
};

document.getElementById("btn0").addEventListener('click',operation);
document.getElementById("btn1").addEventListener('click',operation);
document.getElementById("btn2").addEventListener('click',operation);
document.getElementById("btn3").addEventListener('click',operation);
document.getElementById("btn4").addEventListener('click',operation);
document.getElementById("btn5").addEventListener('click',operation);
document.getElementById("btn6").addEventListener('click',operation);
document.getElementById("btn7").addEventListener('click',operation);
document.getElementById("btn8").addEventListener('click',operation);
document.getElementById("btn9").addEventListener('click',operation);
document.getElementById("btnSum").addEventListener('click',operation);
document.getElementById("btnSub").addEventListener('click',operation);
document.getElementById("btnDiv").addEventListener('click',operation);
document.getElementById("btnMul").addEventListener('click',operation);
document.getElementById("btnPoint").addEventListener('click',operation);

const del = document.getElementById("btnDel");
del.onclick = function(){
    expression = "";
     document.getElementById("res").innerHTML = expression;
     return expression;
};

const clear = document.getElementById("btnClr");
clear.onclick = function(){
    expression = expression.slice(0, -1);;
     document.getElementById("res").innerHTML = expression;
     return expression;
     
};

const equal = document.getElementById('btnEql');
equal.onclick = function(){
    expression = eval(expression);
    document.getElementById("res").innerHTML =  expression;
    expression = expression.toString();
    return expression;
};
