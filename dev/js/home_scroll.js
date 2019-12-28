var controller = new ScrollMagic.Controller();

// 吊紙中間消失
let hang3 = TweenMax.to('.hang3', 1, {
    opacity: 0,
});

let sceneHang = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 150,
    duration: '15%',
}).setTween(hang3).addIndicators().addTo(controller);


// 飄紙1 出現
let floatShow1 = TweenMax.to('.floatPaper1', 1, {
    opacity: 1,
});

let sceneFloat_show1 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 200,
    duration: '15%',
}).setTween(floatShow1).addIndicators().addTo(controller);


// 飄紙1 飄飄飄
let floatGo1 = TweenMax.to('.floatPaper1', 1, {
    x: -650,
    y: 500,
    scale: 1.2,
});

let sceneFloat_go1 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 350,
    duration: '50%',
    ease: Power1.easeIn,
}).setTween(floatGo1).addIndicators().addTo(controller);


// 飄紙1 消失
let floatHide1 = TweenMax.to('.floatPaper1', 1, {
    opacity: 0,
});

let sceneFloat_hide1 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 800,
    duration: '20%',
}).setTween(floatHide1).addIndicators().addTo(controller);


// 飄紙2 出現
let floatShow2 = TweenMax.to('.floatPaper2', 1, {
    opacity: 1,
});

let sceneFloat_show2 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 900,
    duration: '10%',
}).setTween(floatShow2).addIndicators().addTo(controller);


// 飄紙2 飄飄飄
let floatGo2 = TweenMax.to('.floatPaper2', 1, {
    x: 850,
    y: 300,
    scale: 1.1,
});

let sceneFloat_go2 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 900,
    duration: '35%',
    ease: Power1.easeIn,
}).setTween(floatGo2).addIndicators().addTo(controller);


// 飄紙2 消失
let floatHide2 = TweenMax.to('.floatPaper2', 1, {
    opacity: 0,
});

let sceneFloat_hide2 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 1200,
    duration: '10%',
}).setTween(floatHide2).addIndicators().addTo(controller);


// 飄紙3 出現
let floatShow3 = TweenMax.to('.floatPaper3', 1, {
    opacity: 1,
});

let sceneFloat_show3 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 1200,
    duration: '10%',
}).setTween(floatShow3).addIndicators().addTo(controller);


// 飄紙3 飄飄飄
let floatGo3 = TweenMax.to('.floatPaper3', 1, {
    bezier: {
        curviness: 1.25,
        autoRotate: 260,
        values: [{
            x: -1000,
            y: 100
        }, {
            x: -550,
            y: 50
        }, {
            x: -1700,
            y: 600,
        }],

    },
    ease: Power1.easeOut,
});

let sceneFloat_go3 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 1300,
    duration: '75%',
    ease: Power1.easeIn,
}).setTween(floatGo3).addIndicators().addTo(controller);


// 墨水倒
var bottlePin = new TimelineMax();

bottlePin.add(TweenMax.to('.bottle', 1, {
    x: 5,
    y: 5,
    rotation: 125,
    transformOrigin: 'left,bottom',
}));


var sceneBottle = new ScrollMagic.Scene({
    triggerElement: ".write",
    duration: '100%',
    triggerHook: 0
}).setPin('.write').setTween(bottlePin).addIndicators().addTo(controller);

// let bottle = TweenMax.to('.bottle', 1, {
//     x: 5,
//     y: 5,
//     rotation: 125,
//     transformOrigin: 'left,bottom',
// });

// let sceneBottle = new ScrollMagic.Scene({
//     triggerElement: '.write',
//     offset: 130,
//     duration: '20%',
//     ease: Power1.easeIn,
// }).setTween(bottle).addIndicators().addTo(controller);