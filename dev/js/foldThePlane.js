let vmUserStamp = new Vue({
  el: '#vmUserStamp',
  data: {
    userStamp:[],//存 使用者"擁有"的郵戳的編號對應的URL(matPosUrl)
    stampValue:[],//input radio 的value值
    letterStamp: 0,//存 使用者"選到"的郵戳的編號的值(matPosNo)
  },
  methods: {
    clickStamp(e) {
      this.letterStamp = e.target.value;
    },
  },
  mounted() {
    
  },
});


let vmImgWrap = new Vue({
  el: '#imgWrap',
  data: {
    letUrl: '',
    letPattern: '',
    gobackFlag: false,
    chooseStampUrl:'',
  },
  watch:{
    gobackFlag: {
      handler(newVal , oldVal){
        console.log(`${oldVal} -> ${newVal}`);
        if(newVal == true) goBackBtn();
      },
      // immediate: true,
      deep: true,
    },
  }
});
function confirmSubmit(){
  
  if(confirm("確定送出嗎？")){
    console.log('NextStep!');
    // console.log(location.href.split('/').reverse()[0].split('.')[0]);
    let pageUrlTitle = location.href.split('/').reverse()[0].split('.')[0];

    document.getElementById('navHead').style.display = "none";//選單消失
    document.querySelector('header').style.display = "none"; //將header消失

    if( pageUrlTitle == "write-letter"){
      //將資料送去php程式
      submitToLetterTable();//writerLetter.js
      document.getElementById('writeLetterMain').style.animationName = "elementDisappear";
      document.getElementById('writeLetterMain').style.animationDelay = ".5s";
      document.getElementById('writeLetterMain').style.animationDuration = ".8s";
      document.getElementById('writeLetterMain').style.animationFillMode = "forwards";
    }else if( pageUrlTitle == "catch-letter" ){
      //將資料送去php程式
      submitLeaveMsg();
      document.getElementById('reduceLetCount').remove();
      document.getElementById('catchLetterMain').style.animationName = "elementDisappear";
      document.getElementById('catchLetterMain').style.animationDelay = ".5s";
      document.getElementById('catchLetterMain').style.animationDuration = ".8s";
      document.getElementById('catchLetterMain').style.animationFillMode = "forwards";
    }
  //摺紙開始
  setTimeout(()=>{
    // document.querySelector('.catchletter-body').style.background = "#aaa";//改背景色
    document.querySelector('.planeBox').style.display = "flex";
    if( pageUrlTitle == "write-letter"){
      document.getElementById('writeLetterMain').style.display = "none";
    }else if(pageUrlTitle == "catch-letter"){
      document.getElementById('catchLetterMain').style.display = "none";
    }
    document.getElementById('imgWrap').style.display = "block";
    document.getElementById('imgWrap').style.animationName = "showImgWrap";
    foldThePlane();
  },500);
  } else {
    console.log('rollback!');
  }
}

