$(() => {

    assembleHtml();
    eventHandler();
    startSlideshow();
    
});

let startSlideshow = () => {

    let imgFolder = "/data/images/";

    $(".background").backstretch([
        imgFolder + "avenue.jpg",
        imgFolder + "backpack.jpg",
        imgFolder + "daisy.jpg",
        imgFolder + "grass-field.jpg",
        imgFolder + "hjalstaviken.jpg",
        imgFolder + "Jump v2.jpg",
        imgFolder + "rooftop.jpg"

    ], {    duration: 15000,
            transition: "fade",
            transitionDuration: 1200,
            scale: "fill" });
},

assembleHtml = () => {

    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            assembleHtml();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
  }

},

eventHandler = () => {
    let pixelsBeforeChange = 10;

    //STICKY NAVBAR
    $(window).bind("scroll", () => {
        if ($(window).scrollTop() > pixelsBeforeChange)
            $("body nav ul").addClass("stickyNavbar");
        else 
            $("body nav ul").removeClass("stickyNavbar");
    });

    //SCROLL TO A CERTAIN ELEMENT ON CLICK
    $("#testBTN").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });

    $("#sidegoalsBTN").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#sidegoals").offset().top
        }, 1000);
    });

    $("#tipsBTN").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#tips").offset().top
        }, 1000);
    });

    $("#teamBTN").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutUs").offset().top
        }, 1000);
    });
}

