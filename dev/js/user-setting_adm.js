//Vue


//系統資訊
Vue.component('manu', {
    template: `
        <div class = "userSetting_manu">  
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post1">寫信</h4>
                        </div>
                    </div>
                    <div id="post1" class="panel-collapse collapse in">
                        <p class="panel-body"><ul><li>1.選擇分類<br>紙飛機的意義由自己賦予，也許心情抒發，也許生活趣事，一切就由選擇分類開始吧。</li><br><li>2.寫下內容<br>獨樂樂不如眾樂樂，有什麼大家必須知道的事情，最勁爆的踢爆、直擊與新聞，在此盡覽無遺。</li><br><li>3.漆上彩繪<br>選擇要漆上的彩繪，彩繪樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>4.選擇郵戳<br>選擇屬於自己的郵戳，郵戳樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>了解這些流程後快到<a href="./write-letter.html">寫信頁面</a>寫一封信吧。</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post2">撈信</h4>
                        </div>
                    </div>
                    <div id="post2" class="panel-collapse collapse">
                    <p class="panel-body"><ul><li>1.撈一封新聞或撈一封信<br>揮下網子撈一封新聞或撈一封信來閱讀</li><br><li>2.蓋郵戳<br>蓋下郵戳後打開信件</li><br><li>3.打賞或檢舉信件及留言<br>閱讀信件或留言內容後可以打賞或檢舉信件及留言</li><br><li>4.留言<br>留下自己對信件的看法</li><br><li>5.蓋郵戳<br>再次蓋上郵戳，自己的印記代表閱讀過</li><br><li>6.折飛機<br>按照指示信紙折成紙飛機</li><br><li>7.射飛機<br>點按紙飛機將飛機射回天空中</li><br><li>8.選擇下一步<br>選擇<a href="./write-letter.html">寫信頁面</a>寫一封信、<a href="catch-letter.html">再撈一封信</a>或到<a href="cave.html">我的倉庫</a>查看信件</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post3">商城</h4>
                        </div>
                    </div>
                    <div id="post3" class="panel-collapse collapse">
                    <p class="panel-body"><ul><li>1.選購素材<br>選擇郵戳、圖案、工具的頁籤選購商品，點選後按下購買按鈕即可扣Air幣購買素材。</li><br><li>2.客製圖案及郵戳<br>選擇自己的素材到畫板上即可開始客製編輯素材，也可購買畫筆及橡皮擦等工具來輔助及增添客製化趣味</li><br><li>3.點選下載紐<br>客製完成的圖案及郵戳就會立即送到<a href="cave.html">我的倉庫</a>及下載到使用者的電腦裡囉。</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post4">我的倉庫</h4>
                        </div>
                    </div>
                    <div id="post4" class="panel-collapse collapse">
                    <p class="panel-body"><ul><li>1.我的信件<br>點選我的信件按鈕即可查看我寫過的信，點選信件右邊則會顯示信件內容及留言。可針對信件和留言做打賞或檢舉動作</li><br><li>2.撈的信件<br>點選撈的信件按鈕即可查看我寫過的信，點選信件右邊則會顯示信件內容及留言。可針對信件和留言做打賞或檢舉動作</li><br><li>3.更換圖案<br>點選圖案頁籤，選擇一個圖案按下更換圖案即可設定為預設圖案。如果想再製作新的圖案可點選<a href="./shop.html">圖案+</a>跳轉到商城進行客製。</li><br><li>4.更換郵戳<br>點選郵戳頁籤，選擇一個郵戳按下更換郵戳即可設定為預設郵戳，而預設郵戳即是自己的大頭貼(聊天頁面、用戶設定頁面顯示)。如果想再製作新的郵戳可點選<a href="./shop.html">郵戳+</a>跳轉到商城進行客製</li><br><li>5.我的物品<br>我的物品區可瀏覽自己所有的素材及DIY工具。如果想再添購新的素材或工具可點選<a href="./shop.html">商城+</a>跳轉到商城進行購買</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post5">聊天室</h4>
                        </div>
                    </div>
                    <div id="post5" class="panel-collapse collapse">
                        <p class="panel-body">首先要先有朋友，可以透過撈信並分享您對信件的想法與其他人交流藉此廣結善緣。</p>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post6">用戶設定</h4>
                        </div>
                    </div>
                    <div id="post6" class="panel-collapse collapse">
                    <p class="panel-body"><ul><li>1.查看會員資訊<br>點選會員資料頁籤即可查看會員帳號、email、剩餘信紙及Air幣</li><br><li>2.修改密碼<br>點選修改密碼欄位旁的小齒輪，輸入舊的密碼後再輸入新的密碼及密碼確認，最後點選按扭送出。</li><br><li>3.更換郵戳<br>點選更換郵戳旁的小齒輪，頁面跳轉到<a href="cave.html">我的倉庫</a>的更換郵戳處後即可進行更換郵戳。</li><br><li>4.打賞紀錄<br>點選打賞紀錄的頁籤後即可查閱自己寫過信件的打賞紀錄，點按箭頭按鈕則可切換至留言打賞紀錄查閱自己留過言的打賞紀錄。</li><br><li>5.更換選單樣式<br>點選選單樣式的頁籤後即可選擇切換選單樣式紐。</li></ul></p><br>
                    </div>
                </div>
            </div>
        </div> 
     `,
});
Vue.component('ver', {
    template: `
    
        <div class="userSetting_ver">
            <h4>版本</h4>
            <p>1.0.0</p>
            <h4>版本內容</h4>
            <p>天空裡飄著凝重的氣息，在忙碌的社會裡，已經沒有多餘的時間能夠交流情感，只能將來不及說或說不出⼝的⼼情堆砌在心裡。這個不斷飛翔的世界中，可以所有情緒包裹成紙⾶機拋向天際，讓象徵⾃由的紙飛機飄盪在宇宙空間之中，帶領著世界飛向更親近的未來。 
            </p>
        </div>
            
       
     `,
});
new Vue({
    el: '#sysKanban',
    data: {
        content: 'manu',
    }
});

