$(document).ready(function () {
    $('.project_btns button').on('focus', function (e) {
        $(this).parents('.project_element').addClass('project_element--active');
    });

    $('.project_btns button').on('blur', function (e) {
        $(this).parents('.project_element').removeClass('project_element--active');
    });


    function moveProgressBar(node, nodeLine, tooltip, animationLenght = 1500) {

        const progressElement = $(node);
        progressElement.each(function (value, item) {

            console.log(item)
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPersent + '%'
            }, animationLenght);
            $(item).find(tooltip).show(animationLenght);
        });
    }

    let animate = true;

    $(window).scroll(function () {

        if ($('.dangerous').offset().top <= $(window).scrollTop() +150) {
            if(animate){
                moveProgressBar('.progress_element', '.progress_line', '.progress_tooltip');
            }
            animate = false;
            
        }
    });

    $('.carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 5,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            780:{
                items:3
            },
            980:{
                items:5
            }
        }
    })

});
