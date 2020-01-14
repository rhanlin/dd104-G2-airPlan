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
          // console.log(catchLetterShow);
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
      //下一步的箭頭
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
        },500)
      })
    })
  }
