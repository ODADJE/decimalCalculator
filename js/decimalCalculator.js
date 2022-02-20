let first="";
let re = /[0-1](\+|\-|\*|\/)/;
let second=""
let expression="";
function operation (e){
    var btn = e.target.value;

   /*  if(re.test(first)){
        second = second + btn;
    }
    else
        {
            first = first +  btn;
        } */
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

let del = document.getElementById("btnDel");
del.onclick = function(){
    /* first ="";
    second=""; */
    expression = "";
     document.getElementById("res").innerHTML = expression;
     return expression;
};

let clear = document.getElementById("btnClr");
clear.onclick = function(){
    /* first ="";
    second=""; */
    expression = expression.slice(0, -1);;
     document.getElementById("res").innerHTML = expression;
     return expression;
     
};

let equal = document.getElementById('btnEql');
equal.onclick = function(){
    /* let operator = first[first.length-1];
    first = first.substring(0, (first.length - 1));
    first = parseInt(first,2).toString();
    second = parseInt(second,2).toString();
    expression = first+operator+second; */
    expression = eval(expression);
    document.getElementById("res").innerHTML =  expression;
    expression = expression.toString();
    return expression;
};
