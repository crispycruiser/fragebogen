var bahnhof_ani = gsap.to(".bahnhof", {
    duration: 1, 
    y: -1000, 
    ease: "none", 
    paused: true
  });
  
  // click handlers for controlling the tween instance...
  document.querySelector("#button_startID").onclick = () => bahnhof_ani.play();