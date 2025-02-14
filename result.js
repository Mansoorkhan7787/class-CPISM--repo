let math = parseInt( prompt( "entre your math marks"));
let english = parseInt( prompt( "entre your english marks"));
let urdu = parseInt( prompt( "entre your urdu marks"));
let islamiat = parseInt( prompt( "entre your islamiat marks"));
let p_study = parseInt( prompt( "entre your p_study marks"));

let obtain = math + english + urdu + islamiat + p_study;
let total_marks = 500;
let percentage = obtain * 100 / total_marks;

// MARKS
let heading1 = document.querySelector("h1");
heading1.innerHTML = `you got ${obtain} out of ${total_marks} marks <br>`
//PERCENTAGE
let heading2 = document.querySelector("#per");
heading2.innerHTML = `and your percentage is ${percentage} <br>`

if(percentage >=80 && percentage <=100){
    document.write("you got A+ grate" )
}
else if (percentage >=70 && percentage <80){
    document.write("you got A grate")
}
else if (percentage >=60 && percentage <70){
    document.write("you got B grate")
}
else if (percentage >=50 && percentage <60){
    document.write("you got C grate")
}
else if (percentage >=40 && percentage <50){
    document.write("you got D grate")
}
else{
    document.write("you are fail")
}



