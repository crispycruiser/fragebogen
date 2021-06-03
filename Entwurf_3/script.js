let vertical_movement_beginning = [
  ".button_tafel",
  ".tafel",
  ".bahnhof",
  ".litfass",
  ".menschenmenge",
  ".menschenmenge2",
  ".litfass_vordergrund",
  ".litfass_vordergrund2",
  ".button_litfass",
  ".strasse",
  ".schreimann",
  "#containerFrage1",
  "#frage_switcher1",
  "#containerFrage2",
  "#frage_switcher2",
  "#containerFrage3",
];

// Himmel
var himmelmove = gsap.to([".himmel_move", ".himmel_move2"], {
  duration: 100,
  x: "-100vw",
  repeat: -1,
  ease: "none",
});
var himmel1 = gsap.to(".himmel", {
  duration: 2,
  y: "-30vh",
  ease: "cubic",
  paused: true
});
var himmel2 = gsap.to(".himmel", {
  duration: 2,
  y: "-100vh",
  ease: "cubic",
  paused: true
});
var himmel3 = gsap.to(".himmel", {
  duration: 2,
  x: "12vw",
  ease: "cubic",
  paused: true
});
var himmel4 = gsap.to(".himmel", {
  duration: 3,
  y: "-20vw",
  ease: "cubic",
  paused: true
});


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
var schreimann_ani = gsap.to([".litfass", "#containerFrage2"], {
  width: "200vw",
  x: "-200vw",
  duration: 2,
  ease: "cubic",
  paused: true,
});
var durch_bahnhof = gsap.to([".bahnhof", ".litfass_vordergrund"], {
  transformOrigin: "bottom",
  scale: 10,
  y: "20vh",
  duration: 11,
  ease: "cubic",
  paused: true,
});
// Zoom in
var zoom_animation = gsap.to(["#containerFrage3", ".schreimann", ".button_schreimann"],{
  scale: 1,
  duration: 5,
  ease: "cubic",
  paused: true,
});
var zoom_animation_menschen = gsap.to([".menschenmenge", ".menschenmenge2"],{
  scale: 3,
  top: "340vh",
  duration: 5,
  ease: "cubic",
  paused: true,
});
var scale_containerFrage3 = gsap.to(["#containerFrage3"],{
  scale: 0.7,
  skewX: -30,
  skewY: 11,
  opacity: 1,
  duration: 5,
  delay: 1,
  ease: "cubic",
  paused: true,
});
var strasse_laternen_bigger = gsap.to([".strasse"], {
  scale: 0.9,
  top: "220vh",
  x: "-15vw",
  duration: 5,
  easeIn: "cubic",
  paused: true,
});
var button_schreimann_ani = gsap.to([".button_schreimann", "#frage_switcher3"], {
  duration: 6,
  y: "-130vh",
  ease: "cubic",
  paused: true,
});

//SCHREIMANN zu LASTWAGEN ANIMATION

var schreimann_move_out = gsap.to(["#frage_switcher3", "#containerFrage3", ".schreimann", ".button_schreimann",], {
  duration: 2,
  x: "160vh",
  ease: "cubic",
  paused: true,
});

var laternen_ani = gsap.to([".strasse"], {
  duration: 2,
  x: "20vh",
  ease: "cubic",
  paused: true,
});

var lastwagen_ani = gsap.to(["#frage_switcher4", "#containerFrage4", ".lastwagen", ".button_lastwagen"], {
  duration: 2,
  x: "160vh",
  ease: "cubic",
  paused: true,
});

var auto_ani = gsap.to([".auto"], {
  repeat: -1,
  duration: 2,
  x: "200vw",
  ease: "none",
  paused: true,
});


//LASTWAGEN zu FLUGI

var lastwagenszene_move_down = gsap.to([".button_reload", ".wolken", "#frage_switcher4", "#containerFrage4", ".lastwagen", ".strasse", ".auto",".menschenmenge", ".menschenmenge2" ], {
  duration: 5,
  y: "160vh",
  ease: "cubic",
  paused: true,
});

var flugi_ani = gsap.to([".flugi", "#frage_switcher5", "#containerFrage5"], {
  duration: 3,
  y: "140vh",
  x: "20vw",
  ease: "cubic",
  paused: true,
});

var flugi_float_ani = gsap.to([".flugi_float"], {
  repeat: -1,
  duration: 2,
  yoyo: true,
  yoyoEase: "none",
  ease: "none",
  y: "-50px",
  paused: true,
});

// Wolken Flugi
var wolke1 = gsap.to([".wolke1"], {
  repeat: -1,
  x: "-200vw",
  ease: "none",
  duration: 15,
  paused: true,
});
var wolke2 = gsap.to([".wolke2"], {
  repeat: -1,
  x: "-200vw",
  ease: "none",
  duration: 14,
  paused: true,
});
var wolke3 = gsap.to([".wolke3"], {
  repeat: -1,
  x: "-200vw",
  ease: "none",
  duration: 15,
  paused: true,
  delay: 2,
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

var button_fade_ani3 = gsap.to([".button_litfass", "#frage_switcher2", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});

var button_fade_ani4 = gsap.to([".button_schreimann", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});

var button_fade_ani5 = gsap.to([".button_lastwagen", ".fade"], {
  duration: 0.1,
  opacity: 0,
  paused: true
});

var vordergrund_fade_ani = gsap.to([".litfass_vordergrund", ".litfass_vordergrund2"], {
  duration: 0.5,
  opacity: 0,
  paused: true
});


// click handlers
document.querySelector("#button_startID").addEventListener("click", function () {
  tafel_ani.play();
  button_fade_ani.play();
  himmel1.play();
});

document.querySelector("#button_tafelID").addEventListener("click", function () {
  litfass_ani.play();
  button_fade_ani2.play();
  menschen_move.play();
  menschen_move2.play();
  himmel2.play();
});

document.querySelector("#button_litfassID").addEventListener("click", function () {
  schreimann_ani.play();
  durch_bahnhof.play();
  button_fade_ani3.play();
  vordergrund_fade_ani.play();
  zoom_animation.play();
  scale_containerFrage3.play();
  strasse_laternen_bigger.play();
  button_schreimann_ani.play();
  zoom_animation_menschen.play();
});

document.querySelector("#button_schreimannID").addEventListener("click", function () {
  schreimann_move_out.play();
  // auto_ani.play();
  laternen_ani.play();
  lastwagen_ani.play();
  button_fade_ani4.play();
  himmel3.play();
});

document.querySelector("#button_lastwagenID").addEventListener("click", function () {
  lastwagenszene_move_down.play();
  flugi_ani.play();
  flugi_float_ani.play();
  button_fade_ani5.play();
  wolke1.play();
  wolke2.play();
  wolke3.play();
  himmel4.play();
});

document.querySelector("#reload").addEventListener("click", function (){
  location.reload();
});

// BONUS
var Rick = console.log(
  "Were no strangers to love  You know the rules and so do I  A full commitment's what I'm thinking of  You wouldn't get this from any other guy  I just wanna tell you how Im feeling  Gotta make you understand  Never gonna give you up  Never gonna let you down  Never gonna run around and desert you  Never gonna make you cry  Never gonna say goodbye  Never gonna tell a lie and hurt you"
);