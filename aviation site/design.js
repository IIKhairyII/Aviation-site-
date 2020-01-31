var i = document.getElementById("info");
var c = document.getElementById("contact");
var e = document.getElementById("events");
i.addEventListener("click",function(){
  if(m= true){
    c.style.opacity=0;
    e.style.opacity=0;
    i.style.opacity=0;
    c.style.transition="0.3 all ease-out";
    i.style.transition="0.3 all ease-out";
    e.style.transition="0.3 all ease-out";
  }
})