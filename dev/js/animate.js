var controller = new ScrollMagic.Controller();


//---飄紙3 飄飄飄---

let grassPin = new TimelineMax();
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      // x: "330%",
      y: "300%"
    }],
  },
  // rotation: -30,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      x: "210%",
      y: "340%"
    }],
  },
  rotation: -60,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      x: "800%",
      y: "340%"
    }],
  },
  rotation: -60,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      x: "950%",
      y: "450%"
    }],
  },
  rotation: 0,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      x: "950%",
      y: "1000%"
    }],
  },
  rotation: 30,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.pilePaper', 1, {
  bezier: {
    // curviness: 1.25,
    values: [{
      x: "950%",
      y: "1050%"
    }],
  },
  opacity: 0,
  rotation: 30,
  transformOrigin: 'bottom center',
  // ease: Power1.easeOut,
}));

let sceneGrass = new ScrollMagic.Scene({
  triggerElement: ".pile",
  duration: '150%',
  offset: 250,
  // triggerHook: 0,
  ease: Power1.easeIn,
}).setTween(grassPin).addIndicators().addTo(controller);





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