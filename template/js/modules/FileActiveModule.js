export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.warranty-policy')) {
        $('.policy-tt').on('click', function () {
            $(this).parent('.policy-box').toggleClass('active');
            $(this).next('.policy-content').slideToggle();
        });
    }

    const width = $(window).width();
    if (width < 1200) {
        $('.partners .swiper').removeClass('notslide');
    }else{
        $('.partners .swiper').addClass('notslide');
    }

    const $width = $(window).width();

    if ($('.customer-ig').length && $width >= 768) {
        $('.customer-ig').on('mouseover', function () {
            $(this).addClass('active');
        });
        $('.customer-ig').on('mouseout', function () {
            $(this).removeClass('active');
        });
    }
}