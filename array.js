let student=[
    "ali","abdul haq","asad","haider","zohab","asad","abdul basit",
    "owais","yusha","mansoor","afifa","hala","zainab","amail","yumna","rija"
]
let x ="";
let count=1;

for(let i=0; i<student.length; i++){
    x+=`
    <li>
    ${count+i}&nbsp;
    ${student[i]}
    </li>`
}
document.getElementById("data")
data=data.innerHTML=x