var i = document.getElementById("info");
var c = document.getElementById("contact");
var e = document.getElementById("events");
var sc = document.getElementById("slide");
var s = document.getElementById("slider");
var bt = document.getElementsByClassName("btns");
var con = document.getElementById("container");
var arr1=document.getElementById("arrow1");
var about = document.getElementById("about");
var call = document.getElementById("call");
var face= document.getElementById("face");
var mass = document.getElementById("mass");
i .addEventListener("click",function(){
  if(m= true){
    i.style.opacity="0";
    c.style.opacity="0";
    e.style.opacity="0";
    i.style.cursor="default";
    c.style.cursor="default";
    e.style.cursor="default";
    s.style.width="500vh";
    s.style.transition="all ease-out 2.2s";
    s.style.opacity="80%";
    s.style.backgroundColor="white";
    con.style.opacity=0;
    con.style.transition="all ease-in 0.4s";
    arr1.style.opacity=100;
    arr1.style.transition="all ease-out 0.5s";
    arr1.style.transitionDelay="1.5s";
    arr1.style.zIndex="20";
    arr1.style.cursor="pointer";
   about.style.opacity=100;
   about.style.transition="all ease-out 0.4s";
   about.style.transitionDelay="1s";
   about.style.zIndex="20";

  }
})
c.addEventListener("click",function(){
  if(m= true){
    i.style.opacity="0";
    c.style.opacity="0";
    e.style.opacity="0";
    i.style.cursor="default";
    c.style.cursor="default";
    e.style.cursor="default";
    s.style.width="500vh";
    s.style.transition="all ease-out 2.2s";
    s.style.opacity="80%";
    s.style.backgroundColor="white";
    con.style.opacity=0;
    con.style.transition="all ease-in 0.4s";
    arr1.style.opacity=100;
    arr1.style.transition="all ease-out 0.5s";
    arr1.style.transitionDelay="1.5s";
    arr1.style.zIndex="20";
    arr1.style.cursor="pointer";
    call.style.zIndex="20";
    call.style.opacity=100;
    call.style.transition="all ease-out 0.4s"
    call.style.transitionDelay=".6s";
    face.style.cursor="pointer";
    mass.style.cursor="pointer";
  }
})
e.addEventListener("click",function(){
  if(m= true){
    i.style.opacity="0";
    c.style.opacity="0";
    e.style.opacity="0";
    i.style.cursor="default";
    c.style.cursor="default";
    e.style.cursor="default";
    s.style.width="500vh";
    s.style.transition="all ease-out 2.2s";
    s.style.opacity="80%";
    s.style.backgroundColor="white";
    con.style.opacity=0;
    con.style.transition="all ease-in 0.4s";
    arr1.style.opacity=100;
    arr1.style.transition="all ease-out 0.5s";
    arr1.style.transitionDelay="1.5s";
    arr1.style.zIndex="20";
    arr1.style.cursor="pointer";
  }
})
arr1.addEventListener("click",function(){
  if (m= true){
  con.style.zIndex="20";
  call.style.zIndex="-1";
  about.style.zIndex="-1";
  s.style.width=0;
  s.style.transition="all ease-out 2.2s";
  arr1.style.opacity=0;
  arr1.style.transition="all ease-in 0.4s";
  arr1.style.cursor="default";
  con.style.opacity=100;
  con.style.transition="all ease-out 0.4s";
  con.style.transitionDelay="2s";
  i.style.cursor="pointer";
    c.style.cursor="pointer";
    e.style.cursor="pointer";
    about.style.opacity=0;
    about.style.transition="all ease-out 0.2s";
    about.style.cursor="default";
    face.style.cursor="default";
    mass.style.cursor="default";
    call.style.opacity=0;
    call.style.transition="all ease-out 0.4s";
  }
})
