const img = document.getElementById("pic");

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop())
        {
            $(".box").css({"opacity" : "0"})
            $('nav').addClass('black');
        }

        else
        {
            $(".box").css({"opacity" : "1"})
            $('nav').removeClass('black');
        }
        parallax()
    })

    // Ifall det är index.html som är laddat ska bilderna bytas efter varje intervall.
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/')+1);
    if (filename === "index.html"){
        // Bilder att slideshowa och delay mellan (OBS! transition är 1s)
        const images = ["avenue", "backpack", "daisy", "grassfield", "hjalstaviken", "jump", "rooftop"];
        const slidetime = 5000;
        let index = images.length;
        img.style.transition = "all 1s ease";
        setInterval(function(){
            if (index === images.length){index = 0;}
            img.style.backgroundImage = `url(../images/${images[index]}.jpg)`;
            index++;
        }, slidetime)
    }
    /* Annars sätt NTI bild (eftersom det är garanterat om-oss)
    Om fler sidor ska läggas till så ändra lägg till en else if.*/
    else{
        img.style.backgroundImage = "url(../images/NTI.png)";
    }
})

$(document).ready(function(){
    const box = document.getElementById("box");
    box.addEventListener("click", function(){$(window).scrollTop(858)})
})

function parallax(){
    img.classList.add('notransition');

    const st = $(this).scrollTop();
    const newValue = 150 - st / 20; // ändra nämnaren till st för att ändra zoom speed.
    img.style.backgroundSize = `${newValue}%`;

    img.offsetHeight;
    img.classList.remove('notransition')
}
