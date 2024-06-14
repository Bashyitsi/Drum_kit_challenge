function add(num1,num2){
    return num1 +num2;
}
function substraction(num1,num2){
    return num1 - num2;
}
function multiply (num1,num2){
    return num1 * num2;
}
function division (num1,num2){
    return num1/ num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}


console.log(calculator(3,8,add));