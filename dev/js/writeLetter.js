
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
        <p>blablabla</p>
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
    patternValue:[], //input radio 的value值
    letterPattern: 0, //存 使用者"選到"的飛機彩繪編號(matPatNo) 得值
  },
  methods: {
    clickPattern(e,index) {
      this.openIndex = index;
      this.previewPattern = this.$refs.bg[index].style.backgroundImage;
      this.letterPattern = e.target.firstChild.value;
      e.target.firstChild.checked = true;
      canvasSet();
    },
  },
  mounted() {
    fetch('./phps/fetchAllUserMat.php',{
      method:'POST',
      body: new URLSearchParams(`memNo=10`) //10要改成${變數} 此變數從session撈出目前登入的用戶number
    })
      .then(res=>res.json()).then(json=>{
        //拆出 pattern
        for(let i=0 ; i<json.data.length ; i++){
          if(json.data[i].patternNo){
            this.userPattern.push(`url(${json.data[i].patternUrl})`);
            this.patternValue.push(json.data[i].patternNo);//取 使用者"擁有"飛機彩繪的編號(matPatNo) 得值
          }
        }
        // console.log(this.patternValue);
      })
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

/*
 * 寫信頁面表單送出按鈕
 */
// 監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，先檢查必要欄位是否有填值
let submitStamp = document.querySelector('.stamp-type').children;
for (let i = 0; i < submitStamp.length; i++) {
  submitStamp[i].addEventListener('click', (e) => {
    e.preventDefault();//解掉冒泡事件
    e.stopPropagation();
    e.stopImmediatePropagation();
    // let letterStamp = parseInt(e.target.firstChild.value)+1;
    // console.log(e.target);
    // saveImage();//先存好canvas
    writeLetterExm();
  })
}
for (let i = 0; i < submitStamp.length; i++) {
  submitStamp[i].addEventListener('touchend', (e) => {
    e.preventDefault();//解掉冒泡事件
    e.stopPropagation();
    e.stopImmediatePropagation();
    // let letterStamp = parseInt(e.target.firstChild.value)+1;
    // console.log(e.target);
    // saveImage();//先存好canvas
    writeLetterExm();
  })
}

//判斷必要欄位是否有填值
function writeLetterExm() {
  let letterTitle = document.getElementById('letterTitle');
  let letterContant = document.getElementById('letterContant');
  let lettrtCat = document.getElementsByName('letSort');
  // console.log(lettrtCat[0].checked);
  
  //判斷 信件分類
  let checkflag = 0;
  for (var i = 0; i < lettrtCat.length; i++) {
    if (lettrtCat[i].checked == true) {
      checkflag = 1;
    }
  }
  if (checkflag == 0) { //沒有work??
    alert("請選擇信件分類");
  } else if (letterTitle.value == "") {
    alert("請輸入信件標題");
  } else if (letterContant.value == "") {
    alert("請輸入信件內容");
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
  if(high < low) return -1;
  while(high > low) {
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

CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight , fontSize) {
	if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
		return;
	}
	
	var context = this;
	context.font=`${fontSize}px Noto-Sans-TC`;
	// 字符分隔
	var arrText = text.split('');
	var line = '';
     
    var start = 0;
    var end = 0
    var lineArr = []
    var line = ''
    var isEnd = false
  
    while(end !== -1) {
      end = b(arrText, maxWidth, context)
      // console.log('start: ' + start, 'end: ' + end)
      lineArr = arrText.splice(start, end + 1)
      line = lineArr.join('')
      context.fillText(line, x, y);
      y += lineHeight;
    }
}

function canvasSet(){
  // console.log('製作canvas！');
  context.clearRect(0, 0, canvas.width, canvas.height);//清空畫布
  let canvasWidth = parseInt(document.getElementById('myCanvas').style.width);
  let canvasHeight = parseInt(document.getElementById('myCanvas').style.height);
  let letFrameImg = new Image();
  letFrameImg.src = "./img/share/postCard-vertical.svg";//信件邊框的裝飾圖
  //信件邊框
  letFrameImg.addEventListener('load',()=>{
    context.drawImage(letFrameImg, 0, 0, canvasWidth, canvasHeight);
  })
  saveImage();
}

function saveImage(){
  let textTittle = document.getElementById('letterTitle');
  let letterContant = document.getElementById('letterContant');
  let img = new Image();
  img.src = vm2.letterUploadImg;//user上傳的圖片

  let widthScale = img.width/160;//換算user上傳圖片要縮小的比例
  img.width = img.width/widthScale;
  img.height = img.height/widthScale;
  context.wrapText(textTittle.value, 220, 70, 230, 40, 30);
  context.wrapText(letterContant.value, 40, 240, 415, 28, 18);
  //文字長度參考: https://news.ltn.com.tw/news/world/breakingnews/3035551 要在限制標題跟內文字數
  //信件內容
  img.addEventListener('load',()=>{
    context.drawImage(img, 40, 50,img.width,img.height);
  })
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
  letterImg = letterImg.replace(/\&/g,"%26");//將ajax傳送的base64格式轉譯
  letterImg = letterImg.replace(/\+/g,"%2B");
  let letterPattern = vm3.letterPattern;
  let userStamp = vmUserStamp.letterStamp;
  let canvas = document.getElementById('myCanvas');
  let hidden_data = canvas.toDataURL("image/png");
  hidden_data = hidden_data.replace(/\&/g,"%26");
  hidden_data = hidden_data.replace(/\+/g,"%2B");
  // document.getElementById('hidden_data').value = letImgUrl;
  // console.log(hidden_data);
  
  //--- 產生XMLHttpRequest物件
  let xhr = new XMLHttpRequest();
  //--- 設定好所要連結的程式
  let url = "./phps/writeLetter.php";
  //註冊callback function 來判斷是否新增資料完成
  xhr.onload = function(){
    if(xhr.status == 200){
      let json = JSON.parse(xhr.responseText);
      vmImgWrap.letUrl = `url('${json.data.letImgUrl}')`;//把圖片路徑塞去摺紙的畫面上
      console.log(vmImgWrap.letUrl);
    }else{
      console.log('上傳失敗');
    }
  }
  
  xhr.open("POST", url, true);
  //--- 送出資料
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data_info = `memNo=10&letPower=1&matPatNo=${letterPattern}&matPosNo=${userStamp}&letTitle=${letterTitle}&letContent=${letterContant}&imgUrl=${letterImg}&mesCount=0&letSort=${lettrtCat}&letStatus=0&hidden_data=${hidden_data}`;
  //memNo=10 10要改成${變數} 此變數從session撈出目前登入的用戶number
  
  xhr.send(data_info);

}
