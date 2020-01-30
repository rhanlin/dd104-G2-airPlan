
const newsCat = {
  template: `
    <div>
    <h3>爆料版說明:</h3>
    <p>獨樂樂不如眾樂樂，有什麼大家必須知道的事情，最勁爆的踢爆、直擊與新聞，在此盡覽無遺。</p>
    </div>
    `
}
const moodCat = {
  template: `
    <div>
    <h3>心情版說明:</h3>
    <p>提供分享生活情緒、抒發心情或交流各種情緒處理的經歷故事。在這裡你可以安心匿名，讓世界可以安慰你的心靈。</p>
    </div>
    `
}
const funCat = {
  template: `
    <div>
    <h3>娛樂版說明:</h3>
    <p>最新國內外流行娛樂，由你帶領世界走向環遊星世界！拋棄所有煩惱，來到娛樂世界讓你歡樂百分百。</p>
    </div>
    `
}
const defaultCat = {
  template: `
    <div>
        <h3>分類說明:</h3>
        <p>請從三種分類中選擇一個最合適的主題！</p>
    </div>
    `
}
let vm1 = new Vue({
  el: "#writStep1",
  data: {
    tvStart: false,
    letterCategory: '',
    catIllustrate: defaultCat,
  },
  components: {
    newsCat,
    moodCat,
    funCat,
    defaultCat,
  },
  methods: {
    setCategoryName(e) {
      e.preventDefault();
      // console.log(e.target.firstChild);
      this.tvStart = true;
      let catLabel = e.target.parentNode.children;
      //讓所有按鈕回到初始值
      for (let i = 0; i < catLabel.length; i++) {
        catLabel[i].classList = "btn";
      }
      e.target.firstChild.checked = true;
      e.target.classList.add("click");
      this.letterCategory = e.target.innerText;
      this.catIllustrate = e.target.firstChild.value;
    },
  },
});
let vm2 = new Vue({
  el: '#writStep2',
  data: {
    showUploadImg: 'url(./img/share/imgIcon-white.svg)',
    letterUploadImg: '',
  },
  methods: {
    fileSelected(e) {
      let file = e.target.files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener('load', this.loadImage);
    },
    loadImage(e) {
      this.showUploadImg = `url('${e.target.result}')`;
      this.letterUploadImg = e.target.result;
      document.getElementById('hookimg').style.animationName = "hookimgRise";
      // console.log(this.letterUploadImg);

    },
  },
});

