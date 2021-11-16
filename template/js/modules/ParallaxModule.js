export default function ParallaxModule() {

    // function parallax() {
    //     let width = $(window).width();
    //     if (width >= 768 && $('.about-img')) {
    //         var rect = $('.about-img')[0].getBoundingClientRect();
    //         var mouse = { x: 0, y: 0, moved: false };

    //         $(".about-img").mousemove(function (e) {
    //             mouse.moved = true;
    //             mouse.x = e.clientX - rect.left;
    //             mouse.y = e.clientY - rect.top;
    //         });

    //         // Ticker event will be called on every frame
    //         TweenLite.ticker.addEventListener('tick', function () {
    //             if (mouse.moved) {
    //                 parallaxIt(".task-todo", -30);
    //                 parallaxIt(".task-completed", -30);
    //                 parallaxIt(".total-balance", -30);
    //                 parallaxIt(".about-im", 10);
    //             }
    //             mouse.moved = false;
    //         });

    //         function parallaxIt(target, movement) {
    //             TweenMax.to(target, 0.5, {
    //                 x: (mouse.x - rect.width / 2) / rect.width * movement,
    //                 y: (mouse.y - rect.height / 2) / rect.height * movement
    //             });
    //         }

    //         $(window).on('resize scroll', function () {
    //             rect = $('.about-img')[0].getBoundingClientRect();
    //         })
    //     }
    // }

    // parallax();

    // $(window).on("resize", function () { 
    //     parallax();
    // });


    //parallax 2

    let width = $(window).width();
    if (width >= 1200) {
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
            this.querySelectorAll('.parallax').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    }

}