const $img = $('#pic')

const sliderImages = ['avenue', 'backpack', 'daisy', 'grassfield', 'hjalstaviken', 'jump', 'rooftop']; // Pictures to show on slider.
const sliderTimer = 5000; // Delay between images (ms)
const parallaxZoomSpeed = 20; // Denominator in parallax size differense

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('.box').css({'opacity' : '0'})
            $('nav').addClass('black');
        } else {
            $('.box').css({'opacity' : '1'})
            $('nav').removeClass('black');
        }
        parallax()
    })
    slider()
})

function parallax(){
    $img.addClass('notransition')

    const st = $(this).scrollTop();
    const newValue = 150 - st / parallaxZoomSpeed;
    $img.css( 'backgroundSize' , `${newValue}%` )

    $img[0].offsetHeight;
    $img.removeClass('notransition' );
}

function slider(){
    if ( $img.is( '.main' ) ){
        $img.css( 'transition' , 'all 1s ease' );
        let index = 1;
        setInterval(function(){
            if (index === sliderImages.length){
                index = 1;
            }
            $img.css( 'backgroundImage' , `url(../images/slider_images/${sliderImages[index]}.jpg)` );
            index++;
        }, sliderTimer)

    }else{
        $img.css( 'backgroundImage' , 'url(../images/nti_images/NTI.png)' );
    }
}