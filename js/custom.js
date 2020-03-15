// Nav

function toggle() {
    var header = document.getElementById("header")
    header.classList.toggle('active')
}

// Nav

// Nav-Sticky

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// Nav-Sticky

// Active Nav

$(document).on('click', 'nav ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// Active Nav

// Highlighting Nav

$('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'fadeInLeft',
    begin: function () {
        //I get fired when the animation is starting
    },
    end: function () {
        //I get fired when the animation is ending
    },
    scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

// Highlighting Nav

// Typed

ityped.init(document.querySelector('.ityped'), {
    showCursor: false,
    strings: ['NASIF', 'Web disigner', 'Programmer'],
    loop: true
});

// Typed

// Contact

function validation() {
    var email_form = document.getElementById("email_form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Invalid";
        text.style.color = "#ff0000";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

// Contact

// To_Top

var toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// To_Top

//Animation
$(document).ready(function () {

    $('#prof_pic').waypoint(function (direction) {
        $('#prof_pic').addClass('animated rollIn slow')
        $('#button_1').addClass('animated fadeInLeft fast')
        $('#button_2').addClass('animated fadeInRight slow')
    }, {
        offset: '50%'
    });

    $('#nasif_pic').waypoint(function (direction) {
        $('#nasif_pic').addClass('animated fadeInLeft slow')
        $('#info').addClass('animated fadeInRight slow')
        $('.cv').addClass('animated bounceInDown slow')
    }, {
        offset: '50%'
    });


    $('.box_1').waypoint(function (direction) {
        $('.box_1').addClass('animated rotateInDownLeft slow')
        $('.box_2').addClass('animated fadeInDown slow')
        $('.box_3').addClass('animated rotateInDownRight slow')
        $('.box_4').addClass('animated rotateInDownLeft slow')
        $('.box_5').addClass('animated fadeInUp slow')
        $('.box_6').addClass('animated rotateInDownRight slow')
    }, {
        offset: '50%'
    });

    $('.card_1').waypoint(function (direction) {
        $('.card_1').addClass('animated zoomIn slow')
        $('.card_2').addClass('animated zoomIn slow')
        $('.card_3').addClass('animated zoomIn slow')
        $('.card_4').addClass('animated zoomIn slow')
        $('.card_5').addClass('animated zoomIn slow')
        $('.card_6').addClass('animated zoomIn slow')
        $('.card_7').addClass('animated zoomIn slow')
        $('.card_8').addClass('animated zoomIn slow')
    }, {
        offset: '50%'
    });

    $('.bar').waypoint(function (direction) {
        $('.bar').addClass('animated fadeInUp slow')
    }, {
        offset: '50%'
    });


});

//Animation
