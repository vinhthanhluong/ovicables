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
}