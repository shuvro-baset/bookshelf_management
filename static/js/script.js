// Phone navbar

document.getElementById('pop_button').addEventListener('click', () => {
    if (document.getElementById('phone_outer').style.bottom == "-440px") {
        document.getElementById('phone_outer').style.bottom = "0px";
        document.getElementById('phone_outer').style.background = "#fff";
        document.getElementById('pop_button').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('phone_outer').style.bottom = "-440px";
        document.getElementById('phone_outer').style.background = "#80d5f9";
        document.getElementById('pop_button').style.transform = "rotate(0deg)";
    }
});

// Counter

// ----- Getting the y axis position of counter section div
var element = document.getElementById('counter_section');
var position = element.getBoundingClientRect();
var yAxis = position.top;

yAxis = Math.floor(yAxis);

const Counter = function(id, count, speed) {
    var counter = 0;
    
    for(var i = 0; i < count; i++) {
        (function(i) {
            setTimeout(
                function() {
                    counter += 1;
                    document.getElementById(id).innerHTML = counter;
                }, speed * (i + 1)
            );
        })(i);
    }
};

// Counter();

var scrolled;
var counted = false;
var height = yAxis - 500;

window.addEventListener('scroll', () => {
    scrolled = window.scrollY;
    scrolled = Math.floor(scrolled);
    
    if (scrolled >= height && scrolled <= yAxis) {
        if (counted == false) {
            console.log('Beep Beep');
            Counter('books_count', 200, 30);
            Counter('blogs_count', 142, 30);
            Counter('readers_count', 4522, 1);
            Counter('likes_count', 65452, .1);
            counted = true;
        }
    }
});