let vm3 = new Vue({
  el: '#writStep3',
  data: {
    openIndex: null,
    userPattern: [],//存 使用者"擁有"的飛機彩繪對應的URL
    previewPattern: null,
    patternValue: [], //input radio 的value值
    letterPattern: 0, //存 使用者"選到"的飛機彩繪編號(matPatNo) 得值
    userNo: 0,
    letCount: 0,//使用者的信紙數量
    leftPosition: '0',
    clickCount: 0,
    origenCount:0,
    stamp_leftPosition:'0',
    clickCount_Stamp: 0,
    origenCount_Stamp:0,
  },
  methods: {
    clickPattern(e, index) {
      this.openIndex = index;
      this.previewPattern = this.$refs.bg[index].style.backgroundImage;
      this.letterPattern = e.target.firstChild.value;
      e.target.firstChild.checked = true;
      canvasSet();
    },
    clickPatArrow(e){
      let widthpx = Math.ceil(document.querySelector('#painteType .type').offsetWidth);//每個貼圖盒的寬度
      let WINDOW_WIDTH = document.body.clientWidth;
      let BOX_WIDTH = Math.ceil(widthpx/WINDOW_WIDTH*100);//貼圖盒佔整個螢幕的%數
      let painteType = document.getElementById('painteType');
      // const origenCount = vm3.clickCount;//存放起始可被點擊次數，不會被改動，拿來做判斷
      // console.log(vm3.clickCount);
      
      if(e.target.id == "printArrow-Lf"){
        if(vm3.clickCount == vm3.origenCount){
          console.log('no');
        }else{
          vm3.clickCount ++;
          vm3.leftPosition = `${Math.floor(parseInt(vm3.leftPosition) + BOX_WIDTH*1.8)}%`;
          console.log(vm3.clickCount);
        }
      }else if(e.target.id == "printArrow-Rg"){
        if(vm3.clickCount <= 0){
          console.log('no');
        }else{
          vm3.clickCount --;
          vm3.leftPosition = `${Math.floor(parseInt(vm3.leftPosition) - BOX_WIDTH*1.8)+1}%`;
          console.log(vm3.clickCount);
        }
      }
    }
  },
  mounted() {
    function onFulfilled(value) {
      //登入成功 -> 取用戶彩繪圖案、用戶郵戳
      vm3.userNo = value;
      return new Promise((resolve, reject) => {
        if( vm3.letCount > 0 ){
          // console.log(`userNo: ${vm3.userNo}`);
          fetch('./phps/fetchAllUserMat.php')
            .then(res => res.json()).then(json => {
              //拆出 pattern
              // console.log(json);

              for (let i = 0; i < json.data.length; i++) {
                if (json.data[i].patternNo) {
                  vm3.userPattern.push(`url(${json.data[i].patternUrl})`);
                  vm3.patternValue.push(json.data[i].patternNo);//取 使用者"擁有"飛機彩繪的編號(matPatNo) 得值
                }
              }
              for (let i = 0; i < json.data.length; i++) {
                if (json.data[i].stampNo) {
                  vmUserStamp.userStamp.push(`url(${json.data[i].stampUrl})`);
                  vmUserStamp.stampValue.push(json.data[i].stampNo);//取 使用者飛機彩繪的編號得值(matPosNo)
                }
              }
            })
            .then(listenSubmitBtn)
        }else{
          reject(new Error('您的信紙用完了請前往商城購買'));
        }
      }).catch(onNoPapered)
    }
    //沒信紙
    function onNoPapered(reason){
      alert(reason);
      let info = document.querySelector('.signInData h4');
      let singInBox = document.getElementById('signInBg');
      let closeSigin = document.getElementById('closeSigin');
      let closeRegister = document.getElementById('closeRegister');
      let signInCancelBtn = document.getElementById('signInCancelBtn');
      let closeForget = document.getElementById('closeForget');

      let goShopBtn = document.createElement('button');
      let goShopBtnText = document.createElement('a');

      singInBox.style.display = "block";
      document.querySelector('.signInData').style=`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      `;
      info.innerText = reason.message;
      document.querySelector('.formsignInData').style.display="none";

      closeSigin.style.display = "none";
      closeRegister.style.display = "none";
      closeForget.style.display = "none";
      signInCancelBtn.style.display = "none";
      goShopBtnText.innerText = "前往商城";
      goShopBtn.setAttribute('id', 'goShopBtn');
      goShopBtnText.setAttribute('href', './shop.html');

      goShopBtn.appendChild(goShopBtnText);
      document.querySelector('.signInData').appendChild(goShopBtn);
    }

    // 監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，先檢查必要欄位是否有填值
    function listenSubmitBtn() {
      let submitStamp = document.getElementById('submitStamp').childNodes;
      // console.log(`stamp length: ${submitStamp.length}`);
      for (let i = 0; i < submitStamp.length; i++) {
        submitStamp[i].addEventListener('click', (e) => {
          e.preventDefault();//解掉冒泡事件
          e.stopPropagation();
          e.stopImmediatePropagation();
          vmImgWrap.chooseStampUrl = e.target.children[0].style.backgroundImage;
          // console.log(vmImgWrap.chooseStampUrl);
          writeLetterExm();
        })
      }
      for (let i = 0; i < submitStamp.length; i++) {
        submitStamp[i].addEventListener('touchend', (e) => {
          e.preventDefault();//解掉冒泡事件
          e.stopPropagation();
          e.stopImmediatePropagation();
          vmImgWrap.chooseStampUrl = e.target.children[0].style.backgroundImage;
          writeLetterExm();
        })
      }
      
      // if(document.body.clientWidth <= 375){
      //   let leftValue = Math.ceil(document.getElementById('painteType').offsetWidth);
      //   if(leftValue>265)leftValue=265;
      //   vm3.leftPosition = `${leftValue}%`;//計算輪播left值
      // }else if(document.body.clientWidth <= 414){
      //   let leftValue = Math.ceil(document.getElementById('painteType').offsetWidth);
      //   if(leftValue>245)leftValue=245;
      //   vm3.leftPosition = `${leftValue}%`;//計算輪播left值
      // }else{
      //   let leftValue = Math.ceil(document.getElementById('painteType').offsetWidth/13);
      //   if(leftValue>68)leftValue=68;
      //   vm3.leftPosition = `${leftValue}%`;//計算輪播left值
      // }
      
      if(document.body.clientWidth <= 375){
        //計算可以點擊的次數
        vm3.clickCount = document.querySelectorAll('#painteType .type').length-1;
        vm3.origenCount = document.querySelectorAll('#painteType .type').length-1;
        
        //計算存放郵戳的總寬度
        let patBoxlength = document.querySelectorAll('#painteType .type').length;
        let oneWidth = document.querySelectorAll('#painteType .type')[0].offsetWidth;

        let allPercentage = Math.floor((oneWidth*patBoxlength)/document.body.clientWidth*100*0.83);
        // console.log(allPercentage);
        vm3.leftPosition = `${allPercentage}%`;
      }else if(document.body.clientWidth <= 576){
        //計算可以點擊的次數
        vm3.clickCount = document.querySelectorAll('#painteType .type').length-1;
        vm3.origenCount = document.querySelectorAll('#painteType .type').length-1;
        //計算存放郵戳的總寬度
        let patBoxlength = document.querySelectorAll('#painteType .type').length;
        let oneWidth = document.querySelectorAll('#painteType .type')[0].offsetWidth;
        let allPercentage = Math.floor((oneWidth*patBoxlength)/document.body.clientWidth*100*0.85);
        // console.log(allPercentage);
        vm3.leftPosition = `${allPercentage}%`;
      }else{
        //計算可以點擊的次數
        vm3.clickCount = document.querySelectorAll('#painteType .type').length-3;
        vm3.origenCount = document.querySelectorAll('#painteType .type').length-3;
        //計算存放郵戳的總寬度
        let patBoxlength = document.querySelectorAll('#painteType .type').length;
        let oneWidth = document.querySelectorAll('#painteType .type')[0].offsetWidth;
        let allPercentage = Math.floor((oneWidth*patBoxlength)/document.body.clientWidth*100*0.93)+1;
        // console.log(allPercentage);
        vm3.leftPosition = `${allPercentage}%`;
      }
    }
    function onRejected(reason) {
      //沒有登入
      console.log(reason.message);
      let singInBox = document.getElementById('signInBg');
      let closeSigin = document.getElementById('closeSigin');
      let closeRegister = document.getElementById('closeRegister');
      let signInCancelBtn = document.getElementById('signInCancelBtn');
      let closeForget = document.getElementById('closeForget');
      let vistiorsBtn = document.createElement('button');
      let singInText = document.createElement('p');
      let vistiorsBtnText = document.createElement('p');
      singInBox.style.display = "block";

      closeSigin.style.display = "none";
      closeRegister.style.display = "none";
      closeForget.style.display = "none";
      signInCancelBtn.style.display = "none";
      vistiorsBtnText.innerText = "訪客登入";
      vistiorsBtn.setAttribute('id', 'vistiorsBtn');
      vistiorsBtn.setAttribute('type', 'button');
      vistiorsBtn.appendChild(vistiorsBtnText);
      singInText.innerText = reason.message;
      singInText.style = "display:inline-block;width:80%;text-align:center;background-size:100% 100%;position:absolute;top:7.5%;left: 50%;transform:translate(-50%, -50%);z-index:999;color:#fff;font-size:2rem;";
      singInBox.appendChild(singInText);
      document.querySelector('.formsignInData').appendChild(vistiorsBtn);

      vistiorsBtn.addEventListener('click', visitorsLogin, false);
      // signInCancelBtn.onclick = visitorsLogin;
    }
    function visitorsLogin(e) {
      e.target.preventDefault;
      document.getElementById('signInEmail').value = "visiter@gmail.com";
      document.getElementById('signInPassword').value = "111";
    }
    function getSignInInfo() {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
          let member = JSON.parse(xhr.responseText);
          
          if (member.memNo) {
            vm3.letCount = member.letCount;
            console.log(`我的信紙： ${vm3.letCount}`);
            resolve(member.memNo);
          } else {
            reject(new Error('請先登入才能寫信'))
          }
        }
        xhr.open("get", "./phps/nav_getSignInInfo.php", true);
        xhr.send(null);
      })
    }
    getSignInInfo()
      .then(onFulfilled)
      .catch(onRejected)

  },
});

