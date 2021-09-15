$(function(){

    let anchor = $('a[href^="#anchor"]');
    anchor.on('click', function(evt){
        evt.preventDefault();
       let link = $(this).attr('href');
       $('html, body').animate({
            scrollTop : $(link).offset().top
       }, 1500)
    })

})