// // CLOUTZ       ($ = document query selector)
// var cloudContainer = $("#cloudContainer");

// for (var i = 0; i < 8; i++) {
//   var cloud = $('<div class="cloud"></div>').appendTo(cloudContainer);
//   TweenMax.fromTo(cloud, (Math.random() * 15) + 15, {
//     left: "-20vw",
//     top: i * (150 + Math.random() * 250),
//     opacity: (Math.random() * 2) + 0.1
//   }, {
//     left: "100%",
//     ease: Power4.easeNone,
//     delay: Math.random() * 15,
//     repeat: -1
//   });
// };

let vertical_movement_beginning = [
  ".button_tafel",
  ".bahnhof",
  ".tafel",
  ".litfass",
  ".menschenmenge",
  ".litfass_vordergrund",
  ".button_litfass",
  ".strasse",
  ".schreimann",
  ".laternen",
];

// MOVEMENT ANIMATIONS
var tafel_ani = gsap.to(vertical_movement_beginning, {
  duration: 2,
  y: "-130vh",
  ease: "cubic",
  paused: true
});
var litfass_ani = gsap.to(vertical_movement_beginning, {
  duration: 2,
  y: "-260vh",
  ease: "cubic",
  paused: true
});

// LITFASS zu SCHREIHALS ANIMATIONEN
var schreimann_ani = gsap.to([".litfass"], {
  width: "200vw",
  x: "-200vw",
  duration: 2,
  ease: "cubic",
  paused: true,
});
var durch_bahnhof = gsap.to([".bahnhof", ".menschenmenge", ".litfass_vordergrund"], {
  transformOrigin: "bottom",
  scale: 10,
  y: "20vh",
  duration: 8,
  ease: "cubic",
  paused: true,
});
var billige_animation = gsap.to([".schreimann", ".strasse", ".laternen"],{
  scale: 1.2,
  duration: 5,
  ease: "cubic",
  paused: true,
});

// FADE ANIMATIONS
var button_fade_ani = gsap.to([".button_start"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});
var button_fade_ani2 = gsap.to([".button_tafel", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});
var button_fade_ani3 = gsap.to([".button_litfass", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});
var temporary_fade_ani = gsap.to([".menschenmenge", ".litfass_vordergrund"], {
  duration: 0.5,
  opacity: 0,
  paused: true
});


// click handlers for controlling the tween instance...
document.querySelector("#button_startID").addEventListener("click", function () {
  tafel_ani.play();
  button_fade_ani.play();
});
document.querySelector("#button_tafelID").addEventListener("click", function () {
  litfass_ani.play();
  button_fade_ani2.play();
  console.log("Mini mam macht geili lasagne");
});
document.querySelector("#button_litfassID").addEventListener("click", function () {
  schreimann_ani.play();
  durch_bahnhof.play();
  button_fade_ani3.play();
  temporary_fade_ani.play();
  billige_animation.play();
  // button_fade_ani2.play();
  console.log("Mini mam macht geili lasagne");
});
