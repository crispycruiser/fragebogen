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
  ".menschenmenge2",
  ".litfass_vordergrund",
  ".litfass_vordergrund2",
  ".button_litfass",
  ".strasse",
  ".schreimann",
  ".laternen",
];

// Hero zu Tafel
var tafel_ani = gsap.to(vertical_movement_beginning, {
  duration: 2,
  y: "-130vh",
  ease: "cubic",
  paused: true
});

//Tafel zu LITFASS
var litfass_ani = gsap.to(vertical_movement_beginning, {
  duration: 2,
  y: "-260vh",
  ease: "cubic",
  paused: true
});
//Litfass Menschenmenge & Vordergrund movement
var menschen_move = gsap.to([".menschenmenge", ".litfass_vordergrund"], {
  repeat: -1,
  duration: 8,
  yoyo: true,
  yoyoEase: "none",
  ease: "none",
  x: "-50vw"
});
var menschen_move2 = gsap.to([".menschenmenge2", ".litfass_vordergrund2"], {
  repeat: -1,
  duration: 8,
  yoyo: true,
  yoyoEase: "none",
  ease: "none",
  x: "50vw"
});

// LITFASS zu SCHREIMANN
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

// zoom animation 'billig' - muss noch verfeinert werden
var billige_animation = gsap.to([".schreimann", ".strasse", ".laternen", ".button_schreimann"],{
  scale: 1,
  duration: 5,
  ease: "cubic",
  paused: true,
});

var button_schreimann_ani = gsap.to([".button_schreimann"], {
  duration: 2,
  y: "-130vh",
  ease: "cubic",
  paused: true,
});

//SCHREIMANN zu LASTWAGEN ANIMATION

var schreimann_move_out = gsap.to([".schreimann", ".button_schreimann",], {
  duration: 2,
  x: "160vh",
  ease: "cubic",
  paused: true,
});

var laternen_ani = gsap.to([".laternen"], {
  duration: 2,
  x: "20vh",
  ease: "cubic",
  paused: true,
});

var lastwagen_ani = gsap.to([".lastwagen"], {
  duration: 2,
  x: "160vh",
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

var button_fade_ani4 = gsap.to([".button_schreimann", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});

var temporary_fade_ani = gsap.to([".menschenmenge", ".menschenmenge2", ".litfass_vordergrund", ".litfass_vordergrund2"], {
  duration: 0.5,
  opacity: 0,
  paused: true
});


// click handlers
document.querySelector("#button_startID").addEventListener("click", function () {
  tafel_ani.play();
  button_fade_ani.play();
});

document.querySelector("#button_tafelID").addEventListener("click", function () {
  litfass_ani.play();
  button_fade_ani2.play();
  menschen_move.play();
  menschen_move2.play();
});

document.querySelector("#button_litfassID").addEventListener("click", function () {
  schreimann_ani.play();
  durch_bahnhof.play();
  button_fade_ani3.play();
  temporary_fade_ani.play();
  billige_animation.play();
  button_schreimann_ani.play();
  // button_fade_ani2.play();
});

document.querySelector("#button_schreimannID").addEventListener("click", function () {
  schreimann_move_out.play();
  laternen_ani.play();
  lastwagen_ani.play();
  button_fade_ani4.play();
});
