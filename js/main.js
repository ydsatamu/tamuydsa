const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

function aboutUs(){
    var text = document.getElementById("aboutUsText");
    text.innerHTML = "Texas A&M's Young Democratic Socialists of America is a College Station based organization aiming to create change on a local basis. Through education, mutual aid, petitions, and protests YDSA at TAMU strives to help our community and spread leftist ideas.";
}

function education(){
    var text = document.getElementById("aboutUsText");
    text.innerHTML = "YDSA aims to educate members and the general population about leftist ideologies. This is through the use of book club meetings, theory teaching, tabling, and more. We hope to broaden people's mindset and become more open to accepting social change through socialist policies.";
}

function legislation(){
    var text = document.getElementById("aboutUsText");
    text.innerHTML = "YDSA also strives to make legal changes to get rid of racism, sexism, voter supression, etc. on a local stage through petitions, protests, and other legislative measures. ";
}