function foldThePlane(){
  //進入摺紙階段
  // if(document.getElementById('catchLetterMain').style.display === "block"){
  //   console.log('begin');
  // }
  const pointerAll = document.querySelector('.pointerAll');
  let img = document.getElementById('img');
  let imgLeftTriangle = document.getElementById('imgLeftTriangle');
  let imgRightTriangle = document.getElementById('imgRightTriangle');
  let imgLeftTriangle2 = document.getElementById('imgLeftTriangle2');
  let imgRightTriangle2 = document.getElementById('imgRightTriangle2');
  let imgFinalStep = document.getElementById('imgFinalStep');
  let planeWing = document.getElementById('planeWing');

  // console.log(pointerAll.id);
  document.querySelector('footer').style.display= "none";//footer消失
  document.querySelector('.nav-hamPosition').style.display = "none";//選單消失
  //桌機觸發條件
  pointerAll.addEventListener('dragstart',(e)=>{//touchmove
    // pointerSetting();
    e.preventDefault();
    let pointerId = e.target.id
    if(pointerId === 'pointer'){
      //折右邊 第一次
      let pointer = document.getElementById('pointer');
      pointer.style.visibility = "hidden";
      imgRightTriangle.style.webkitClipPath = "polygon(-300% 300%, 0 0, 100% 100%)";
      imgRightTriangle.style.clipPath = "polygon(-300% 300%, 0 0, 100% 100%)";
      imgRightTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 0% 0%)";
      img.style.clipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 0% 0%)";
      img.style.zIndex='1';
      imgLeftTriangle.style.display = 'none';
      //把id改成pointer2
      pointer.setAttribute('id','pointer2');
      document.getElementById('pointer2').style.visibility = "";
      console.log('nowID = ',pointerAll.id);

    }else if(pointerId === 'pointer2'){
      //折左邊 第一次
      let pointer2 = document.getElementById('pointer2');
      pointer2.style.visibility = "hidden";
      imgLeftTriangle.style.display = 'block';

      imgLeftTriangle.style.webkitClipPath = "polygon(0 100%, 100% 300%, 100% 0)";
      imgLeftTriangle.style.clipPath = "polygon(0 100%, 100% 300%, 100% 0)";
      imgLeftTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 50% 34.5%)";
      img.style.clipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 50% 34.5%)";
      img.style.zIndex='1';
      
      //把id改成pointer3
      pointer2.setAttribute('id','pointer3');
      document.getElementById('pointer3').style.visibility = "";
      console.log('nowID = ',pointerAll.id);

    }else if(pointerId === 'pointer3'){
      //折右邊 第二次
      let pointer3 = document.getElementById('pointer3');
      imgRightTriangle2.style.display = 'block';
      imgRightTriangle.style.display = 'none';
      pointer3.style.visibility = "hidden";
      imgRightTriangle2.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0px 100%, 0% 85%, 0% 34.5%)";
      img.style.clipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0px 100%, 0% 85%, 0% 34.5%)";
      img.style.zIndex='1';
      //把id改成pointer4
      pointer3.setAttribute('id','pointer4');
      document.getElementById('pointer4').style.visibility = "";
      console.log('nowID = ',pointerAll.id);
    }else if(pointerId === 'pointer4'){
      //折左邊 第二次
      let pointer4 = document.getElementById('pointer4');
      imgLeftTriangle2.style.display = 'block';
      imgLeftTriangle.style.display = 'none';
      pointer4.style.visibility = "hidden";
      imgLeftTriangle2.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 50% 45%)";
      img.style.clipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 50% 45%)";
      img.style.zIndex='1';

      //把id改成pointer5
      pointer4.setAttribute('id','pointer5');
      document.getElementById('pointer5').style.visibility = "";
      console.log('nowID = ',pointerAll.id);
    }else if(pointerId === 'pointer5'){
      //折右邊 最後一次
      let pointer5 = document.getElementById('pointer5');
      imgFinalStep.style.display = 'block';
      imgRightTriangle2.style.display = 'none';
      pointer5.style.visibility = "hidden";
      imgLeftTriangle2.style.display = "none"
      // imgFinalStep.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      // img.style.clipPath = "polygon(50% 0%, 0 85%, 0 100%, 0 100%, 50% 100%);";
      img.style.display = 'none';
      // img.style.zIndex='1';

      let foldAnimate = false;
      setTimeout(() => {
        imgFinalStep.style.webkitClipPath = "polygon(50% 0%, 100% 85%, 100% 100%, 100% 100%, 50% 100%)";
        imgFinalStep.style.clipPath = "polygon(50% 0%, 100% 85%, 100% 100%, 100% 100%, 50% 100%)";
        setTimeout(() => {
          planeWing.style.display = "block";
          // 執行自動動畫
          // imgFinalStep.style.background = "#aaa";
          planeWing.style.animationName = "foldAnimationStep2";
          let imgWrap = document.getElementById('imgWrap');
          imgWrap.style.opacity = "1";
          imgWrap.style.animationName = "rotatePlane";
          setTimeout(() => {
            setPlaneShadow();
            imgWrap.style.filter = 'unset';
            imgWrap.style.cursor= 'pointer'; //讓飛機上的滑鼠變成pointer的狀態
            planeBody.style.display = "block";
            // planeBody.style.filter = "contrast(.5)";
            shootPlane();
          }, 500);
        }, 500);
      }, 500);
      
    }
  })
  //手機觸發條件
  pointerAll.addEventListener('touchend',(e)=>{//touchmove
    // pointerSetting();
    e.preventDefault();
    let pointerId = e.target.id
    if(pointerId === 'pointer'){
      //折右邊 第一次
      let pointer = document.getElementById('pointer');
      pointer.style.visibility = "hidden";
      imgRightTriangle.style.webkitClipPath = "polygon(-300% 300%, 0 0, 100% 100%)";
      imgRightTriangle.style.clipPath = "polygon(-300% 300%, 0 0, 100% 100%)";
      imgRightTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 0% 0%)";
      img.style.clipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 0% 0%)";
      img.style.zIndex='1';
      imgLeftTriangle.style.display = 'none';
      //把id改成pointer2
      pointer.setAttribute('id','pointer2');
      document.getElementById('pointer2').style.visibility = "";
      console.log('nowID = ',pointerAll.id);

    }else if(pointerId === 'pointer2'){
      //折左邊 第一次
      let pointer2 = document.getElementById('pointer2');
      pointer2.style.visibility = "hidden";
      imgLeftTriangle.style.display = 'block';

      imgLeftTriangle.style.webkitClipPath = "polygon(0 100%, 100% 300%, 100% 0)";
      imgLeftTriangle.style.clipPath = "polygon(0 100%, 100% 300%, 100% 0)";
      imgLeftTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 50% 34.5%)";
      img.style.clipPath = "polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0 100%, 0 34.5%, 50% 34.5%)";
      img.style.zIndex='1';
      
      //把id改成pointer3
      pointer2.setAttribute('id','pointer3');
      document.getElementById('pointer3').style.visibility = "";
      console.log('nowID = ',pointerAll.id);

    }else if(pointerId === 'pointer3'){
      //折右邊 第二次
      let pointer3 = document.getElementById('pointer3');
      imgRightTriangle2.style.display = 'block';
      imgRightTriangle.style.display = 'none';
      pointer3.style.visibility = "hidden";
      imgRightTriangle2.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0px 100%, 0% 85%, 0% 34.5%)";
      img.style.clipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0px 100%, 0% 85%, 0% 34.5%)";
      img.style.zIndex='1';
      //把id改成pointer4
      pointer3.setAttribute('id','pointer4');
      document.getElementById('pointer4').style.visibility = "";
      console.log('nowID = ',pointerAll.id);
    }else if(pointerId === 'pointer4'){
      //折左邊 第二次
      let pointer4 = document.getElementById('pointer4');
      imgLeftTriangle2.style.display = 'block';
      imgLeftTriangle.style.display = 'none';
      pointer4.style.visibility = "hidden";
      imgLeftTriangle2.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      img.style.webkitClipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 50% 45%)";
      img.style.clipPath = "polygon(50% 0%, 50% 45%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 50% 45%)";
      img.style.zIndex='1';

      //把id改成pointer5
      pointer4.setAttribute('id','pointer5');
      document.getElementById('pointer5').style.visibility = "";
      console.log('nowID = ',pointerAll.id);
    }else if(pointerId === 'pointer5'){
      //折右邊 最後一次
      let pointer5 = document.getElementById('pointer5');
      imgFinalStep.style.display = 'block';
      imgRightTriangle2.style.display = 'none';
      pointer5.style.visibility = "hidden";
      imgLeftTriangle2.style.display = "none"
      // imgFinalStep.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
      // img.style.clipPath = "polygon(50% 0%, 0 85%, 0 100%, 0 100%, 50% 100%);";
      img.style.display = 'none';
      // img.style.zIndex='1';

      let foldAnimate = false;
      setTimeout(() => {
        imgFinalStep.style.webkitClipPath = "polygon(50% 0%, 100% 85%, 100% 100%, 100% 100%, 50% 100%)";
        imgFinalStep.style.clipPath = "polygon(50% 0%, 100% 85%, 100% 100%, 100% 100%, 50% 100%)";
        setTimeout(() => {
          planeWing.style.display = "block";
          
          // 執行自動動畫
          // imgFinalStep.style.background = "#aaa";
          planeWing.style.animationName = "foldAnimationStep2";
          let imgWrap = document.getElementById('imgWrap');
          imgWrap.style.opacity = "1";
          imgWrap.style.animationName = "rotatePlane";
          setTimeout(() => {
            deviceSet();
            console.log(window.orientation);
            
            setPlaneShadow();
            imgWrap.style.filter = 'unset';
            imgWrap.style.cursor= 'pointer'; //讓飛機上的滑鼠變成pointer的狀態
            planeBody.style.display = "block";
            // planeBody.style.filter = "contrast(.5)";
            shootPlane();
          }, 500);
        }, 500);
      }, 500);
      
    }
  })
}