//開發人員
var works = [
    {
        title: "峻瑜",
        description: "Radara",
        cover: "./img/user-developer/mike2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901173/"
    },
    {
        title: "宗翰",
        description: "&on",
        cover: "./img/user-developer/spencer2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901175/"
    },
    {
        title: "耀輝",
        description: "Snack Snake",
        cover: "./img/user-developer/allen2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901167/"
    },
    {
        title: "雅珺",
        description: "Powder",
        cover: "./img/user-developer/grace2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901164/1103demo/"
    },
    {
        title: "湘文",
        description: "Bonheur",
        cover: "./img/user-developer/sharon2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901158/"
    },
    {
        title: "恒祥",
        description: "岳世界",
        cover: "./img/user-developer/howard2.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901163/"
    }
];

new Vue({
    el: "#app",
    data: {
        now_index: 0,
        works: works,
        span: 962
    },
    computed: {
        computed_left() {
            var result = {
                left: -this.now_index * this.span + "px"
            };
            return result;
        }
    },
    methods: {
        delta(d) {
            this.now_index = (this.now_index + d + this.works.length) % this.works.length;
        },
        bg_css(url) {
            return "background-image:url(" + url + ")";
        }
    }
});


//////////////////以上為Vue//////////////////
//////////////////以下為JS//////////////////

