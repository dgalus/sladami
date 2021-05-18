// Menu.
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".mnavbar");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// Init AOS.
AOS.init({
  disable: function() {
    return window.innerWidth < 1024;
  }
});


// Timeline onclick moving.
const slider = document.querySelector('.timeline');
let isDown = false;
let startX;
let scrollLeft;
let startPos;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = window.event.clientX;
    startPos = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    slider.scrollLeft = startPos + (startX - window.event.clientX);
});


// Smooth scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $(".mnavbar").height() - 20
        }, 1000);
        return false;
      }
    }
});
