(function($) {
  "use strict"; // Start of use strict

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-icon-5', {
    delay: 1000,
    scale: 0
  });
  sr.reveal('.sr-icon-6', {
    delay: 1200,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

$(document).ready(function() {
		
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2016-12-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-12-01'
      },
      {
        title: 'Long Event',
        start: '2016-12-07',
        end: '2016-12-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-12-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-12-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-12-11',
        end: '2016-12-13'
      },
      {
        title: 'Meeting',
        start: '2016-12-12T10:30:00',
        end: '2016-12-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-12-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-12-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-12-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-12-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-12-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2016-12-28'
      }
    ]
  });
  
});
var currentAttrValue="";
//Open Modal
 $(document).ready(function() {
	$('.member-details').on('click', function(e)  {
		currentAttrValue = $(this).attr('Modal');
    $('#element').tooltip("hide");
    $('#Modal'+currentAttrValue).modal('show');
		e.preventDefault();
	});
});

//Evento al cerrar Modal
 $(document).ready(function() {
	$('.modal-right .close').on('click', function(e)  {
		$('#element').tooltip("show");
		e.preventDefault();
	});
});


var flag = 0;
var flag1 = 0;
$(window).ready(function() {
    $(window).scroll(function() {
      var pos = window.scrollY;
      if (pos > 1200 && flag == 0) {
        $("#element").tooltip("show");
        flag++;
      }
      if (pos > 1900 && flag1 == 0) {
        $("#element1").tooltip("show");
        flag1++;
      }
    });
});

$(window).ready(function(){
  var ancho = screen.width;
  if(ancho>767 && ancho<1001){
    var element = document.getElementById("diamond");
    element.classList.remove("col-md-8");
    element.classList.add("col-md-11");
  }
});


$(window).resize(function(){
  var ancho = $(window).width(); 
  if(ancho>767 && ancho<1001){
    var element = document.getElementById("diamond");
    element.classList.remove("col-md-8");
    element.classList.add("col-md-11");
  }
   if(ancho>1001){
    var element = document.getElementById("diamond");
    element.classList.remove("col-md-11");
    element.classList.add("col-md-8");
  }
});
