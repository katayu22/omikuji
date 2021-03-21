var userName;
var userResult;

userName = prompt("お名前を教えてください。");

if( userName == ""){
    userName = "名無し"
}
document.getElementById("name").innerHTML = userName;



var rand = Math.floor( Math.random()*5);

if(rand == 0){
    userResult = '大吉';
}
if(rand == 1){
    userResult = '中吉';
}
if(rand == 2){
    userResult = '小吉';
}
if(rand == 3){
    userResult = '吉';
}
if(rand == 4){
    userResult = '凶';
}

document.getElementById('result').innerHTML = userResult;