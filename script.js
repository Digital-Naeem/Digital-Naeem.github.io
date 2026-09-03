$(document).ready(function () {

    // ==============================
    // Mobile Menu Toggle
    // ==============================

    $('#menu').click(function () {

        $(this).toggleClass('fa-times');

        $('header').toggleClass('toggle');

    });


    // ==============================
    // Close Mobile Menu on Scroll
    // ==============================

    $(window).on('scroll', function () {

        $('#menu').removeClass('fa-times');

        $('header').removeClass('toggle');

    });


    // ==============================
    // Close Mobile Menu on Page Load
    // ==============================

    $(window).on('load', function () {

        $('#menu').removeClass('fa-times');

        $('header').removeClass('toggle');

    });


    // ==============================
    // Smooth Scrolling
    // ==============================

    $('a[href^="#"]').on('click', function (e) {

        const target = $(this).attr('href');

        // Ignore empty # links
        if (target === '#') {
            return;
        }

        // Check if target section exists
        if ($(target).length) {

            e.preventDefault();

            $('html, body').animate({

                scrollTop: $(target).offset().top

            }, 500, 'linear');

        }

    });

});
