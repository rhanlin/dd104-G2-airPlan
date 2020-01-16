let vmCatchLetter = new Vue({
  el: "#catchLetterShow",
  data: {
    letteTittle: "",
    letterContant_1: "",
    letterContant_2: "",
    letterUploadImg: "",
    publishedAt:"",
    author:"",
  },
  mounted() {
    // fetch('./phps/fetchAllUserMat.php',{
    //   // method:'POST',
    //   // body: new URLSearchParams(`memNo=10`) //10要改成${變數} 此變數從session撈出目前登入的用戶number
    // })
    //   .then(res=>res.json()).then(json=>{
        
    //     console.log(json);
    //   })
  },
});
  
  let threeWorld = document.getElementById('threeWorld');
  let chooseBtn = document.getElementById('chooseBtn').children;
  let planeLetter = document.getElementById('planeLetter');
  let openMotion = document.getElementById('openMotion');
  let catchLetterShow = document.getElementById('catchLetterShow');
  let net = document.getElementById('mouseNet');
  let missMsg = document.getElementById('missMsg');
  let planeContainer = document.getElementById('planeContainer');
  let nextStepArrow = document.getElementById('nextStepArrow');
  let catchLetterMain = document.getElementById('catchLetterMain');
  document.querySelector('header').style.display = "none"; //將header隱藏
  document.querySelector('footer').style.display= "none";//將footer隱藏
  net.style.display="none";
  for(let i=0 ; i<chooseBtn.length ; i++){
    chooseBtn[i].addEventListener('click',(e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      net.style.display="block";
      threeWorld.style.cursor = "none"; //滑鼠消失
      chooseBtn[0].parentElement.style.display = "none";//關閉選擇按鈕

      if(e.target.innerText == "撈個新聞看看"){
        console.log(`撈到新聞`);
        catchNews();//撈新聞Fn
        threeWorld.addEventListener('mousedown', mouseDownFn);//監聽撈信事件
      }else{
        console.log(`撈到一封信`);
        catchALetter(); //撈一封信Fn
        threeWorld.addEventListener('mousedown', mouseDownFn);//監聽撈信事件
      }
    })
  }
  
  planeLetter.style = "";
  //mouseMove
  threeWorld.addEventListener('mousemove', function (e) {
    net.style.left = e.pageX + 'px';
    net.style.top = e.pageY + 'px';
  })
  
  //將留言送到後端
  function submitLeaveMsg(){
    // console.log(`letNo=${vmCatchLet.letNo}`);
    //memNo, letNo, msgContent
    let leaveMsg = document.getElementById('leaveMsg').value;
    if(leaveMsg != ""){
      fetch('./phps/userLeaveMsg.php',{
        method: 'POST',
        body: new URLSearchParams(`memNo=${vmCatchLet.userNo}&letNo=${vmCatchLet.letNo}&msgContent=${leaveMsg}`)
      })
    }

    // .then(res=>res.text()).then(json=>{
    //   console.log(json);
    // })
  }

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
    return new Promise((resolve, reject) => {
      
      planeLetter.classList.add('active');
      //判斷是撈新聞還是撈一封信，
      //如果是撈到 新聞 則出現返回撈信的按鈕 
      //如果是撈到 一封信 則可以蓋郵戳
      if(vmImgWrap.letUrl != ""){
        letterFlim()//開信
        .then(stampShot())//蓋章
      }else{
        letterFlim()//開信
        .then(goBackBtn())//返回按鈕
      }
      // letterFlim();
      threeWorld.style.cursor = 'auto';
    })
  }

  let time = 5
  function letterFlim() {
    return new Promise((resolve, reject)=>{
      let imgWrap_catch = document.getElementById('imgWrap_catch');
      let imgfinalStep_catch = document.getElementById('imgfinalStep_catch');
      let planeBody_catch = document.getElementById('planeBody_catch');
      let planeWing_catch = document.getElementById('planeWing_catch');
      let imgRightTriangle2_catch = document.getElementById('imgRightTriangle2_catch');
      let imgLeftTriangle2_catch = document.getElementById('imgLeftTriangle2_catch');
      let imgRightTriangle_catch = document.getElementById('imgRightTriangle_catch');
      let imgLeftTriangle_catch = document.getElementById('imgLeftTriangle_catch');
      setTimeout(()=>{
        // 執行自動動畫
        net.style.display="none";
        imgWrap_catch.style.animationName = "rotateCatchPlane";
        planeWing_catch.style.animationName = "openCatchPlane1";
        setTimeout(()=>{
          imgfinalStep_catch.style.webkitClipPath = "polygon(50% 0%, 0 85%, 0 100%, 0 100%, 50% 100%);";
          imgfinalStep_catch.style.clipPath = "polygon(50% 0%, 0 85%, 0 100%, 0 100%, 50% 100%);";
          setTimeout(()=>{
            planeWing_catch.style = "-webkit-clip-path:polygon(9% 0%, 97% 81%, 98% 95.2%, 0% 95.2%, 8% 1%);clip-path:polygon(9% 0%, 97% 81%, 98% 95.2%, 0% 95.2%, 8% 1%)";
            planeWing_catch.style.animationName = "openPlanePaper_1";
            planeBody_catch.style.display="none";
            setTimeout(()=>{
              imgRightTriangle2_catch.style.display = "block";
              imgLeftTriangle2_catch.style = "display:block;z-index:99;box-shadow:inset 0 0 7px rgba(0,0,0,.3);-webkit-clip-path: polygon(100% 0%, 100% 55%, 0% 100%);clip-path: polygon(100% 0%, 100% 55%, 0% 100%)";
              setTimeout(()=>{
                // imgLeftTriangle2_catch.style.animationName = "openPlanePaper_2_left";
                // imgRightTriangle2_catch.style.animationName = "openPlanePaper_2_right";
                planeWing_catch.style.display="none";
                imgLeftTriangle2_catch.style.display="none";
                imgRightTriangle2_catch.style.display="none";
                imgfinalStep_catch.style= "-webkit-clip-path:polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0px 100%, 0px 34.5%, 50% 34.5%);clip-path:polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0px 100%, 0px 34.5%, 50% 34.5%)";
                imgRightTriangle_catch.style.display="block";
                imgLeftTriangle_catch.style.display="block";
                catchLetterShow.style= "position: absolute;top: 50%; left:50%; transform: translate(-50%,-50%);-webkit-clip-path:polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0px 100%, 0px 34.5%, 50% 34.5%);clip-path:polygon(50% 0%, 50% 34.5%, 100% 34.5%, 100% 100%, 0px 100%, 0px 34.5%, 50% 34.5%)";
                catchLetterShow.style.display= "block";
                setTimeout(()=>{
                  imgfinalStep_catch.style= "-webkit-clip-path:polygon(50% 0%, 100% 0, 100% 40%, 100% 100%, 0 100%, 0 40%, 0 0);clip-path:polygon(50% 0%, 100% 0, 100% 40%, 100% 100%, 0 100%, 0 40%, 0 0)";
                  catchLetterShow.style="position: absolute; top: 50%; left:50%; transform: translate(-50%,-50%);-webkit-clip-path:polygon(50% 0%, 100% 0, 100% 40%, 100% 100%, 0 100%, 0 40%, 0 0);clip-path:polygon(50% 0%, 100% 0, 100% 40%, 100% 100%, 0 100%, 0 40%, 0 0)";
                  // imgRightTriangle_catch.style= "-webkit-clip-path:polygon(100% 0, 0 0, 100% 100%);clip-path:polygon(100% 0, 0 0, 100% 100%)";
                  // imgLeftTriangle_catch.style= "-webkit-clip-path:polygon(0 0, 0% 100%, 100% 0);clip-path:polygon(0 0, 0% 100%, 100% 0)";
                  imgRightTriangle_catch.style.display="none";
                  imgLeftTriangle_catch.style.display="none";
                  setTimeout(()=>{
                    imgfinalStep_catch.style.display="none";
                  },500)
                },500)
              },300)
            },1000)
          },500)
        },500)
      },500)
    })
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
      let userStampLength = vmCatchLet.userStamp.length;
      let randStampInx = Math.floor(Math.random() * userStampLength);//用戶當前有幾個stamp抓index值
      stampEffectDiv.style.backgroundImage = vmCatchLet.userStamp[randStampInx];
      // console.log(randStampInx);
      // console.log(vmCatchLet.userStamp[randStampInx]);
      
      stampshot.appendChild(stampEffectDiv);
      console.log(e.pageX, e.pageY);
      setTimeout(()=>{
        planeLetter.style.animationName = "rotateLetter";
      },500)

      //出現下一步的箭頭
      if(stampshot.style.display === "block"){
        nextStepArrow.style.display="block";
      }
      //下一步的箭頭被點擊->查看信件
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
          document.querySelector('footer').style.display= "block";//將footer顯示出來
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
          for(let i = 0 ; i<submitStamp.length ; i++){
            submitStamp[i].addEventListener('touchend',(e)=>{
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

  //返回鈕
  function goBackBtn(){
    let goBackBtn = document.getElementById('goBackBtn');
    setTimeout(()=>{
      goBackBtn.style.display = "flex";
    },5000)
    let catchAgain = document.getElementById('catchAgain');
    catchAgain.addEventListener('click', clearLetter ,false)
  }

  function clearLetter(){
    location.reload();
  }