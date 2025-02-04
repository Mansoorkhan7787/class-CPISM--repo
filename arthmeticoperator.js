let firstVal = prompt("entre your first value");
let secondVal = prompt("entre your second value");
let arthmeticOperator = prompt(" for arthmeticoperator entre +,-,*,/");

if(arthmeticOperator ===  "+"){
    var result = parseInt(firstVal) + parseInt(secondVal);
    alert(result)
    location.assign("index.html")
}
else if(arthmeticOperator ===  "-"){
    var result = parseInt(firstVal) - parseInt(secondVal);
    alert(result)
    location.assign("index.html")
}
else if(arthmeticOperator ===  "*"){
    var result = parseInt(firstVal) * parseInt(secondVal);
    alert(result)
    location.assign("index.html")
}
else if(arthmeticOperator ===  "/"){
    var result = parseInt(firstVal) / parseInt(secondVal);
    alert(result)
    location.assign("index.html")
}
else if( arthmeticOperator == typeof(Number)){
    alert("invalid operator")
}
else{
    alert("fill all the input")
}

document.write(`type of number is : ${result}`);