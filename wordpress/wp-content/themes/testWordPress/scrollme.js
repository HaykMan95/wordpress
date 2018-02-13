(function ($) {
    $(document).ready(function(){

        // hide .navbar first
        changeMenu();

        

        
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                changeMenu();
            });
        });

        $('nav a').click(function () {
            //removing the previous selected menu state
            $('nav').find('a.active').removeClass('active');
            //adding the state for this parent menu
            $(this).addClass('active');

        });

        function changeMenu() {
            var service = $('#service').position().top - 100;
            var mission = $('#mission').position().top - 100;
            var help = $('#help').position().top - 200;
            var contact = $('#contact').position().top - 300;
            
            if ($(this).scrollTop() > 550) {
                $('nav').addClass('black');
            } else {
                $('nav').removeClass('black');
            }
            $('nav').find('a.active').removeClass('active');
            if($(this).scrollTop() >= service && $(this).scrollTop() < mission) {
                $('nav ul li:nth-child(3)').children().addClass('active');
            } else if($(this).scrollTop() >= mission && $(this).scrollTop() < help) {
                $('nav ul li:nth-child(2)').children().addClass('active');
            } else if($(this).scrollTop() >= help && $(this).scrollTop() < contact) {
                $('nav ul li:nth-child(4)').children().addClass('active');
            } else if($(this).scrollTop() >= contact) {
                $('nav ul li:nth-child(5)').children().addClass('active');
            }
        }
    });
}(jQuery));

