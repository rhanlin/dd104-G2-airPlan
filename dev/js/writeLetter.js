
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
      console.log(this.letterUploadImg);
      
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
    // e.preventDefault();//解掉冒泡事件
    e.stopPropagation();
    e.stopImmediatePropagation();
    // let letterStamp = parseInt(e.target.firstChild.value)+1;
    // console.log(e.target);
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
    //判斷必要欄位皆有填值，前往下一步->摺紙
    confirmSubmit();
  }
}


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
  // let letTime = new Date().;
  //--- 產生XMLHttpRequest物件
  let xhr = new XMLHttpRequest();
  //註冊callback function 來判斷是否新增資料完成
  xhr.onload = function(){
    if(xhr.status == 200){
      console.log(xhr.responseText);
    }else{
      console.log('上傳失敗');

    }
  }
  //--- 設定好所要連結的程式
  let url = "./phps/writeLetter.php";
  xhr.open("POST", url, true);
  //--- 送出資料
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  let data_info = `memNo=10&letPower=1&matPatNo=${letterPattern}&matPosNo=${userStamp}&letTitle=${letterTitle}&letContent=${letterContant}&imgUrl=${letterImg}&mesCount=0&letSort=${lettrtCat}&letStatus=0&letImgUrl=null`;
  //memNo=10 10要改成${變數} 此變數從session撈出目前登入的用戶number
  
  xhr.send(data_info);

}
