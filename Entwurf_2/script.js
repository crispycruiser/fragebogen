var flattern = document.createElement('audio');
        flattern.setAttribute('src', '/Entwurf_2/sound/taubeflatter.wav');

gsap.to(".taube", {
    scrollTrigger: {
        trigger: '.taube',
        start: "top center",
    },
    x: -2800,
    duration: 2,
    onStart:function(){flattern.play()},
})