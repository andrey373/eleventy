$(document).ready(function(){
    $(".product_slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        center: true
    });

    let reviewsLeftBtn = document.querySelector('.product_prev');
    let reviewsRightBtn = document.querySelector('.product_next');
    reviewsLeftBtn.addEventListener('click', function(){
        $('.product_slider').trigger('prev.owl.carousel');
    });
    reviewsRightBtn.addEventListener('click', function(){
        $('.product_slider').trigger('next.owl.carousel');
    });


    $(".customer_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0 : {
                items: 1,
                center: false
            }, 
            769: {
                items: 2
            },
            1231 : {
                items: 3,
                center: true
            }
        }
    });

    let customerPrev = document.querySelector('.customer_prev');
    let customerNext = document.querySelector('.customer_next');
    customerPrev.addEventListener('click', function(){
        $('.customer_slider').trigger('prev.owl.carousel');
    });
    customerNext.addEventListener('click', function(){
        $('.customer_slider').trigger('next.owl.carousel');
    });

});