//////////////////會員資訊_頁籤樣式切換
var btnMemData = document.getElementById("btnMemData");
var btnAirCoin = document.getElementById("btnAirCoin");
var btnMemcolor = document.getElementById("btnMemcolor");
var userSetting_memData = document.getElementById('userSetting_memData');
var userSetting_airCoin = document.getElementById('userSetting_airCoin');
var userSetting_memcolor = document.getElementById('userSetting_memcolor');
btnMemData.onclick = function(){
    btnMemData.style.backgroundImage = 'url("./img/share/red-note.svg")';
    btnAirCoin.style.backgroundImage = 'url("./img/share/blue-note.svg")';
    btnMemcolor.style.backgroundImage = 'url("./img/share/blue-note.svg")';
    btnMemData.style.color = 'white';
    btnAirCoin.style.color = 'black';
    btnMemcolor.style.color = 'black';
    userSetting_memData.style.display = 'block' ;
    userSetting_airCoin.style.display = 'none';
    userSetting_memcolor.style.display = 'none';
};
btnAirCoin.onclick = function(){
    btnMemData.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnAirCoin.style.backgroundImage = "url(./img/share/red-note.svg)";
    btnMemcolor.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnMemData.style.color = 'black';
    btnAirCoin.style.color = 'white';
    btnMemcolor.style.color = 'black';
    userSetting_memData.style.display = 'none' ;
    userSetting_airCoin.style.display = 'block';
    userSetting_memcolor.style.display = 'none';
};
btnMemcolor.onclick = function(){
    btnMemData.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnAirCoin.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnMemcolor.style.backgroundImage = "url(./img/share/red-note.svg)";
    btnMemData.style.color = 'black';
    btnAirCoin.style.color = 'black';
    btnMemcolor.style.color = 'white';
    userSetting_memData.style.display = 'none' ;
    userSetting_airCoin.style.display = 'none';
    userSetting_memcolor.style.display = 'block';
};

//////////////////系統資訊_頁籤樣式切換
var btnMemData = document.getElementById("btnMemData");
var btnAirCoin = document.getElementById("btnAirCoin");
btnManu.onclick = function(){
    btnManu.style.backgroundImage = 'url("./img/share/red-note.svg")';
    btnVar.style.backgroundImage = 'url("./img/share/blue-note.svg")';
    btnManu.style.color = 'white';
    btnVar.style.color = 'black';
};
btnVar.onclick = function(){
    btnManu.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnVar.style.backgroundImage = "url(./img/share/red-note.svg)";
    btnManu.style.color = 'black';
    btnVar.style.color = 'white';
};


