$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    responsiveClass: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 4,
        nav: true
      },
      575: {
        items: 4,
        nav: true,
      },
      767: {
        items: 6,
        nav: true,
      },
      991: {
        items: 7,
        nav: true,
      },
      1199: {
        items: 8,
        nav: true,
      }
    }
  })
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
})