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
    })

    
    // Ifall det är index.html som är laddat ska bilderna bytas efter varje intervall.
    const filename = window.location.pathname.substring(url.lastIndexOf('/')+1);
    if (filename == "index.html"){
        const images = ["avenue", "backpack", "daisy", "grassfield", "hjalstaviken", "jump", "rooftop"];
        let index = images.length;
        setInterval(function(){
            if (index === 7){index = 0;}
            document.getElementById("pic").style.backgroundImage = `url(../images/${images[index]}.jpg)`;
            index++;
        }, 60000)
    }
    // Annars sätt NTI bild (eftersom det är garanterat om-oss)
    else{document.getElementById("pic").style.backgroundImage = "url(../images/NTI.jpg)"}

})