$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    responsiveClass: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      499: {
        items: 4,
        nav: true
      },
      575: {
        items: 5,
        nav: true,
      },
      767: {
        items: 8,
        nav: true,
      },
      991: {
        items: 10,
        nav: true,
      },
      1199: {
        items: 12,
        nav: true,
      }
    }
  })

  $('.owl-carousel').on('mousewheel', function (e) {

    if (e.originalEvent.deltaY > 0) {
      console.log(e.deltaY)
      owl.trigger('next.owl');
    } else {
      console.log(e.deltaY)
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
})