export default function SlideProductModule() {
    function slideThumbs() {
        if (document.querySelector('#slide-thumbs')) {
            const swiper = document.querySelector('#slide-thumbs');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination');
            const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-button-next');
            try {
                const thumbsmall = new Swiper('#thumbs-small', {
                    speed: 1000,
                    // loop: true,
                
                    freeMode: true,
                    watchSlidesProgress: true,
                    // direction: 'vertical',

                  
                    breakpoints: {
                        320: {
                            spaceBetween: 7,
                            slidesPerView: 3,
                            direction: 'horizontal',
                        },

                        768: {
                            spaceBetween: 10,
                            slidesPerView: 3,
                            direction: 'vertical',
                        },
                        1024: {
                            spaceBetween: 15,
                            slidesPerView: 3,
                            direction: 'vertical',
                        }
                    }
                });

                const thumbbig = new Swiper('#thumbs-big', {
                    speed: 1000,
                    // loop: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: sliderNextBtn,
                        prevEl: sliderPrevBtn,
                    },
                    thumbs: {
                        swiper: thumbsmall,
                    },
                });
                //  click slide
                // if ($('.pro-color.cl-w').length) {
                //     $('.pro-color.cl-w').on('click', function () {
                //         thumbbig.slideTo(1);
                //     });
                // }
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    $('#slide-thumbs').length && slideThumbs();



    if (document.querySelector('.thumbs-staff')) {
        const swiper = document.querySelector('.thumbs-staff');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const thumbsmall = new Swiper('.staff-sm', {
                speed: 1000,
                // loop: true,
                slidesPerView: 1,
                freeMode: true,
                watchSlidesProgress: true,
                // direction: 'vertical',

              
                breakpoints: {
                    // 320: {
                    //     spaceBetween: 7,
                    //     slidesPerView: 3,
                    //     direction: 'horizontal',
                    // },

                    // 768: {
                    //     spaceBetween: 10,
                    //     slidesPerView: 3,
                    //     direction: 'vertical',
                    // },
                    // 1024: {
                    //     spaceBetween: 15,
                    //     slidesPerView: 3,
                    //     direction: 'vertical',
                    // }
                }
            });

            const thumbbig = new Swiper('.staff-bg', {
                speed: 1000,
                // loop: true,
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },
                thumbs: {
                    swiper: thumbsmall,
                },
            });
            //  click slide
            // if ($('.pro-color.cl-w').length) {
            //     $('.pro-color.cl-w').on('click', function () {
            //         thumbbig.slideTo(1);
            //     });
            // }
        }
        catch (err) {
            console.log(err)
        }
    }

}