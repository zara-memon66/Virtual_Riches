/** Sticky Navigation with Animation */

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $('.section-1').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});


/** counter animation */
let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing", // Add a comma here
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        }); // Close the animate options
    }); // Close the each function
};

// Function to count numbers when in viewport
function nCount(selector) {
    $(selector).each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

let a = 0;

$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect h1");
    }
});



// Get the header element
const header = document.querySelector('header');

// Get the offset position of the header
const headerOffset = header.offsetTop;

// Function to add the 'sticky' class to the header when scrolling
function makeHeaderSticky() {
    if (window.pageYOffset > headerOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Listen for the scroll event and call the function
window.addEventListener('scroll', makeHeaderSticky);


