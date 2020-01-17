function scrollHand() {



  var controller = new ScrollMagic.Controller();


  let tube = new TimelineMax();
  tube.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      curviness: 1.25,
      values: [{
        x: "20%",
        y: "300%"
      }],
    },
    transformOrigin: 'bottom center',
  }));
  tube.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      curviness: 1.25,
      values: [{
        x: "210%",
        y: "340%"
      }],
    },
    rotation: -60,
    transformOrigin: 'bottom center',
  }));
  tube.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      curviness: 1.25,
      values: [{
        x: "800%",
        y: "350%"
      }],
    },
    rotation: -70,
    transformOrigin: 'bottom center',
  }));
  let scene1 = new ScrollMagic.Scene({
    triggerElement: ".pile",
    duration: '35%',
    offset: 200,
  }).setTween(tube).addTo(controller);




  let tube2 = new TimelineMax();
  tube2.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      values: [{
        x: "950%",
        y: "450%"
      }],
    },
    rotation: 0,
    transformOrigin: 'bottom center',
  }));
  tube2.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      curviness: 1.25,
      values: [{
        x: "950%",
        y: "600%"
      }],
    },
    rotation: 30,
    transformOrigin: 'bottom center',
  }));

  let scene2 = new ScrollMagic.Scene({
    triggerElement: ".pile",
    duration: '40%',
    offset: 570,
  }).setTween(tube2).addTo(controller);





  let tube3 = new TimelineMax();

  tube3.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      values: [{
        x: "950%",
        y: "1150%"
      }],
    },
    rotation: 30,
    transformOrigin: 'bottom center',
  }));

  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".customize",
    duration: '150%',
    offset: 600,
    triggerHook: 0.7,
    // ease: Power0.easeNone,
  }).setTween(tube3).addTo(controller);



  let tube4 = new TimelineMax();

  tube4.add(TweenMax.to('.pilePaper', 1, {
    bezier: {
      values: [{
        x: "950%",
        y: "1170%"
      }],
    },
    opacity: 0,
    rotation: 30,

  }));

  tube4.add(TweenMax.to('.hand1', 4, {
    opacity: 0.5,
    rotation: -30,
    x: -50
  }));
  tube4.add(TweenMax.to('.hand1', 1, {
    opacity: 0,
    rotation: -30,
    x: -50
  }));
  tube4.add(TweenMax.to('.hand2', 1, {
    opacity: 0.5,
    rotation: -30,
    x: -50
  }));
  tube4.add(TweenMax.to('.hand2', 4, {
    opacity: 0.75,
    rotation: -45,
    x: -100,
    y: 100
  }));
  tube4.add(TweenMax.to('.hand2', 4, {
    opacity: 1,
    rotation: -90,
    x: -180,
    y: 150
  }));


  let scene4 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    duration: '20%',
    offset: 50,
    triggerHook: 1,
    // ease: SlowMo.easeIn,
  }).setTween(tube4).addTo(controller);
}




// let smokePara = new TimelineMax({
//   repeat: -1,
// });

// smokePara.to('.smokeS', 3, {
//   x: "500%",
//   y: "-250%",
//   opacity: 0,
//   scale: 2.5,
//   ease: Power1.easeIn,
// }).to('.smokeM', 0.1, {
//   opacity: 1,
//   ease: Power0.easeNone,
// }).to('.smokeM', 3, {
//   x: "500%",
//   y: "-250%",
//   opacity: 0,
//   scale: 2.5,
//   ease: Power1.easeIn,
// }).to('.smokeL', 0.1, {
//   opacity: 1,
//   ease: Power0.easeNone,
// }).to('.smokeL', 3, {
//   x: "500%",
//   y: "-300%",
//   opacity: 0,
//   scale: 2.8,
//   ease: Power1.easeIn,
// });

// let sceneSmoke = new ScrollMagic.Scene({
//   triggerElement: '.home_custom',
//   daration: '100%'
// }).setTween(smokePara).addIndicators().addTo(controller);

var nwidth = $(window).width();
console.log(nwidth);
if (nwidth > 1500) {
  scrollHand();
};