function confirmSubmit(){
  if(confirm("Press a button!")){
    console.log('NextStep!');
    // console.log(location.href.split('/').reverse()[0].split('.')[0]);
    let pageUrlTitle = location.href.split('/').reverse()[0].split('.')[0];

    document.getElementById('navHead').style.display = "none";//選單消失
    document.querySelector('header').style.display = "none"; //將header消失

    if( pageUrlTitle == "write-letter"){
      document.getElementById('writeLetterMain').style.animationName = "elementDisappear";
      document.getElementById('writeLetterMain').style.animationDelay = ".5s";
      document.getElementById('writeLetterMain').style.animationDuration = ".8s";
      document.getElementById('writeLetterMain').style.animationFillMode = "forwards";
    }else if( pageUrlTitle == "catch-letter" ){
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
  document.querySelector('footer').style.display= "none";
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
            shootPlane();
          }, 500);
        }, 500);
      }, 500);
      
    }
  })
}

function shootPlane(){
  planeWing.addEventListener('click',()=>{
    console.log('click');
    
  })
}
