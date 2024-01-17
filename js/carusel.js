 $(document).ready(function(){
        $('.portfolio-wedding__image').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev-slide'),
            nextArrow: $('.next-slide')
        });

        $('.portfolio-family__image').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev-slide__family'),
            nextArrow: $('.next-slide__family')
        });

        $('.portfolio-children__image').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev-slide__children'),
            nextArrow: $('.next-slide__children')
        });

        $('.portfolio-lovestory__image').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev-slide__lovestory'),
            nextArrow: $('.next-slide__lovestory')
        });
    });