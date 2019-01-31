$(() => {

    startSlideshow();

    flipper();
    
    $("nav ul li").hover(_ => {
        $(".contentSection, #background").toggleClass("blur");
    });
});

let startSlideshow = () => {

    $("#background").backstretch([
        "/data/images/flowerMeadow.jpg",
        "/data/images/flyingBike.jpg",
        "/data/images/mountainSummerLake.jpg"

    ], {    duration: 15000,
            transition: "fade",
            transitionDuration: 1200,
            scale: "fill" });
}

let flipper = () => {
    $(".my-flipster").flipster();
}