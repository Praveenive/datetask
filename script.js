let com = document.createElement("div");
com.setAttribute("class","daety")
let date = document.createElement("input");
date.setAttribute("type","date");
date.setAttribute("id","dates");

let button = document.createElement("button");
button.innerHTML="Display data"
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",display);
com.append(date);
com.append(button);

document.body.append(com);
let res = document.createElement("div");
res.setAttribute("class","deaety")
document.body.append(res);

function display(){
   let lett = document.getElementById("dates").value;

  if(Date.parse(lett)){
   let input = new Date(lett);
   console.log(input);
   let current = new Date();
   console.log(current);
   let milli = current.getTime()-input.getTime();
   console.log(milli);
   let sec = foo(milli,1000);
   console.log(sec);
   let min = foo(sec,60);
   console.log(min);
   let hour = foo(min,60);
   console.log(hour);
   let day = foo(hour,24);
   console.log(day);
   let year = current.getFullYear()-input.getFullYear();
   console.log(year);
   let month = (year*12)+(current.getMonth()-input.getMonth());
   console.log(month);
   let result = "INPUT: "+ input+"<br>" +"CURRENT: "+ current+"<br>"+"Millisecond" +milli+"<br>"+"Seconds "+sec+"<br>"+"Minutes :"+ min+"<br>"+"Hours :"+hour+"<br>"+"Days :"+day+"<br>"+"Months :"+month+"<br>"+"Years :"+year;
res.innerHTML=result;
}
  }

function foo(v1,v2){
   return (Math.floor(v1/v2));
}
