$(() => {

    assembleHtml();

    startSlideshow();
    
    $("nav ul li").hover(_ => {
        $(".contentSection, #background").toggleClass("blur");
    });
});

let startSlideshow = () => {

    let imgFolder = "/data/images/";

    $("#background").backstretch([
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
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            assembleHtml();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
  }
}