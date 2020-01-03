  let threeWorld = document.getElementById('threeWorld');
  let planeLetter = document.getElementById('planeLetter');
  let openMotion = document.getElementById('openMotion');
  let catchLetterShow = document.getElementById('catchLetterShow');
  let net = document.getElementById('mouseNet');
  let missMsg = document.getElementById('missMsg');
  let planeContainer = document.getElementById('planeContainer');
  let nextStepArrow = document.getElementById('nextStepArrow');
  let catchLetterMain = document.getElementById('catchLetterMain');
  document.querySelector('header').style.display = "none"; //將header隱藏
  planeLetter.style = "";
  //mouseMove
  threeWorld.addEventListener('mousemove', function (e) {
    net.style.left = e.pageX + 'px';
    net.style.top = e.pageY + 'px';
  })

  threeWorld.addEventListener('mousedown', mouseDownFn);
  
  function mouseDownFn() {
    net.style.transform = 'rotate(-45deg)';
    let successNum = getRandom(10);
    successNum = 10;//.......測試用
    missMsg.classList = "";
    if(successNum ==  10 ){
      missMsg.innerText = "Success!";
    }else if( successNum >= 7 ){
      missMsg.innerText = "Miss!";
    }else if( successNum >= 4 ){
      missMsg.innerText = "Try Again!";
    }else{
      missMsg.innerText = "Oh No~~";
    }
    if (successNum == 10) {
      document.getElementById('netImg').src = "./img/catch-letter/catch-the-plane.gif";
      net.style.transform = 'rotate(0deg)';

      /*
       *  要把滑鼠事件鎖起來，直到信開好為止
       */
      openLetter();//開信
      document.getElementById('navHead').classList.add('-on');//將navBar推上去
      stampShot();//蓋章
      threeWorld.removeEventListener('mousedown', mouseDownFn);//解除撈信滑鼠事件
      threeWorld.removeEventListener('mouseup', mouseUpFn );//解除撈信滑鼠事件
      // changeMouseToStamp();//把滑鼠變成戳章
    } else {
      threeWorld.addEventListener('mouseup', mouseUpFn );
      function mouseUpFn(){
        net.style.transform = 'rotate(45deg)';
        missMsg.classList.add("fadeAway");
      }
    }
  }

  function openLetter() {
    planeLetter.classList.add('active');
    letterFlim();
    threeWorld.style.cursor = 'auto';
  }

  let time = 5

  function letterFlim() {
    setTimeout(() => {
      time--;
      if (time < 0) {
        setTimeout(() => {
          openMotion.style.display = "none";
          net.style.display = "none";
          catchLetterShow.style.display = "block";
          console.log(catchLetterShow);
        }, 400)
      } else {
        openMotion.style.backgroundImage = `url(./img/catch-letter/letter-fold-${time+1}.png)`
        letterFlim()
      }
      console.log(time)
    }, 400)
  }

  function getRandom(num) {
    return Math.floor(Math.random() * num) + 1;
  };
  //蓋印章
  function stampShot(){
    planeLetter.addEventListener('click',(e)=>{
      planeLetter.style.animationName = "";
      // console.log("e.offsetX: ",e.offsetX);
      // console.log("e.offsetY: ",e.offsetY);
      console.log(e.pageX, e.pageY);
      let stampshot = document.getElementById('stampshot');
      let stampEffectDiv = document.createElement('div');
      stampshot.style.display = "block";
      stampEffectDiv.setAttribute('id','stampEffect');
      stampEffectDiv.style.top = `${e.offsetY}px`;
      stampEffectDiv.style.left = `${e.offsetX}px`;
      stampEffectDiv.style.backgroundImage = `url(./img/catch-letter/user-stamp/user-stamp_${Math.floor(Math.random() * 9) + 1}.png)`;
      stampshot.appendChild(stampEffectDiv);
      console.log(e.pageX, e.pageY);
      setTimeout(()=>{
        planeLetter.style.animationName = "rotateLetter";
      },500)
      //下一步的箭頭
      if(stampshot.style.display === "block"){
        nextStepArrow.style.display="block";
      }
      nextStepArrow.addEventListener('click',()=>{
        threeWorld.style.animationName = "elementDisappear";
        threeWorld.style.animationDelay = ".5s";
        threeWorld.style.animationDuration = ".8s";
        threeWorld.style.animationFillMode = "forwards";
        setTimeout(()=>{
          threeWorld.style.display = "none";
          document.getElementById('navHead').classList = "nav-navBgWrap";//選單向下出來
          document.getElementById('catchLetterMain').style.display = "block";
          document.getElementById('catchLetterMain').style.animationName = "showCatchLetter";
          document.querySelector('header').style.display = "block"; //將header顯示出來
          document.querySelector('header').style.animationName = "showHeader";

          //監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，前往下一步->摺紙
          let submitStamp = document.querySelectorAll('.type');
          for(let i = 0 ; i<submitStamp.length ; i++){
            submitStamp[i].addEventListener('click',(e)=>{
              // e.preventDefault();//解掉冒泡事件
              e.stopPropagation();
              e.stopImmediatePropagation();
              confirmSubmit();
            })
          }
        },500)
      })
    })
  }

  
function confirmSubmit(){
  if(confirm("Press a button!")){
    console.log('NextStep!');
    document.getElementById('navHead').style.display = "none";//選單消失
    document.querySelector('header').style.display = "none"; //將header消失

    document.getElementById('catchLetterMain').style.animationName = "elementDisappear";
    document.getElementById('catchLetterMain').style.animationDelay = ".5s";
    document.getElementById('catchLetterMain').style.animationDuration = ".8s";
    document.getElementById('catchLetterMain').style.animationFillMode = "forwards";
  //摺紙開始
  setTimeout(()=>{
    document.querySelector('.catchletter-body').style.background = "#aaa";//改背景色
    document.querySelector('.planeBox').style.display = "flex";
    document.getElementById('catchLetterMain').style.display = "none";
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
  if(document.getElementById('catchLetterMain').style.display === "block"){
    console.log('begin');
  }
  const pointerAll = document.querySelector('.pointerAll');
  let img = document.getElementById('img');
  let imgLeftTriangle = document.getElementById('imgLeftTriangle');
  let imgRightTriangle = document.getElementById('imgRightTriangle');
  let imgLeftTriangle2 = document.getElementById('imgLeftTriangle2');
  let imgRightTriangle2 = document.getElementById('imgRightTriangle2');
  let imgFinalStep = document.getElementById('imgFinalStep');
  let planeWing = document.getElementById('planeWing');

  // console.log(pointerAll.id);
  
  pointerAll.addEventListener('dragstart',(e)=>{//touchmove
    e.preventDefault();
    let pointerId = e.target.id
    if(pointerId === 'pointer'){
      //折右邊 第一次
      let pointer = document.getElementById('pointer');
      pointer.style.visibility = "hidden";
      imgRightTriangle.style.clipPath = "polygon(-300% 300%, 0 0, 100% 100%)";
      imgRightTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
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

      imgLeftTriangle.style.clipPath = "polygon(0 100%, 100% 300%, 100% 0)";
      imgLeftTriangle.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.25)";
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
            planeBody.style.display = "block";
            
          }, 500);
        }, 500);
      }, 500);
      
    }
  })
}
  