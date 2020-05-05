$(document).ready(function() {
    try {
        $('.slider').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
    } catch (e) {
        $('.error').show().text(e);
    }

    var typed = new Typed('.text', {
        strings: ["1º BREVE <strong class='primary'>SLOGAN.</strong>", "2º BREVE <strong class='secondary'>SLOGAN.</strong>"],
        typeSpeed: 60,
        loop: true
    });

    $(window).scroll(function() {
        var top = $(window).scrollTop();
        var header = $('header');
        var nameClass = 'transparent-bg';

        if (top > 70) {
            header.addClass(nameClass);
        } else if (header.hasClass(nameClass)) {
            header.removeClass(nameClass);
        }
    });
});