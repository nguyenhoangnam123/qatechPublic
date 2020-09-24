var lastPosition = 0;
$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        //remove navbar box-shadow
        $('.navbar').css({
            'box-shadow': 'none',
            'border-bottom': '1px solid #fff'
        });
        if (scroll == 0) {
            $('.navbar').css({
                'box-shadow': '0px 3px 15px 0 rgba(7,7,7,.5)',
                'border-bottom': '1px solid #1b75bc',
                'top': 0,
                'position': 'fixed'
            });
        }
        //navbar track up-side-down mouse scroll, if mouse scrolls down then navbar disappears
        if (scroll > 0) {
            if (scroll > lastPosition) {
                $('.navbar').css({
                    'top': '-100%'
                });
            } else {
                $('.navbar').css({
                    'top': '0'
                });
            }
        }
        lastPosition = scroll;
        // console.log(scroll);
        if (scroll > 20) {
            $('#hero h1').each(() => $('#hero h1').css({
                "transform": "translateY(0, " + scroll / 2 + "%)",
                "opacity": (1 - scroll / 768)
            }));
        }
        if (scroll > ($('.supplier').offset().top - 0.9 * $(window).height())) {
            $('.itemList').css({
                'transform': "translateY(0)",
                'z-index': '0'
            });
            $('.supplier').css({
                'opacity': "1",
                'z-index': "9999"
            });
            if (scroll > ($('.supplier').offset().top - 0.9 * $(window).height())) {
                // console.log($('.supplier').offset().top);
                $('.supplier .col-sm-3:nth-child(1) img').css({
                    'transform': 'translateX(0vw)',
                    'opacity': '1'
                });
                $('.supplier .col-sm-3:nth-child(4) img').css({
                    'transform': 'translateX(0vw)',
                    'opacity': '1'
                });
                $('.supplier .col-sm-3:nth-child(2) img').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
                $('.supplier .col-sm-3:nth-child(3) img').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }
        }
    });
    $('.wrapControl i').click(function(){
        console.log('Hi')
    });

});