//////////////////外觀設定
//////////////////依intcolor資料呈現介面顏色
function showMemColor(json){//依intColor資料顯示介面顏色
    let member = JSON.parse(json);
        if (member.memNo) {
            if(member.intColor==0){
                document.getElementById("intColor").style.backgroundColor = "rgba(255, 190, 0, .2)";
                $("#intColorBtn0").addClass("on");
                $("#intColorBtn1").removeClass("on");
                alert('外觀顏色已更換');
            }else{
                document.getElementById("intColor").style.backgroundColor = "rgba(0,120, 250, .2)";
                $("#intColorBtn1").addClass("on");
                $("#intColorBtn0").removeClass("on");
                alert('外觀顏色已更換');
            }
            document.getElementById("signInBg").style.display = "none";
        }else{
            alert("尚未登入");
    }
}
//////////////////寫入0到intcolor資料欄位
function sendColor0Form(json){
    let memdata = JSON.parse(json);
    let memNo = memdata.memNo;
    let memName = memdata.memName;
    let intColor = '0';
    let xhr = new XMLHttpRequest();
    let data_infoColor = `intColor=${intColor}&memNo=${memNo}`;
    // console.log(memName);
    xhr.onload = function () {
        showMemColor(xhr.responseText);
    }
    xhr.open("post", "./phps/userSetting_changeIntColor.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // console.log("intColor:",intColor);
    if(memName == '訪客'){
        alert('訪客外觀無法修改');
    }else{
        if(memNo !=0 && memName!='訪客'){
            xhr.send(data_infoColor);
        }
        else{
            alert('尚未登入');
        }
    }
}
//////////////////寫入1到intcolor資料欄位
function sendColor1Form(json){
    let memdata = JSON.parse(json);
    let memNo = memdata.memNo;
    let memName = memdata.memName;
    let intColor = '1';
    let xhr = new XMLHttpRequest();
    let data_infoColor = `intColor=${intColor}&memNo=${memNo}`;
    // console.log(memName);
    xhr.onload = function () {
        showMemColor(xhr.responseText);
    }
    xhr.open("post", "./phps/userSetting_changeIntColor.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // console.log("intColor:",intColor);
    if(memName == '訪客'){
        alert('訪客外觀無法修改');
    }else{
        if(memNo !=0 && memName!='訪客'){
            xhr.send(data_infoColor);
        }
        else{
            alert('尚未登入');
        }
    }
}


//////////////////信件打賞紀錄
function getLetLike(json){
    let memdata = JSON.parse(json);
    let letLikememNo = memdata.memNo;
    // console.log('airCoinmemNo:',letLikememNo);
    axios
    .get('phps/userSetting_letLike.php?memNo=' + letLikememNo)
    .then((res) => {
        let letLikeRow = res.data;
        let letLike = "";
        // console.log(letLikeRow);
        for(i=0;i<letLikeRow.length;i++){
            letLike = letterLike(
                letLike,
                letLikeRow[i].letLikeTime,
                letLikeRow[i].letTitle,
                letLikeRow[i].memName,
                letLikeRow[i].memNo
            );
        }
        $("#letLike").html(letLike);
        function letterLike(letLike,letLikeTime,letTitle,memName,memNo){
            letLike+=`
                <tr>
                    <td>${letLikeTime}</td>
                    <td>${letTitle}</td>
                    <td>${memName}-${memNo}</td>
                </tr>
            `;
            return letLike;
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

//////////////////留言打賞紀錄
function getmsgLike(json){
    let memdata = JSON.parse(json);
    let msgLikememNo = memdata.memNo;
    // console.log('msgLikememNo:',msgLikememNo);
    axios
    .get('phps/userSetting_msgLike.php?memNo=' + msgLikememNo)
    .then((res) => {
        let msgLikeRow = res.data;
        let msgLike = "";
        for(i=0;i<msgLikeRow.length;i++){
            msgLike = messageLike(
                msgLike,
                msgLikeRow[i].msgLikeTime,
                msgLikeRow[i].msgContent,
                msgLikeRow[i].memName,
                msgLikeRow[i].memNo
            );
        }
        $("#msgLike").html(msgLike);
        function messageLike(msgLike,msgLikeTime,msgContent,memName,memNo){
            msgLike+=`
                <tr>
                    <td>${msgLikeTime}</td>
                    <td>${msgContent}</td>
                    <td>${memName}-${memNo}</td>
                </tr>
            `;
            return msgLike;
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

//////////////////打賞紀錄頁籤
let airCoinBtnL = document.getElementById('airCoinBtnL');
let airCoinBtnR = document.getElementById('airCoinBtnR');
airCoinBtnL.onclick = function(){
    document.getElementById('airCoinTableMsg').style.display = 'none'
    document.getElementById('airCoinTableLet').style.display = 'block'
};
airCoinBtnR.onclick = function(){
    document.getElementById('airCoinTableLet').style.display = 'none'
    document.getElementById('airCoinTableMsg').style.display = 'block'
};

//////////////////會員資訊
//////////////////清除密碼修改表單內容
function cancelSetDataForm() {
    document.getElementById("setPasswordOld").value = "";
    document.getElementById("setPassword").value = "";
    document.getElementById("setPasswordCheck").value = "";
}
//////////////////密碼修改表單發送
function sendsetDataForm(json) {
    let memdata = JSON.parse(json);
    let memNo = memdata.memNo;
    let memPswOld = memdata.memPsw;
    let setPasswordOld = document.getElementById("setPasswordOld").value;
    let setPassword = document.getElementById("setPassword").value;
    let setPasswordCheck = document.getElementById("setPasswordCheck").value;
    let xhr = new XMLHttpRequest();
    let data_info = `memNo=${memNo}&memPsw=${setPassword}`;
    xhr.onload = function () {
        let pswRowCheck = JSON.parse(xhr.responseText);
        if(pswRowCheck.memPsw){
            document.getElementById('setDataBg').style.display = 'none';
            // document.getElementById('setPassword').placeholder = pswRowCheck.memPsw;
            // document.getElementById('setPasswordCheck').placeholder = pswRowCheck.memPsw;
            cancelSetDataForm();
            alert('密碼更新完成');
        }
    }
    xhr.open("post", "phps/userSetting_setData.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // console.log(memNo);
    // console.log(setPassword);
    if (setPasswordOld != '' && setPassword != '' && setPasswordCheck != '') {
        if(setPasswordOld == memPswOld){
            if(setPassword.length >= 8){
                if(!setPassword.match(/[^a-zA-Z0-9]+/)){
                    if(setPassword == setPasswordCheck){
                        xhr.send(data_info);
                    }else{
                        alert('密碼確認與第一次輸入不同');
                    }
                }else{
                    alert('密碼須為英文大小寫或數字');
                } 
            }else{
                alert('密碼長度需為8-12');
            }
        }else{
            alert('舊密碼輸入錯誤');
        }
    }else {
        alert('欄位不可空白');
    }
}
//////////////////密碼修改燈箱
let setDataBg = document.getElementById("setDataBg");
let showForm = document.getElementById("showForm");
let closeForm = document.getElementById("closeForm");
showForm.onclick = function(){
    let signIns = document.getElementById('cavMemberN').innerText;
    if(signIns == '會員:訪客-1'){
        alert('訪客密碼無法修改');
    }else{
        if(signIns!=0 && signIns!='會員:訪客-1'){
            setDataBg.style.display = "block";
        }
        else{
            alert('尚未登入');
        }
    }
};
closeForm.onclick = function(){
    cancelSetDataForm()
    setDataBg.style.display = "none";
};

//////////////////顯示會員資料/密碼修改表單
function showMemData(json){
    let memdata = JSON.parse(json);
    document.getElementById('memNo').innerText = memdata.memName+'-'+memdata.memNo;
    document.getElementById('memEmail').innerText = memdata.memEmail;
    document.getElementById('letCount').innerText = memdata.letCount;
    document.getElementById('airCoin').innerText = memdata.airCoin;
    document.getElementById('mempic').src = memdata.matPosUrl;
    document.getElementById('setMempic').src = memdata.matPosUrl;
    // document.getElementById('memName').innerText = memdata.memName+'-'+memdata.memNo;
    //document.getElementById('setPasswordOld').placeholder = memdata.memPsw;//////////////////////
    // document.getElementById('setPassword').placeholder = "請輸入新密碼";
    // document.getElementById('setPasswordCheck').placeholder = "請再次輸入新密碼";
    if(memdata.intColor==0){
        $("#intColorBtn0").addClass("on");
    }else{
        $("#intColorBtn1").addClass("on");
    }
}

//////////////////跳轉業面至我的倉庫更換郵戳
// function posChangeLink(){
//     window.location.href="cave.html"
//     $(".smooth").zxxAnchor({ anchortag: "cave.html"});
// }

//////////////////取得登入資訊 依登入狀況呈現登入資訊
function getUsersettingInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let member = JSON.parse(xhr.responseText);
        if (member.memNo) {
            showMemData(xhr.responseText);//show會員基本資料
            getLetLike(xhr.responseText);//信件打賞紀錄撈取
            getmsgLike(xhr.responseText);//留言打賞紀錄撈取
            ///////////////////密碼修改
            let setDataBtn = document.getElementById('setDataBtn');
            setDataBtn.onclick = function(){
                sendsetDataForm(xhr.responseText);
            };
            /////////////////外觀設定
            let intColorBtn0 =document.getElementById("intColorBtn0");
            intColorBtn0.onclick = function(){//外觀設定黃色
                sendColor0Form(xhr.responseText);
            };
            let intColorBtn1 =document.getElementById("intColorBtn1");
            intColorBtn1.onclick = function(){//外觀設定藍色
                sendColor1Form(xhr.responseText);
            };
        }else{
            intColorBtn0.onclick = function(){//尚未當入外觀設定黃色
                alert('尚未登入');
            };
            intColorBtn1.onclick = function(){//尚未當入外觀設定藍色
                alert('尚未登入');
            };
        }
    }
    xhr.open("get", "./phps/nav_getSignInInfo.php", true);
    xhr.send(null);
}

window.addEventListener("load", function () {
    getUsersettingInfo();
});
// window.addEventListener('load', function () {
//     setTimeout(changeName(), 500);
// }, false);