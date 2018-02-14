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

        function changeMenu() {
            if ($(this).scrollTop() > 650) {
                $('nav').addClass('black');
            } else {
                $('nav').removeClass('black');
            }
        }
    });
}(jQuery));