/*
 * 打字動畫
 */
var speed = 300;
var disciptionText = document.querySelectorAll('.discription');
//商城按鈕文字
setInterval(() => {
  typeEffect(disciptionText[1].firstChild, speed);
  typeEffect(disciptionText[0].firstChild, speed);
}, 3000);
//打字動畫Fn
function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}



//判斷必要欄位是否有填值
function writeLetterExm() {
  let letterTitle = document.getElementById('letterTitle');
  let letterContant = document.getElementById('letterContant');
  let lettrtCat = document.getElementsByName('letSort');
  let letterPat = document.getElementsByName('userPattern');
  // console.log(lettrtCat[0].checked);

  //判斷 信件分類
  let checkflag = 0;
  for (var i = 0; i < lettrtCat.length; i++) {
    if (lettrtCat[i].checked == true) {
      checkflag = 1;
    }
  }
  //判斷 彩繪圖案
  let patFlag = 0;
  for (var i = 0; i < letterPat.length; i++) {
    if (letterPat[i].checked == true) {
      patFlag = 1;
    }
  }

  if (checkflag == 0) { //沒有work??
    alert("請選擇信件分類");
  } else if (letterTitle.value == "") {
    alert("請輸入信件標題");
  } else if (letterContant.value == "") {
    alert("請輸入信件內容");
  } else if (patFlag == 0) {
    alert("請選擇彩繪圖案");
  } else {
    //判斷必要欄位皆有填值
    // saveImage();//先存好canvas
    // setTimeout(()=>{
    //   confirmSubmit();//前往下一步->摺紙
    // },1000)
    confirmSubmit();//前往下一步->摺紙
  }
}