function deviceSet(){
  //判斷手機方向：
  // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
  //   if (window.orientation === 180 || window.orientation === 0) {
  //       alert('目前您的螢幕為縱向！');
  //       window.orientation = 90;
  //   }
  //   if (window.orientation === 90 || window.orientation === -90 ){
  //       alert('目前您的螢幕為橫向！');
  //   }
  // }, false);

  //判斷瀏覽器
}

function setPlaneShadow(){
  let planeShadow = document.createElement("div");
  imgWrap.appendChild(planeShadow);
  planeShadow.setAttribute('id','planeShadow');
}

function shootPlane(){
  // 飛機hover
  planeWing.addEventListener('mouseover',()=>{

    // imgWrap.style.animation = "hoverPlane";
    // imgWrap.style.animationDuration = "1s";
    // imgWrap.style.animationFillMode = "none";
    // imgWrap.style.animationIterationCount = "infinite";

    // imgWrap.style.animation = "shell ease 600ms";
    // imgWrap.style.animationDirection = "alternate";
    // imgWrap.style.animationFillMode = "none";
    // imgWrap.style.animationIterationCount = "infinite";
    // imgWrap.style.transform = "rotate(-85deg)";
  })
  //射出飛機
  planeWing.addEventListener('click',()=>{
    // console.log('click');

    imgWrap.style.transform = "rotate(-85deg)";
    //飛機飛起來動畫
    let windSpeedWrap = document.createElement("div");
    imgWrap.appendChild(windSpeedWrap);
    windSpeedWrap.setAttribute('id','windSpeedWrap');
    windSpeedWrap.innerHTML = `<span></span><span></span><span></span><span></span>`;
    //判斷是否為手機版
    if(screen.width<=414){
      imgWrap.style.width = '55vw';
      imgWrap.style.height = '80vw';
    }
    imgWrap.style.animation = "shakePlane ease 600ms";
    imgWrap.style.animationDirection = "alternate";
    imgWrap.style.animationFillMode = "forwards";
    // imgWrap.style.animationFillMode = "forwards";
    imgWrap.style.animationIterationCount = "infinite";
    // imgWrap.style.width = "50vw";
    // imgWrap.style.height = "45vw";
    setTimeout(()=>{
      imgWrap.style.animation = "shootPlane ease 600ms";
      imgWrap.style.animationFillMode = "forwards";
      setTimeout(()=>{
        imgWrap.style.opacity = "0";
        imgWrap.style.animation = "shootPlaneSecond ease 600ms";
        imgWrap.style.animationFillMode = "forwards";
        addScene();
        setTimeout(()=>{
          vmImgWrap.gobackFlag = true;
          console.log(vmImgWrap.gobackFlag);

          //判斷是否為手機版
          if(screen.width<=414){
            document.getElementById('imgWrap').style = "display: block; opacity: 1; transform: rotate(-85deg); animation: arocket .2s linear infinite; filter: unset;width:55vw;height:80vw";
          }else{
            document.getElementById('imgWrap').style = "display: block; opacity: 1; transform: rotate(-85deg); animation: arocket .2s linear infinite; filter: unset;";
            // document.getElementById('cloudDiv').style.animation ="ascene 5s linear infinite;";//...??
          }
          
          
        },800)
      },800)
    },1500)
  })
}

