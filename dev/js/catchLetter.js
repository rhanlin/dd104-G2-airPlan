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
    // successNum = 10;//.......測試用
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
        letterFlim()//開信->一封信
        .then(stampShot())//蓋章
      }else{
        letterFlim()//開信->新聞
        .then(goBackBtn_News())//返回按鈕
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
      // console.log(e.pageX, e.pageY);
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
      // console.log(e.pageX, e.pageY);
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
          // console.log(renderer);
          // renderer = null;
          // console.log(renderer);
          
          document.getElementById('navHead').classList = "nav-navBgWrap";//選單向下出來
          document.getElementById('catchLetterMain').style.display = "block";
          document.getElementById('catchLetterMain').style.animationName = "showCatchLetter";
          document.querySelector('header').style.display = "block"; //將header顯示出來
          document.querySelector('footer').style.display= "block";//將footer顯示出來
          document.querySelector('header').style.animationName = "showHeader";

          //判斷是否有留言，如果沒有，把打賞留言按鈕none
          let userNameValue = document.querySelector('.user-name').innerText;
          // console.log(userNameValue);
          if(userNameValue == "歡迎留言！"){
            document.getElementById('commentBtn').style.display="none";
          }
          //判斷每一筆留言的狀態為何
          let isLaunched = document.querySelectorAll('.isLaunched');
          for( i of isLaunched){
            if(i.innerText == "1"){
              i.innerText = "此留言已遭下架";
              i.style=`
              background-image: url(./img/share/transparent.jpg);
              background-size: 200%;
              background-position: center center;
              position: absolute;
              opacity: 1;
              width: 100%;
              height: 100%;
              left: 0px;
              top: 0px;
              z-index: 99;
              color: #DC5453;
              white-space: pre;
              font-size: 1.5rem;
              font-weight: bold;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
              display: flex;
              letter-spacing: .8rem;
              flex-direction: column;
              justify-content: center;
              border-radius: 10px;
              align-items: center;`
              i.classList.add('noShow');
            }
          };
          

          //信件打賞, 檢舉
          likeOrReport();
          //留言打賞, 檢舉
          msgLikeOrReport();
          //監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，前往下一步->摺紙
          let submitStamp = document.querySelectorAll('.type');
          for(let i = 0 ; i<submitStamp.length ; i++){
            submitStamp[i].addEventListener('click',(e)=>{
              e.preventDefault();//解掉冒泡事件
              e.stopPropagation();
              e.stopImmediatePropagation();
              vmImgWrap.chooseStampUrl = e.target.style.backgroundImage;
              // console.log(vmImgWrap.chooseStampUrl);
              confirmSubmit();
            })
          }
          for(let i = 0 ; i<submitStamp.length ; i++){
            submitStamp[i].addEventListener('touchend',(e)=>{
              e.preventDefault();//解掉冒泡事件
              e.stopPropagation();
              e.stopImmediatePropagation();
              vmImgWrap.chooseStampUrl = e.target.style.backgroundImage;
              confirmSubmit();
            })
          }
        },500)
      })
    })
  }
  //留言打賞, 檢舉
  function msgLikeOrReport(){
    let msgLike = document.querySelectorAll('.msgLike');
    let msgReport = document.querySelectorAll('.msgReport');
    // console.log(msgLike);
    for(like of msgLike){
      like.addEventListener('click',sendLikeMsg,false);
    }
    for(report of msgReport){
      report.addEventListener('click',sendReportMsg,false);
    }
  }
  function sendLikeMsg(e){
    // console.log(e.target);
    fetch(`./phps/likeMsg.php?memNo=${vmCatchLet.userNo}&msgNo=${e.target.value}`,{
      method:'GET',
    }).then(res=>res.json()).then(json=>{
        // console.log(json);
      })
      e.target.style.pointerEvents = 'none';
      e.target.style.background= "#aaa";
      e.target.style.boxShadow="0 1px 1px 1px #878787";
      e.target.style.top="7%";
      e.target.classList.add('active');
  }
  function sendReportMsg(e){
    let btn = e.target;
    btn.style.pointerEvents = 'none';
    btn.style.background= "#aaa";
    btn.style.boxShadow="0 1px 1px 1px #878787";
    btn.style.top="7%";
    btn.classList.add('active');
    
    vmCatchLet.reportMsgNo = btn.value;
    // console.log(vmCatchLet.reportMsgNo);
    // reportThisMsg();
    document.getElementById('msgReportBox').style.display="block";
    let exit_msg = document.getElementById('closeReportBox_msg');
    let msgReportBtn = document.getElementById('msgReportBtn');
    let msgWhyReport = document.querySelector('.msgWhyReport').children;
    
    // console.log(msgWhyReport);
    
    //關閉檢舉視窗
    exit_msg.addEventListener('click',(e)=>{
      e.preventDefault();//解掉冒泡事件
    e.stopPropagation();
    e.stopImmediatePropagation();
      document.getElementById('msgReportBox').style.display="none";
      btn.style="";
      btn.classList.remove('active');
    })
    //監聽檢舉原因選項
    for(let i=0;i<msgWhyReport.length;i++){
      msgWhyReport[i].addEventListener('click',(e)=>{
        vmCatchLet.whyReportMsg = e.target.innerText;
      })
    }
    
    //送出檢舉原因
    msgReportBtn.addEventListener('click', sendMsgReport , true);
    //檢舉留言
    function sendMsgReport(e){
      e.preventDefault();//解掉冒泡事件
      e.stopPropagation();
      e.stopImmediatePropagation();
      document.getElementById('msgReportBox').style.display="none";
      console.log('reportMsg!');
      fetch('./phps/reportMsg.php',{
        method:'POST',
        body: new URLSearchParams(`memNo=${vmCatchLet.userNo}&msgNo=${vmCatchLet.reportMsgNo}&msgRepReason=${vmCatchLet.whyReportMsg}`),
      })
      .then(res=>res.json()).then(json=>{
        // console.log(json);
      })
      // e.target.style.pointerEvents = 'none';
      // e.target.style.background= "#aaa";
      // e.target.style.boxShadow="0 1px 1px 1px #878787";
      // e.target.style.top="7%";
      // e.target.classList.add('active');
      shootStamp();
    }
    function shootStamp(){
      let stamp = document.createElement('div');
        stamp.setAttribute('id', 'reportStamp');
        btn.appendChild(stamp);
        // console.log();
    }
  }
  //禁止滾動事件
  function wheel(e){
    e.preventDefault();
  }
  function scrollFunc(evt) {
    console.log(1);
    
    return false;
  }
  //信件打賞, 檢舉信件
  function likeOrReport(){
    btn = document.querySelector('.catchLet-Btn').children;
    for(let i=0;i<btn.length;i++){
      btn[i].addEventListener('click',(e)=>{
        e.preventDefault();//解掉冒泡事件
        e.stopPropagation();
        e.stopImmediatePropagation();
        if(e.target.id == 'likeThis'){
          console.log('打賞這封信');
          // console.log(e.target.children);
          document.getElementById('likeActive').classList.add('active');
          likeThisLet();
          fetch('./phps/likeLetter.php',{
            method:'POST',
            body: new URLSearchParams(`memNo=${vmCatchLet.userNo}&letNo=${vmCatchLet.letNo}`),
          })
          // .then(res=>res.text()).then(text=>{
          //   console.log(text);
          // })
        }else if(e.target.id == 'reportThis'){
          console.log('檢舉這封信');
          document.getElementById('reportActive').classList.add('active');
          // document.getElementById('likeActive').classList.add('active');

          reportThis();
        }else{
          alert("出意外了沒點擊成功")
        }
      })
      btn[i].addEventListener('touchend',(e)=>{
        e.preventDefault();//解掉冒泡事件
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        if(e.target.id == 'likeThis'){
          console.log('打賞這封信');
          // console.log(e.target.children);
          document.getElementById('likeActive').classList.add('active');
          likeThisLet();
          fetch('./phps/likeLetter.php',{
            method:'POST',
            body: new URLSearchParams(`memNo=${vmCatchLet.userNo}&letNo=${vmCatchLet.letNo}`),
          })
          // .then(res=>res.text()).then(text=>{
          //   console.log(text);
          // })
        }else if(e.target.id == 'reportThis'){
          console.log('檢舉這封信');
          document.getElementById('reportActive').classList.add('active');
          document.getElementById('likeActive').classList.add('active');
          //禁止頁面滾動
          document.body.addEventListener('touchmove', wheel, { passive: false });
          document.body.addEventListener('DOMMouseScroll', scrollFunc, false);
          document.body.addEventListener('mousewheel', scrollFunc, false);
          reportThis();
        }else{
          alert("出意外了沒點擊成功")
        }
      })
    }
  }

  function likeThisLet(){
    let letterWrap = document.getElementById('letterWrap');
    letterWrap.classList.add('active');
    document.getElementById('likeThis').style.pointerEvents = 'none';
    // document.getElementById('likeThis').style.pointerEvents = 'none';
    
  }
  // function reportThisMsg(){
    
  // }
  function reportThis(){
    document.getElementById('reportBox').style.display="block";
    let exit = document.getElementById('closeReportBox');
    let reportBtn = document.getElementById('reportBtn');
    let whyReport = document.querySelector('.whyReport').children;
    
    //關閉檢舉視窗
    exit.addEventListener('click',()=>{
      document.getElementById('reportBox').style.display="none";
      document.getElementById('reportActive').classList.remove('active');
      // document.getElementById('likeActive').classList.remove('active');
      //解除禁止滾動
      document.body.removeEventListener('touchmove', wheel, { passive: false });
    })
    //監聽檢舉原因選項
    for(let i=0;i<whyReport.length;i++){
      whyReport[i].addEventListener('click',(e)=>{
        vmCatchLet.whyReport = e.target.innerText;
        // console.log(e.target.innerText);
      })
    }
    //送出檢舉原因
    reportBtn.addEventListener('click', sendReport , false);
  }

  
  function sendReport(){
    document.getElementById('reportBox').style.display="none";
    console.log('report!');
    fetch('./phps/reportLetter.php',{
      method:'POST',
      body: new URLSearchParams(`memNo=${vmCatchLet.userNo}&letNo=${vmCatchLet.letNo}&letRepReason=${vmCatchLet.whyReport}`),
    })
    .then(res=>res.json()).then(json=>{
      // console.log(json);
      //解除禁止滾動
      document.body.removeEventListener('touchmove', wheel, { passive: false });
    })
    //蓋上以檢舉印章
    let letterWrap = document.getElementById('letterWrap');
    letterWrap.classList.add('reportSeal');
    //檢舉後不能再打賞
    document.getElementById('likeThis').style.pointerEvents = 'none';
    document.getElementById('reportThis').style.pointerEvents = 'none';
    document.getElementById('likeActive').classList.add('quiet');
  }