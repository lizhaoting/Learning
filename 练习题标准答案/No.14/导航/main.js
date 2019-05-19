jQuery(document).ready(function($) {

    function whichTransitionEvent() {
        var el = document.createElement('event'),
            transitionEvents = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'transition'       : 'transitionend'
            };
        for(var t in transitionEvents){
            if( el.style[t] !== undefined ){
                return transitionEvents[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent();

    $('[data-toggle="offcanvas"], .overlay').click(function () {
        $('.overlay').toggleClass('active');
        $('body').toggleClass('active');
        $('.row-offcanvas').toggleClass('active');
        $('.sidebar-offcanvas').toggleClass('active');
        $('.navbar-toggle').toggleClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
             function(e) {
               $('.navbar-collapse').removeClass('transition');
        });
    });

    $('.navbar .nav a').click(function () {
        $('.overlay').removeClass('active');
        $('body').removeClass('active');
        $('#navbar').removeClass('in');
        $('.row-offcanvas').removeClass('active');
        $('.sidebar-offcanvas').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
        $('.transition').one(transitionEvent,
             function(e) {
               $('.navbar-collapse').removeClass('transition');
        });
    });
});
