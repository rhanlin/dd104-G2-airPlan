$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    responsiveClass: true,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      376: {
        items: 4,
      },
      499: {
        items: 5,
      },
      575: {
        items: 5,
      },
      767: {
        items: 8,
      },
      991: {
        items: 10,
      },
      1199: {
        items: 12,
      }
    }
  })

  $('.owl-carousel').on('mousewheel', function (e) {

    if (e.originalEvent.deltaY > 0) {
      // console.log(e.originalEvent.deltaY)
      owl.trigger('next.owl');
    } else {
      // console.log(e.originalEvent.deltaY)
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
})