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
            x: -1800,
            y: 400,
        }],

    },
    ease: Power1.easeOut,
});

let sceneFloat_go3 = new ScrollMagic.Scene({
    triggerElement: '.mountain_box',
    offset: 1300,
    duration: '150%',
    ease: Power1.easeIn,
}).setTween(floatGo3).addIndicators().addTo(controller);


// 在桌上的動畫
let bottlePin = new TimelineMax();
// ---墨水倒---
bottlePin.add(TweenMax.to('.bottle', 1, {
    x: 5,
    y: 5,
    rotation: 125,
    transformOrigin: 'bottom',
}));
bottlePin.add(TweenMax.to('.inkImg', 1, {
    opacity: 1,
    scale: 3.2,
    transformOrigin: 'top left',
}));
bottlePin.add(TweenMax.to('.blackWater', 1, {
    opacity: 1,
}));
bottlePin.add(TweenMax.to('.write_text', 1, {
    opacity: 1,
}));


//---桌上工具88---
let writeBg01 = TweenMax.to('.writeTitleBg1', 1, {
    y: "-150%",
    ease: Power0.easeNone,
});
let writeBg02 = TweenMax.to('.writeTitleBg2', 1, {
    x: "-150%",
    ease: Power0.easeNone,
});
let writeBottle = TweenMax.to('.bottle', 1, {
    y: "350%",
    ease: Power0.easeNone,
});
let writeInkS = TweenMax.to('.inkImg', 0, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeInkM = TweenMax.to('.blackWater', 1, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeMany = TweenMax.to('.write_many', 1, {
    y: "150%",
    ease: Power0.easeNone,
});
let writePaper = TweenMax.to('.write_paper', 1, {
    x: "-71.5%",
    ease: Power0.easeNone,
});
let writePen = TweenMax.to('.pen', 1, {
    x: "120%",
    ease: Power0.easeNone,
});

bottlePin.add([writeBg01, writeBg02, writeBottle, writeInkS, writeInkM, writeMany, writePaper, writePen]);


//---雙手進來---
let writeHandL = TweenMax.to('.left_hand', 1, {
    x: "140%",
    y: "-85%",
    ease: Power0.easeNone,
});
let writeHandR = TweenMax.to('.right_hand', 1, {
    x: "-140%",
    y: "-85%",
    ease: Power0.easeNone,
});

bottlePin.add([writeHandL, writeHandR]);


//---雙手第一次向下摺紙---
let writeHandL1 = TweenMax.to('.left_hand', 1, {
    y: "-70%",
    ease: Power0.easeNone,
});
let writeHandR1 = TweenMax.to('.right_hand', 1, {
    y: "-70%",
    ease: Power0.easeNone,
});

bottlePin.add([writeHandL1, writeHandR1]);


//---摺紙第一次變化---
let writePaper1 = TweenMax.to('.write_paper', 0.5, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeFold = TweenMax.to('.foldPaper1', 0.5, {
    opacity: 1,
    ease: Power0.easeNone,
});

bottlePin.add([writePaper1, writeFold]);


//---雙手第二次向下摺紙---
let writeHandL2 = TweenMax.to('.left_hand', 1, {
    x: "142%",
    y: "-50%",
    ease: Power0.easeNone,
});
let writeHandR2 = TweenMax.to('.right_hand', 1, {
    x: "-142%",
    y: "-50%",
    ease: Power0.easeNone,
});

bottlePin.add([writeHandL2, writeHandR2]);


//---摺紙第二次變化---
let writeFoldHide1 = TweenMax.to('.foldPaper1', 0.5, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeFold2 = TweenMax.to('.foldPaper2', 0.5, {
    opacity: 1,
    ease: Power0.easeNone,
});

bottlePin.add([writeFoldHide1, writeFold2]);


//---收手+紙旋轉---
let writeHandL3 = TweenMax.to('.left_hand', 1, {
    x: "144.6%",
    y: "-30.6%",
    rotation: 40,
    transformOrigin: 'top right',
    ease: Power0.easeNone,
});
let writeHandR3 = TweenMax.to('.right_hand', 1, {
    x: "-50%",
    y: "0%",
    ease: Power0.easeNone,
});
let writeFold2_Rot = TweenMax.to('.foldPaper2', 1, {
    x: "-40%",
    y: "-52%",
    rotation: 65,
    ease: Power0.easeNone,
});

bottlePin.add([writeHandL3, writeHandR3, writeFold2_Rot]);


//---紙飛機摺好+變成射出的手---
let writeHandL_Hide1 = TweenMax.to('.left_hand', 0, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeShoothand = TweenMax.to('.shootHand', 0.5, {
    opacity: 1,
    ease: Power0.easeNone,
});
let writeFold2_Hide = TweenMax.to('.foldPaper2', 0.5, {
    opacity: 0,
    ease: Power0.easeNone,
});
let writeFold3 = TweenMax.to('.foldPaper3', 0.5, {
    opacity: 1,
    ease: Power0.easeNone,
});

bottlePin.add([writeHandL_Hide1, writeShoothand, writeFold2_Hide, writeFold3]);


//---(射的手+紙飛機) 往後退---
let writeShoothand_Back = TweenMax.to('.shootHand', 1, {
    x: "-28%",
    ease: Power1.easeInOut,
});
let writeFold3_Back = TweenMax.to('.foldPaper3', 1, {
    x: "-100%",
    ease: Power1.easeInOut,
});
bottlePin.add([writeShoothand_Back, writeFold3_Back]);


//---(射的手+紙飛機) 前進---
let writeShoothand_Go = TweenMax.to('.shootHand', 1, {
    x: "0%",
    ease: Power1.easeIn,
});
let writeFold3_Go = TweenMax.to('.foldPaper3', 1, {
    x: "-50%",
    ease: Power1.easeIn,
});
bottlePin.add([writeShoothand_Go, writeFold3_Go]);


//---紙飛機 射出---
bottlePin.add(TweenMax.to('.foldPaper3', 1, {
    x: "130%",
    y: "-80%",
    ease: Power0.easeNone,
}));

let sceneBottle = new ScrollMagic.Scene({
    triggerElement: ".write",
    duration: '470%',
    triggerHook: 0
}).setPin('.write').setTween(bottlePin).addIndicators().addTo(controller);



//草地上的動畫
let grassPin = new TimelineMax();
//---後、中、前 的草出現---
let catchGrassBack = TweenMax.to('.grassBack', 10, {
    y: "-44%",
    ease: Power1.easeInOut,
});
let catchGrassMid = TweenMax.to('.grassMid', 10, {
    y: "-78%",
    ease: Power1.easeInOut,
});
let catchGrassFront = TweenMax.to('.grassFront', 10, {
    y: "-102%",
    ease: Power1.easeInOut,
});

grassPin.add([catchGrassBack, catchGrassMid, catchGrassFront]);


//---紙飛機、網子進入---
let catchPlane = TweenMax.to('.catch_main', 5, {
    x: "-270%",
    ease: Power0.easeInOut,
});
let catchNet = TweenMax.to('.net', 5, {
    y: "-100%",
    ease: Power0.easeNone,
});

grassPin.add([catchPlane, catchNet]);


//---網子撈撈撈---
grassPin.add(TweenMax.to('.net', 3, {
    x: "80%",
    y: "-180%",
    rotation: 90,
    transformOrigin: "left bottom",
    ease: Power0.easeInOut,
}))


//---4隻其餘飛機飛走---
let catchLT = TweenMax.to('.LT_box', 4, {
    x: "-270%",
    ease: Power0.easeInOut,
});
let catchLB = TweenMax.to('.LB_box', 4, {
    x: "-300%",
    ease: Power0.easeInOut,
});
let catchRT = TweenMax.to('.RT_box', 5, {
    x: "-650%",
    ease: Power0.easeInOut,
});
let catchRB = TweenMax.to('.RB_box', 4, {
    x: "-480%",
    ease: Power0.easeInOut,
});

grassPin.add([catchLT, catchLB, catchRT, catchRB]);


//---撈信標題及介紹進入---
grassPin.add(TweenMax.to('.catchTitle', 4, {
    bezier: {
        curviness: 1.25,
        values: [{
            x: "130%",
            y: "110%"
        }],
    },
    rotation: -30,
    transformOrigin: 'bottom center',
    ease: Power1.easeOut,
}));
grassPin.add(TweenMax.to('.catchTitle', 2, {
    bezier: {
        curviness: 1.25,
        values: [{
            x: "140%",
            y: "115%"
        }],
    },
    rotation: 0,
    transformOrigin: 'bottom center',
    ease: Power1.easeOut,
}));


//---被撈的紙飛機打開---
grassPin.add(TweenMax.to('.catch_main', 2, {
    y: "-100%",
    rotation: 85,
    ease: Power0.easeNone,
}));
grassPin.add(TweenMax.to('.catch_main', 2, {
    opacity: 0,
    ease: Power0.easeNone,
}));
grassPin.add(TweenMax.to('.catch_fold2', 2, {
    opacity: 1,
    ease: Power0.easeNone,
}));
grassPin.add(TweenMax.to('.catch_fold2', 2, {
    opacity: 0,
    ease: Power0.easeNone,
}));
grassPin.add(TweenMax.to('.catch_fold1', 2, {
    opacity: 1,
    ease: Power0.easeNone,
}));

let catchFold = TweenMax.to('.catch_fold1', 2, {
    y: "9%",
    opacity: 0,
    ease: Power0.easeOut,
});
let catchPaper = TweenMax.to('.catch_letter', 2, {
    opacity: 1,
    ease: Power1.easeIn,
});
grassPin.add([catchFold, catchPaper]);

grassPin.add(TweenMax.to('.catch_letter', 5, {
    y: "32%",
    ease: Power0.easeNone,
}));

let sceneGrass = new ScrollMagic.Scene({
    triggerElement: ".home_catch",
    duration: '400%',
    triggerHook: 0
}).setPin('.home_catch').setTween(grassPin).addIndicators().addTo(controller);



//---冒煙---
let smokePara = new TimelineMax({
    repeat: -1,
});

smokePara.to('.smokeS', 3, {
    x: "500%",
    y: "-250%",
    opacity: 0,
    scale: 2.5,
    ease: Power1.easeIn,
}).to('.smokeM', 0.1, {
    opacity: 1,
    ease: Power0.easeNone,
}).to('.smokeM', 3, {
    x: "500%",
    y: "-250%",
    opacity: 0,
    scale: 2.5,
    ease: Power1.easeIn,
}).to('.smokeL', 0.1, {
    opacity: 1,
    ease: Power0.easeNone,
}).to('.smokeL', 3, {
    x: "500%",
    y: "-300%",
    opacity: 0,
    scale: 2.8,
    ease: Power1.easeIn,
});

let sceneSmoke = new ScrollMagic.Scene({
    triggerElement: '.home_custom',
    daration: '100%'
}).setTween(smokePara).addIndicators().addTo(controller);


//---輪子旋轉---
let wheel = TweenMax.to('.wheel', 1, {
    rotation: 450,
});

let scenewheel = new ScrollMagic.Scene({
    triggerElement: '.home_custom',
    // offset: 350,
    duration: '150%',
    ease: Power0.easeNone,
}).setTween(wheel).addIndicators().addTo(controller);


//---網子中信紙消失---
let netLetter = TweenMax.to('.catch_letter', 1, {
    opacity: 0,
});

let sceneNetLetter = new ScrollMagic.Scene({
    triggerElement: '.home_custom',
    offset: -300,
    duration: '80%',
    ease: Power0.easeNone,
}).setTween(netLetter).addIndicators().addTo(controller);


//---機械手臂旋轉---
let machineHand = TweenMax.to('.machine_hand', 1, {
    rotation: 55,
    transformOrigin: "left bottom",
});

let sceneMachine = new ScrollMagic.Scene({
    triggerElement: '.home_custom',
    duration: '100%',
    ease: Power0.easeNone,
}).setTween(machineHand).addIndicators().addTo(controller);


//---水管背景的信 出現並移動---
let tubeLetter = TweenMax.to('.print_letterBoxIn', 1, {
    opacity: 1,
    y: "159%",
    x: "16%",
});

let sceneTubeLetter = new ScrollMagic.Scene({
    triggerElement: '.home_custom',
    duration: '100%',
    offset: 250,
    ease: Power0.easeNone,
}).setTween(tubeLetter).addIndicators().addTo(controller);


//---信紙進入印表機---
let printLetterIn = TweenMax.to('.print_letterIn', 1, {
    y: "100%",
    ease: Power0.easeNone,
});

let scenePrintIn = new ScrollMagic.Scene({
    triggerElement: '.print',
    duration: '50%',
    offset: -100,
    ease: Power0.easeNone,
}).setTween(printLetterIn).addIndicators().addTo(controller);


//---信紙從印表機出來---
let printLetterOut = TweenMax.to('.print_letterOut', 1, {
    y: "100%",
    ease: Power0.easeNone,
});

let scenePrintOut = new ScrollMagic.Scene({
    triggerElement: '.print',
    duration: '70%',
    offset: 150,
    ease: Power0.easeNone,
}).setTween(printLetterOut).addIndicators().addTo(controller);


//---印出來的信紙消失---
let printLetterNone = TweenMax.to('.print_letterOut', 0.5, {
    display: "none",
    ease: Power0.easeNone,
});

let scenePrintNone = new ScrollMagic.Scene({
    triggerElement: '.print',
    duration: '53%',
    offset: 1050,
    ease: Power0.easeNone,
}).setTween(printLetterNone).addIndicators().addTo(controller);


//---輸送帶上的第一章信紙(重疊處)出現---
let beltLetterShow = TweenMax.to('.belt_letter', 0.5, {
    opacity: 1,
    ease: Power0.easeNone,
});

let sceneBeltShow = new ScrollMagic.Scene({
    triggerElement: '.print',
    duration: '10%',
    offset: 900,
    ease: Power0.easeNone,
}).setTween(beltLetterShow).addIndicators().addTo(controller);


//---印表機震動---
let printPara = new TimelineMax({
    repeat: -1,
});

printPara.to('.print', 1, {
    y: "2%",
    ease: RoughEase.ease.config({
        template: Power0.easeInOut,
        strength: 1,
        points: 5,
        taper: "none",
        randomize: false,
        clamp: false
    }),
}).to('.print', 1, {
    y: "0%",
    ease: RoughEase.ease.config({
        template: Power0.easeInOut,
        strength: 1,
        points: 5,
        taper: "none",
        randomize: false,
        clamp: false
    }),
});

let sceneQuake = new ScrollMagic.Scene({
    triggerElement: '.print',
    // offset: 100,
    daration: '100%'
}).setTween(printPara).addIndicators().addTo(controller);


//輸送帶section的動畫
let beltPin = new TimelineMax();
//---第一張信紙移至中間---
beltPin.add(TweenMax.to('.belt_letter', 2, {
    y: "101.5%"
}));


//---右邊照燈進入---
beltPin.add(TweenMax.to('.lightBox', 2, {
    y: "-245%",
    ease: Power0.easeInOut
}));


//---信紙消失---
beltPin.add(TweenMax.to('.belt_letter', 1, {
    opacity: 0
}));


//---第一次摺紙出現---
beltPin.add(TweenMax.to('.foldStamp1', 1, {
    opacity: 1
}));


//---第一次摺紙消失---
beltPin.add(TweenMax.to('.foldStamp1', 1, {
    opacity: 0
}));


//---第二次摺紙出現---
beltPin.add(TweenMax.to('.foldStamp2', 1, {
    opacity: 1
}));


//---第二次摺紙消失---
beltPin.add(TweenMax.to('.foldStamp2', 1, {
    opacity: 0
}));


//---紙飛機摺好了---
beltPin.add(TweenMax.to('.beltPlane', 1, {
    opacity: 1
}));


//---右邊照燈出去，左邊顏料筆進入---
let lightOut = TweenMax.to('.lightBox', 2, {
    y: "-500%",
    ease: Power0.easeInOut
});
let paintIn = TweenMax.to('.paintBox', 2, {
    y: "-320%",
    ease: Power0.easeInOut
});

beltPin.add([lightOut, paintIn]);


//---紙飛機上色---
beltPin.add(TweenMax.to('.beltRedPlane', 2, {
    opacity: 0.5,
    ease: Power1.easeInOut
}));
beltPin.add(TweenMax.to('.beltRedPlane', 2, {
    opacity: 0.25,
    ease: Power1.easeInOut
}));
beltPin.add(TweenMax.to('.beltRedPlane', 2, {
    opacity: 0.75,
    ease: Power1.easeInOut
}));
beltPin.add(TweenMax.to('.beltRedPlane', 2, {
    opacity: 0.5,
    ease: Power1.easeInOut
}));
beltPin.add(TweenMax.to('.beltRedPlane', 2, {
    opacity: 1,
    ease: Power1.easeInOut
}));


//---左邊顏料筆出去，被蓋在底下的原紙飛機消失---

let paintOut = TweenMax.to('.paintBox', 2, {
    y: "-710%",
    ease: Power0.easeInOut
});
let noPaintPlane = TweenMax.to('.beltPlane', 1, {
    opacity: 0,
    ease: Power0.easeNone
});

beltPin.add([paintOut, noPaintPlane]);


let sceneTool = new ScrollMagic.Scene({
    triggerElement: ".home_belt",
    duration: '400%',
    triggerHook: 0
}).setPin('.home_belt').setTween(beltPin).addIndicators().addTo(controller);


//---上色紙飛機向下移動縮小---
let beltPlaneOut = TweenMax.to('.beltRedPlane', 1, {
    y: "200%",
    scale: 0.7,
    ease: Power0.easeNone,
});

let sceneBeltPlane_Out = new ScrollMagic.Scene({
    triggerElement: '.home_store',
    duration: '80%',
    offset: -400,
    ease: Power0.easeNone,
}).setTween(beltPlaneOut).addIndicators().addTo(controller);



//---紙飛機商品進入---
let storePlaneIn = TweenMax.to('.fall_plane', 1, {
    y: "130%",
    ease: Power0.easeInOut,
});

let sceneStorePlane_In = new ScrollMagic.Scene({
    triggerElement: '.home_store',
    duration: '35%',
    offset: 138,
    ease: Power0.easeNone,
}).setTween(storePlaneIn).addIndicators().addTo(controller);


//商城的動畫
let storePin = new TimelineMax();
//---被蓋的紙飛機消失，上方紙飛機出現---
let fallPlane_Hide = TweenMax.to('.fall_plane', 1, {
    visibility: "hidden",
    ease: Power0.easeNone
});
let windowPlane_Show = TweenMax.to('.paintPlane', 1, {
    visibility: "visible",
    ease: Power0.easeNone
});
let price_Show = TweenMax.to('.price', 1, {
    opacity:1,
    y:"130%",
    ease: Bounce.easeOut
});

storePin.add([fallPlane_Hide, windowPlane_Show,price_Show]);


storePin.add(TweenMax.to('.glass', 1, {
    x: "-100%",
}));

let sceneStore = new ScrollMagic.Scene({
    triggerElement: ".home_store",
    duration: '200%',
    triggerHook: 0
}).setPin('.home_store').setTween(storePin).addIndicators().addTo(controller);