function addScene(){
  let div = document.createElement("div");
  let skyWorld = document.querySelector('.planeBox');
  div.setAttribute('id','iceLand');
  skyWorld.appendChild(div);

  let cloudDiv = document.createElement("div");
  cloudDiv.setAttribute('id','cloudDiv');
  skyWorld.appendChild(cloudDiv);
  document.getElementById('cloudDiv').innerHTML = `
  <span class="cloud cloud1"><i class="fa fa-cloud" aria-hidden="true"></i></span>
  <span class="cloud cloud2"><i class="fa fa-cloud" aria-hidden="true"></i></span>
  <span class="cloud cloud3"><i class="fa fa-cloud" aria-hidden="true"></i></span>
  `;
  // document.getElementById('cloudDiv').style.animation = "showScene 500ms ease;";//...??
}

function pointerSetting(){
 // The item (or items) to press and hold on
    var item = document.querySelector("#pointer");
 
    var timerID;
    var counter = 0;
 
    var pressHoldEvent = new CustomEvent("pressHold");
 
    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    var pressHoldDuration = 50;
 
    // Listening for the mouse and touch events    
    item.addEventListener("mousedown", pressingDown, false);
    item.addEventListener("mouseup", notPressingDown, false);
    item.addEventListener("mouseleave", notPressingDown, false);
 
    item.addEventListener("touchstart", pressingDown, false);
    item.addEventListener("touchend", notPressingDown, false);
 
    // Listening for our custom pressHold event
    item.addEventListener("pressHold", doSomething, false);
 
    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
 
      e.preventDefault();
 
      console.log("Pressing!");
    }
 
    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;
 
      item.style.setProperty("--scale-value", 1);
      var scale = 1 + counter / 50;
      item.style.transform = `translateY(-50%) scale3d(${scale},${scale}, 1)`;
      console.log("Not pressing!");
    }
 
    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");
 
      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
 
        item.style.setProperty("--scale-value", 1 + counter / 50);
 
      } else {
        console.log("Press threshold reached!");
        item.dispatchEvent(pressHoldEvent);
      }
    }
 
    function doSomething(e) {
  console.log("pressHold event fired!");
      var scale = 1 + counter / 50;
      item.style.transform = `translateY(-50%) scale3d(${scale},${scale}, 1)`;
    }
 
}

//返回鈕
function goBackBtn(){
  let goBackBtn = document.getElementById('goBackBtn');
  setTimeout(()=>{
    goBackBtn.style.display = "flex";
    goBackBtn.classList = "goBackBtn_2";
  },3000)
  let catchAgain = document.getElementById('catchAgain');
  catchAgain.addEventListener('click', clearLetter ,false)
}
function goBackBtn_News(){
  let goBackBtn = document.getElementById('goBackBtn');
  setTimeout(()=>{
    goBackBtn.style.display = "flex";
  },3000)
  let catchAgain = document.getElementById('catchAgain');
  catchAgain.addEventListener('click', clearLetter ,false)
}
function clearLetter(){
  location.reload();
}