//把信件存成圖片
var counter = 0;
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");
// let imgCtx = canvas.getContext("2d");
//按實際渲染倍率來縮放canvas
let getPixelRatio = function (context) {
  let backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
}
let ratio = getPixelRatio(context);
canvas.style.width = canvas.width + 'px';
canvas.style.height = canvas.height + 'px';

canvas.width = canvas.width * ratio;
canvas.height = canvas.height * ratio;

context.scale(ratio, ratio);
// context.textBaseline = 'top';
context.fillStyle = "#212121";

function b(arr, target, context) {
  let low = 0
  let high = arr.length - 1
  let mid = low + Math.floor((high - low) / 2)
  let i = 0
  if (high < low) return -1;
  while (high > low) {
    var s = arr.slice(0, mid + 1).join('')
    var len = context.measureText(s).width
    if (len < target) {
      low = mid
    } else {
      high = mid - 1
    }
    mid = low + Math.floor((high - low + 1) / 2)
    counter++;
  }
  return mid
}

CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight, fontSize, isTittle) {
  if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
    return;
  }

  var context = this;
  context.font = `${fontSize}px Noto-Sans-TC`;


  // 字符分隔
  var arrText = text.split('');
  var newArrText = new Array();
  let max;//字符能存的最大長度
  let maxTitle;
  var end = "...";
  //驗證字符為英文或是中文
  var Chinese = new RegExp("[\u4E00-\u9FA5]+");
  var English = new RegExp("[A-Za-z]+");
  if(Chinese.test(text)){
    // alert('中文！');
    max = 305;
    maxTitle = 38;
  }else if(English.test(text)){
    // alert('Engilsh!');
    max = 740;
    maxTitle = 80;
  }
  if(isTittle == true){
    //信件標題
    for (i=0;i<maxTitle ;i++ ) {
      newArrText.push(arrText[i]);
    }
    if(arrText.length >= maxTitle) newArrText.push(end);
  }else{
    //信件內容
    for (i=0;i<max ;i++ ) {
      newArrText.push(arrText[i]);
    }
    if(arrText.length >= max) newArrText.push(end);
  }
  

  var line = '';

  var start = 0;
  var end = 0
  var lineArr = []
  var line = ''
  var isEnd = false

  while (end !== -1) {
    end = b(newArrText, maxWidth, context)
    // console.log('start: ' + start, 'end: ' + end)
    lineArr = newArrText.splice(start, end + 1)
    line = lineArr.join('')
    context.fillText(line, x, y);
    y += lineHeight;
  }
}

