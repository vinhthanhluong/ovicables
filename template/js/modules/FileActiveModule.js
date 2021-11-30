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
    } else {
        $('.partners .swiper').addClass('notslide');
    }

    const $width = $(window).width();

    if ($('.customer-ig').length && $width >= 768) {
        $('.customer-ig').on('mouseover', function () {
            // $(this).addClass('active');
        });
        // $('.customer-ig').on('mouseout', function () {
        //     $(this).removeClass('active');
        // });

        $('.customer-ig').hover(function () {
            $(this).addClass('active');

        }, function () {
            // out
        }
        );
    }

    if ($('.bx-f').length) {

        let inp = document.querySelectorAll('.bx-f input');
        inp.forEach((el) => {
            let wrap = el.parentElement;
            // el.value ? wrap.classList.add('active') : '';
            // el.addEventListener('change', () => {
            //     el.value ? wrap.classList.add('active') : wrap.classList.remove('active');
            //     el.value ? el.classList.add('active') : el.classList.remove('active');
            // });
            el.addEventListener('focusin', () => {
                wrap.classList.add('active');
            });

            el.addEventListener('focusout', () => {
                el.value ? '' : wrap.classList.remove('active');
            });
        });
    }

    if ($('.file-box').length) {

        const inpFile = document.querySelectorAll('.file-box');

        inpFile.forEach(el => {
            const inp = el.querySelector('.file-inp');
            const txt = el.querySelector('.file-text');

            inp.addEventListener('change', () => {
                const upName = inp.value.split(`\\`);
                const name = upName[upName.length - 1];
                txt.innerHTML = name;
            });
        });




    }
}