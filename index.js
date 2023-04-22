


format=document.getElementById("format");
hours=document.getElementById("hours");
minutes=document.getElementById("minutes");
seconds=document.getElementById("seconds");
function test(){
d = new Date(); // for now
hour=d.getHours(); 
if(hour>=12){hour-=12;
format.innerHTML="PM";
}
else{format.innerHTML="AM";}
minute=d.getMinutes(); 
second=d.getSeconds(); 
if(hour<10){hours.innerHTML="0"+hour;}
else {hours.innerHTML=hour;}
if(minute<10){minutes.innerHTML="0"+minute;}
else {minutes.innerHTML=minute;}

seconds.innerText=second;
setTimeout(test, 1000);
}
test();