function canvasSet() {
  // console.log('製作canvas！');
  context.clearRect(0, 0, canvas.width, canvas.height);//清空畫布
  let canvasWidth = parseInt(document.getElementById('myCanvas').style.width);
  let canvasHeight = parseInt(document.getElementById('myCanvas').style.height);
  let letFrameImg = new Image();
  letFrameImg.src = "./img/share/postCard-vertical.svg";//信件邊框的裝飾圖
  //信件邊框
  letFrameImg.addEventListener('load', () => {
    context.drawImage(letFrameImg, 0, 0, canvasWidth, canvasHeight);
  })
  saveImage();
}

function saveImage() {
  let textTittle = document.getElementById('letterTitle');
  let letterContant = document.getElementById('letterContant');
  let img = new Image();
  let sizeScale;
  img.src = vm2.letterUploadImg;//user上傳的圖片
  //判斷圖片是直式還是橫式，並換算user上傳圖片要縮小的比例
  // console.log(img.src.indexOf('base64'));
  if(img.src.indexOf('base64') != -1){
    img.addEventListener('load', () => {
      if(img.height > img.width){
        sizeScale = img.height / 260;
      }else{
        sizeScale = img.width / 415;
      }
      img.width = img.width / sizeScale;
      img.height = img.height / sizeScale;
      context.wrapText(textTittle.value, 40, img.height+70, 415, 28, 20, true);//60
      context.wrapText(letterContant.value, 40, img.height+130, 415, 24, 16 , false);
      context.drawImage(img, 40, 35, img.width, img.height);
      })
  }else{
    context.wrapText(textTittle.value, 40, 50, 415, 28, 20, true);//60
    context.wrapText(letterContant.value, 40, 110, 415, 24, 16 , false);
  }
}

//AJAX送資料到後端
function submitToLetterTable() {
  // let formData = new FormData(document.getElementById('wrtLetForm'))
  // console.log(formData);
  let letterImg;
  let lettrtCat = vm1.letterCategory;//從Vue 的v-model去雙向綁定
  let letterTitle = document.getElementById('letterTitle').value;
  let letterContant = document.getElementById('letterContant').value;
  letterImg = vm2.letterUploadImg;
  letterImg = letterImg.replace(/\&/g, "%26");//將ajax傳送的base64格式轉譯
  letterImg = letterImg.replace(/\+/g, "%2B");
  let letterPattern = vm3.letterPattern;
  let userStamp = vmUserStamp.letterStamp;
  let userNo = vm3.userNo;
  let canvas = document.getElementById('myCanvas');
  let hidden_data = canvas.toDataURL("image/png");
  hidden_data = hidden_data.replace(/\&/g, "%26");
  hidden_data = hidden_data.replace(/\+/g, "%2B");
  // document.getElementById('hidden_data').value = letImgUrl;
  // console.log(hidden_data);

  //--- 產生XMLHttpRequest物件
  let xhr = new XMLHttpRequest();
  //--- 設定好所要連結的程式
  let url = "./phps/writeLetter.php";
  //註冊callback function 來判斷是否新增資料完成
  xhr.onload = function () {
    if (xhr.status == 200) {
      let json = JSON.parse(xhr.responseText);
      // let json = xhr.responseText;
      // console.log(json);
      document.getElementById("cavPaperN").innerText = '信紙:' + json.letCount;
      document.getElementById("cavPaperH").innerText = '信紙:' + json.letCount;
      vmImgWrap.letUrl = `url('${json.data.letImgUrl}')`;//把圖片路徑塞去摺紙的畫面上
      vmImgWrap.letPattern = `url('${json.data.matPatUrl}')`;//用戶選擇的彩繪花紋
      // console.log(json);
    } else {
      console.log('上傳失敗');
    }
  }

  xhr.open("POST", url, true);
  //--- 送出資料
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data_info = `memNo=${userNo}&letPower=1&matPatNo=${letterPattern}&matPosNo=${userStamp}&letTitle=${letterTitle}&letContent=${letterContant}&imgUrl=${letterImg}&mesCount=0&letSort=${lettrtCat}&letStatus=0&hidden_data=${hidden_data}`;
  //memNo=10 10要改成${變數} 此變數從session撈出目前登入的用戶number

  xhr.send(data_info);

}
