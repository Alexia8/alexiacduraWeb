//WORKS
//====================================================

$(window).load(function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '.view',
        layoutmode: 'fitColumns'
    });

    $('.portfolioFilter .links').click(function () {
        $('.portfolioFilter .on').removeClass('on');
        $(this).addClass('on');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
    });
});

//SLIDER
//============================================

var pos_left = 0;

setInterval(slider, 3000);

function slider() {
    var slider_content = document.getElementById("slider_content");

    if (pos_left === -309) {
        pos_left = 0;

        slider_content.className = "";
    } else {
        pos_left -= 103;
        slider_content.className = "slider_animate";
    }

    slider_content.style.left = pos_left + "%";
}

//CSS CHANGE
//==========================================================
var OFF;

function home() {
    OFF = true;
    var styleSheet = document.getElementById("styleSheet");
    if (OFF) {
        styleSheet.href = "css/home.css";
        OFF = false;
    }
}

function change() {
    OFF = true;
    var styleSheet = document.getElementById("styleSheet");
    if (OFF) {
        styleSheet.href = "css/drums.css";
        OFF = false;
    }
}

function change2() {
    OFF = true;
    var styleSheet = document.getElementById("styleSheet");
    if (OFF) {
        styleSheet.href = "css/web.css";
        OFF = false;
    }
}

        