var original = $('#link_services').css({left: '350', top: '30'});
var originalW = $('#link_works').css({left: '100', top: '200'});
var originalP = $('#link_profile').css({right: '365', top: '50'});
var originalC = $('#link_contact').css({right: '135', top: '200'});
window.onload = main;
////NAV
//===================================================
function main() {

    $("#servicesLink").click(function () {
        $('#services').css({bottom: "0px"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').hide();
        $('#link_works,#link_profile,#link_contact').hide();
    });


    $("#contactLink").click(function () {
        $('#contact').css({top: "0px"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').hide();
        $('#link_works,#link_profile,#link_services').hide();
        $('#name').hide();
    });

    $("#worksLink").click(function () {
        $('#works').css({right: "0"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').hide();
        $('#link_services,#link_profile,#link_contact').hide();
        $('#name').hide();
        $('body').css({overflow: 'auto'});
    });

    $("#profileLink").click(function () {
        $('#profile').css({left: "0"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').hide();
        $('#link_services,#link_works,#link_contact').hide();
        $('#name').hide();
        $('body').css({overflow: 'auto'});
    });

    $("#btn_close").click(function () {
        $('#services').css({bottom: "-400px"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').show();
        $('#link_works,#link_profile,#link_contact').show();
        clearInterval(move);
        initialBird.attr('style', original);
    });

    $("#btn_close2").click(function () {
        $('#contact').css({top: "-400px"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').show();
        $('#link_works,#link_profile,#link_services').show();
        clearInterval(move);
        initialBird4.attr('style', originalC);
        $('#name').show();
    });

    $("#btn_menu").click(function () {
        $('#works').css({right: "-100%"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').show();
        $('#link_services,#link_profile,#link_contact').show();
        clearInterval(move);
        initialBird2.attr('style', originalW);
        $('#name').show();
        $('body').css({overflow: 'hidden'});
    });

    $("#btn_menu2").click(function () {
        $('#profile').css({left: "-100%"});
        $('#servicesLink,#worksLink,#contactLink,#profileLink').show();
        $('#link_services,#link_works,#link_contact').show();
        clearInterval(move);
        initialBird3.attr('style', originalP);
        $('#name').show();
        $('body').css({overflow: 'hidden'});


    });
}

////ANIMATIONS
//=====================================================
var initialBird;
var initialBird2;
var initialBird3;
var initialBird4;
var transition;
var stop;

var birdsL;
var birdsR;


$(document).ready(function () {


    initialBird = $('#link_services');
    initialBird2 = $('#link_works');
    initialBird3 = $('#link_profile');
    initialBird4 = $('#link_contact');

//    birdsL = ['img/nav/BirdAnimation/left/bird1.png', 'img/nav/BirdAnimation/left/bird2.png', 'img/nav/BirdAnimation/left/bird3.png', 'img/nav/BirdAnimation/left/bird4.png', 'img/nav/BirdAnimation/left/bird5.png', 'img/nav/BirdAnimation/left/bird6.png', 'img/nav/BirdAnimation/left/bird7.png', 'img/nav/BirdAnimation/left/bird8.png', 'img/nav/BirdAnimation/left/bird9.png', 'img/nav/BirdAnimation/left/bird10.png', 'img/nav/BirdAnimation/left/bird11.png', 'img/nav/BirdAnimation/left/bird12.png', 'img/nav/BirdAnimation/left/bird13.png', 'img/nav/BirdAnimation/left/bird14.png', 'img/nav/BirdAnimation/left/bird15.png', 'img/nav/BirdAnimation/left/bird16.png', 'img/nav/BirdAnimation/left/bird17.png', 'img/nav/BirdAnimation/left/bird18.png', 'img/nav/BirdAnimation/left/bird19.png', 'img/nav/BirdAnimation/left/bird20.png', 'img/nav/BirdAnimation/left/bird21.png', 'img/nav/BirdAnimation/left/bird22.png', 'img/nav/BirdAnimation/left/bird23.png', 'img/nav/BirdAnimation/left/bird24.png'];
//
//    birds2 = ['img/nav/BirdAnimation/left3/bird-1.png', 'img/nav/BirdAnimation/left3/bird-2.png', 'img/nav/BirdAnimation/left3/bird-3.png', 'img/nav/BirdAnimation/left3/bird-4.png', 'img/nav/BirdAnimation/left3/bird-5.png', 'img/nav/BirdAnimation/left3/bird-6.png', 'img/nav/BirdAnimation/left3/bird-7.png', 'img/nav/BirdAnimation/left3/bird-8.png', 'img/nav/BirdAnimation/left3/bird-9.png', 'img/nav/BirdAnimation/left3/bird-10.png', 'img/nav/BirdAnimation/left3/bird-11.png', 'img/nav/BirdAnimation/left3/bird-12.png', 'img/nav/BirdAnimation/left3/bird-13.png', 'img/nav/BirdAnimation/left3/bird-14.png', 'img/nav/BirdAnimation/left3/bird-15.png'];

//    birds = ['img/nav/BirdAnimation/left2/bird-1.png', 'img/nav/BirdAnimation/left2/bird-2.png', 'img/nav/BirdAnimation/left2/bird-3.png', 'img/nav/BirdAnimation/left2/bird-4.png', 'img/nav/BirdAnimation/left2/bird-5.png', 'img/nav/BirdAnimation/left2/bird-6.png', 'img/nav/BirdAnimation/left2/bird-7.png', 'img/nav/BirdAnimation/left2/bird-8.png', 'img/nav/BirdAnimation/left2/bird-9.png', 'img/nav/BirdAnimation/left2/bird-10.png'];

    birdsL = ['img/nav/BirdAnimation/left4/bird-1.png', 'img/nav/BirdAnimation/left4/bird-2.png', 'img/nav/BirdAnimation/left4/bird-3.png', 'img/nav/BirdAnimation/left4/bird-4.png', 'img/nav/BirdAnimation/left4/bird-5.png', 'img/nav/BirdAnimation/left4/bird-6.png', 'img/nav/BirdAnimation/left4/bird-7.png', 'img/nav/BirdAnimation/left4/bird-8.png', 'img/nav/BirdAnimation/left4/bird-9.png'];

    birdsR = ['img/nav/BirdAnimation/right4/bird-1.png', 'img/nav/BirdAnimation/right4/bird-2.png', 'img/nav/BirdAnimation/right4/bird-3.png', 'img/nav/BirdAnimation/right4/bird-4.png', 'img/nav/BirdAnimation/right4/bird-5.png', 'img/nav/BirdAnimation/right4/bird-6.png', 'img/nav/BirdAnimation/right4/bird-7.png', 'img/nav/BirdAnimation/right4/bird-8.png', 'img/nav/BirdAnimation/right4/bird-9.png'];


//    birdsR = ['img/nav/BirdAnimation/right/bird1.png', 'img/nav/BirdAnimation/right/bird2.png', 'img/nav/BirdAnimation/right/bird3.png', 'img/nav/BirdAnimation/right/bird4.png', 'img/nav/BirdAnimation/right/bird5.png', 'img/nav/BirdAnimation/right/bird6.png', 'img/nav/BirdAnimation/right/bird7.png', 'img/nav/BirdAnimation/right/bird8.png', 'img/nav/BirdAnimation/right/bird9.png', 'img/nav/BirdAnimation/right/bird10.png', 'img/nav/BirdAnimation/right/bird11.png', 'img/nav/BirdAnimation/right/bird12.png', 'img/nav/BirdAnimation/right/bird13.png', 'img/nav/BirdAnimation/right/bird14.png', 'img/nav/BirdAnimation/right/bird15.png', 'img/nav/BirdAnimation/right/bird16.png', 'img/nav/BirdAnimation/right/bird17.png', 'img/nav/BirdAnimation/right/bird18.png', 'img/nav/BirdAnimation/right/bird19.png', 'img/nav/BirdAnimation/right/bird20.png', 'img/nav/BirdAnimation/right/bird21.png', 'img/nav/BirdAnimation/right/bird22.png', 'img/nav/BirdAnimation/right/bird23.png', 'img/nav/BirdAnimation/right/bird24.png'];/*
//    function Over() {
//        var i = arguments[0];
//        transition = setInterval(function () {
//            arguments[2].css('background-image', 'url(' + arguments[3][i++] + ')');
//            if (i === arguments[3].length) {
//                i = 0;
//            }
//        }, arguments[1]);
//    }
//
//    function Out(bird, imgPos) {
//        clearInterval(transition);
//        bird.css('background-image', 'url(img/nav/BirdAnimation/left4/bird-' + imgPos + '.png)');
//    }

    $("#servicesLink").mouseover(function () {
        var i = 8;
        transition = setInterval(function () {
            initialBird.css('background-image', 'url(' + birdsL[i++] + ')');
            if (i === birdsL.length) {
                i = 0;
            }
        }, 85);


        $("#servicesLink").mouseout(function () {
            clearInterval(transition);
            initialBird.css('background-image', 'url(img/nav/BirdAnimation/left4/bird-8.png)');
        });

    });

    $("#worksLink").mouseover(function () {
        var i = 2;
        transition = setInterval(function () {
            initialBird2.css('background-image', 'url(' + birdsL[i++] + ')');
            if (i === birdsL.length) {
                i = 0;
            }
        }, 90);

        $("#worksLink").mouseout(function () {
            clearInterval(transition);
            initialBird2.css('background-image', 'url(img/nav/BirdAnimation/left4/bird-2.png)');
        });
    });

    $("#profileLink").mouseover(function () {
        var i = 4;
        transition = setInterval(function () {
            initialBird3.css('background-image', 'url(' + birdsR[i++] + ')');
            if (i === birdsR.length) {
                i = 0;
            }
        }, 90);

        $("#profileLink").mouseout(function () {
            clearInterval(transition);
            initialBird3.css('background-image', 'url(img/nav/BirdAnimation/right4/bird-4.png)');
        });
    });

    $("#contactLink").mouseover(function () {
        var i = 1;
        transition = setInterval(function () {
            initialBird4.css('background-image', 'url(' + birdsR[i++] + ')');
            if (i === birdsR.length) {
                i = 0;
            }
        }, 100);

        $("#contactLink").mouseout(function () {
            clearInterval(transition);
            initialBird4.css('background-image', 'url(img/nav/BirdAnimation/right4/bird-9.png)');
        });
    });


//MOVEMENT
//============================================================ 

    $("#servicesLink").click(function () {
        clearInterval(transition);
        var i = 0;
        move = setInterval(function () {
            initialBird.css('background-image', 'url(' + birdsL[i++] + ')');
            if (i === birdsL.length) {
                i = 0;
            }
        }, 60);
        initialBird.animate({right: '-120%', top: '-5%'}, 2500);
    });

    $("#worksLink").click(function () {
        clearInterval(transition);
        var i = 0;
        move = setInterval(function () {
            initialBird2.css('background-image', 'url(' + birdsL[i++] + ')');
            if (i === birdsL.length) {
                i = 0;
            }
        }, 70);
        initialBird2.animate({right: '-120%', top: '15%'}, 3000);
    });

    $("#profileLink").click(function () {
        clearInterval(transition);
        var i = 0;
        move = setInterval(function () {
            initialBird3.css('background-image', 'url(' + birdsR[i++] + ')');
            if (i === birdsR.length) {
                i = 0;
            }
        }, 75);
        initialBird3.animate({left: '-120%', top: '20%'}, 2500);
    });

    $("#contactLink").click(function () {
        clearInterval(transition);
        var i = 0;
        move = setInterval(function () {
            initialBird4.css('background-image', 'url(' + birdsR[i++] + ')');
            if (i === birdsR.length) {
                i = 0;
            }
        }, 65);
        initialBird4.animate({left: '-120%', top: '-5%'}, 2500);
    });



});


