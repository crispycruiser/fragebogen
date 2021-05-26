var bahnhof_ani = gsap.to(".bahnhof", {
    duration: 1, 
    y: -1000, 
    ease: "none", 
    paused: true
  });


// click handlers for controlling the tween instance...
document.querySelector("#button_startID").onclick = () => bahnhof_ani.play();


var $cloudContainer = $("#cloudContainer");


for(var i = 0; i <8; i ++){
    var cloud = $('<div class="cloud"></div>').appendTo($cloudContainer);
    TweenMax.fromTo(cloud,(Math.random()*15)+15,
    {left:-100,top:i*200,opacity:(Math.random()*2)+0.1},
    {left:"100%",ease:Power4.easeNone,delay:Math.random()*15,repeat:-1});
};
