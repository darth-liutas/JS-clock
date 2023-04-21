


format=document.getElementById("format");
hours=document.getElementById("hours");
minutes=document.getElementById("minutes");
seconds=document.getElementById("seconds");
function test(){
d = new Date(); // for now
hour=d.getHours(); // => 9
minute=d.getMinutes(); // =>  30
second=d.getSeconds(); // => 51
hours.innerHTML=hour;
minutes.innerHTML=minute;
seconds.innerText=second;
setTimeout(test, 1000);
}
test();