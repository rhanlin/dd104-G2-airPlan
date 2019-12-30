  let threeWorld = document.getElementById('threeWorld');
  let planeLetter = document.getElementById('planeLetter');
  let openMotion = document.getElementById('openMotion');
  let catchLetterShow = document.getElementById('catchLetterShow');
  let net = document.getElementById('mouseNet');
  let missMsg = document.getElementById('missMsg');
  let planeContainer = document.getElementById('planeContainer');
  let nextStepArrow = document.getElementById('nextStepArrow');
  let catchLetter = document.getElementById('catchLetter');

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
    // successNum = 10;//.......test
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
        threeWorld.style.animation = "none";
        threeWorld.style.animationName = "elementDisappear";
        threeWorld.style.animationDelay = ".5s";
        threeWorld.style.animationDuration = ".8s";
        threeWorld.style.animationFillMode = "forwards";
        setTimeout(()=>{
          // threeWorld.style.display = "none";
          document.getElementById('catchLetter').style.display = "block";
          document.getElementById('catchLetter').style.animationName = "showCatchLetter";

          //監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，前往下一步->摺紙
          let submitStamp = document.querySelectorAll('.type');
          for(let i = 0 ; i<submitStamp.length ; i++){
            submitStamp[i].addEventListener('click',()=>{
              console.log('NextStep!');
              document.getElementById('catchLetter').style.display = "none";
              document.getElementById('catchLetter').style.animationName = "elementDisappear";
              document.getElementById('catchLetter').style.animationDelay = ".5s";
              document.getElementById('catchLetter').style.animationDuration = ".8s";
              document.getElementById('catchLetter').style.animationFillMode = "forwards";
              //摺紙開始
              setTimeout(()=>{
                document.getElementById('imgWrap').style.display = "block";
                document.getElementById('imgWrap').style.animationName = "showImgWrap";
              },500);
            })
          }
        },500)
      })
    })
  }

  

  