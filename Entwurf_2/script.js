gsap.to(".item.active", {
    backgroundColor: '#008000',
    color: '#fff',
    scale: 1,
    stagger: .1
});

$(".button").on("click", function () {
    $(".button.active").removeClass("active");
    $(this).addClass("active");

    const toActive = $(this).attr("data-active");

    gsap.to(".item.active", {
        backgroundColor: '#eeeeee',
        color: "#000000",
        scale: 0,
        onComplete: () => {
            $(".item.active").removeClass("active");
            $(toActive).addClass("active");

            gsap.to(toActive, {
                backgroundColor: 'red',
                color: '#fff',
                scale: 1,
                stagger: .1
            });
        }
    });
});





// var flattern = document.createElement('audio');
//         flattern.setAttribute('src', '/Entwurf_2/sound/taubeflatter.wav');

// gsap.to(".taube", {
//     scrollTrigger: {
//         trigger: '.taube',
//         start: "top center",
//     },
//     x: -2800,
//     duration: 2,
//     onStart:function(){flattern.play()},
// })

