$(function() {

	// Custom JS

   // console.log();

    $('.post').on('mouseenter', function(){
        $(this).toggleClass('active');
    });
    $('.post').on('mouseleave', function(){
        $(this).toggleClass('active');
    });

    function my_couner(){

        var product_inner_result = $('.product_inner_result');
        var product_inner_start = 0;

        $('.product_inner_plus').on('click',function(){
            product_inner_start ++;
            product_inner_result.html(product_inner_start);
        });
        $('.product_inner_minus').on('click',function(){
            if(product_inner_start == 0){
                return
            }else{
                product_inner_start --;
                product_inner_result.html(product_inner_start);
            }
        });

    };

    $('.basket .dell').on('click', function(){
        $(this).parents('.product_wrap').fadeOut();
    });

    $('.search').on('click', function(){
        $('.search-block').toggleClass('active');
    });

    $('.search-block .dell').on('click', function(){
        $('.search-block').toggleClass('active');
    });

    $(document).ready(function(){
        $('.online .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:false,
            navSpeed:500,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });

        my_couner();
    });

    lightbox.option({
        'showImageNumberLabel' : false
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    });


});
