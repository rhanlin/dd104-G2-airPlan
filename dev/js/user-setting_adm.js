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
                    <p class="panel-body"><ul><li>1.選擇分類<br>紙飛機的意義由自己賦予，也許心情抒發，也許生活趣事，一切就由選擇分類開始吧。</li><br><li>2.寫下內容<br>獨樂樂不如眾樂樂，有什麼大家必須知道的事情，最勁爆的踢爆、直擊與新聞，在此盡覽無遺。</li><br><li>3.漆上彩繪<br>選擇要漆上的彩繪，彩繪樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>4.選擇郵戳<br>選擇屬於自己的郵戳，郵戳樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>了解這些流程後快到<a href="./write-letter.html">寫信頁面</a>寫一封信吧。</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post3">商城</h4>
                        </div>
                    </div>
                    <div id="post3" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post4">我的倉庫</h4>
                        </div>
                    </div>
                    <div id="post4" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
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
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
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
            <p>紙飛機對每個人有不同意義<br>也許思念、也許請訴<br>也許祝福、也許願望<br>不論翱翔或墜落<br>飛出手的紙飛機<br>如果能再次回到手裡<br>會是什麼模樣呢？</p>
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
        cover: "./img/user-developer/mike.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901173/"
    },
    {
        title: "宗翰",
        description: "&on",
        cover: "./img/user-developer/spencer.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901175/"
    },
    {
        title: "耀輝",
        description: "Snack Snake",
        cover: "./img/user-developer/allen.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901167/"
    },
    {
        title: "雅珺",
        description: "Powder Ski Resort",
        cover: "./img/user-developer/grace.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901164/1103demo/"
    },
    {
        title: "湘文",
        description: "Bonheur",
        cover: "./img/user-developer/sharon.png",
        src: "http://140.115.236.71/demo-personal/DD104/web/T1901158/"
    },
    {
        title: "恒祥",
        description: "岳世界",
        cover: "./img/user-developer/howard.png",
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
            // console.log(result);
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
function showMemColor(jsonStrC){//依intColor資料顯示介面顏色
    let member = JSON.parse(jsonStrC);
        if (member.memNo) {
            if(member.intColor==0){
                document.getElementById("intColor").style.backgroundColor = "rgba(255, 190, 0, .2)";
            }else{
                document.getElementById("intColor").style.backgroundColor = "rgba(0,120, 250, .2)";
            }
            document.getElementById("signInBg").style.display = "none";
            //location.reload();//登入資訊抓取方式2:從整頁面
        }else{
            alert("尚未登入");
    }
}
//////////////////寫入0到intcolor資料欄位
function sendColor0Form(){
    let xhr = new XMLHttpRequest();
    let memNo = document.getElementById('cavMemberN').innerText.toString().substring(6);
    let intColor = '0';
    console.log( "========77",memNo);
    xhr.onload = function () {//使用ajax方法到Server端資料
        showMemColor(xhr.responseText);
    }
    xhr.open("post", "./phps/userSetting_changeIntColor.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    
    let data_infoColor = `intColor=${intColor}&memNo=${memNo}`;
    console.log("intColor:",intColor);
    xhr.send(data_infoColor);
}
//////////////////寫入1到intcolor資料欄位
function sendColor1Form(){
    let xhr = new XMLHttpRequest();
    let memNo = document.getElementById('cavMemberN').innerText.toString().substring(6);
    let intColor = '1';
    console.log( "========77",memNo);
    xhr.onload = function () {//使用ajax方法到Server端資料
        showMemColor(xhr.responseText);
    }
    xhr.open("post", "./phps/userSetting_changeIntColor.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    
    let data_infoColor = `intColor=${intColor}&memNo=${memNo}`;
    console.log("intColor:",intColor);
    xhr.send(data_infoColor);
}
let intColorBtn0 =document.getElementById("intColorBtn0");
let intColorBtn1 =document.getElementById("intColorBtn1");
intColorBtn0.onclick = function(){
    let signIns = document.getElementById('cavMemberN').innerText;
    if(signIns == '會員:訪客身份-1'){
        alert('訪客外觀無法修改');
    }else{
        if(signIns!=0 && signIns!='會員:訪客身份-1'){
            sendColor0Form();
        }
        else{
            alert('尚未登入');
        }
    }
};
intColorBtn1.onclick = function(){
    let signIns = document.getElementById('cavMemberN').innerText;
    if(signIns == '會員:訪客身份-1'){
        alert('訪客外觀無法修改');
    }else{
        if(signIns!=0 && signIns!='會員:訪客身份-1'){
            sendColor1Form();
        }
        else{
            alert('尚未登入');
        }
    }
};


//////////////////會員資訊
//////////////////清除密碼修改表單內容
function cancelSetDataForm() {
    document.getElementById("setPassword").value = "";
    document.getElementById("setPasswordCheck").value = "";
}

//////////////////密碼修改表單發送
function sendsetDataForm() {
    let memNo = document.getElementById("cavMemberN").innerText.toString().substring(6);
    let setPassword = document.getElementById("setPassword").value;
    let setPasswordCheck = document.getElementById("setPasswordCheck").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {//使用ajax方法到Server端資料
        let pswRowCheck = JSON.parse(xhr.responseText);
        if(pswRowCheck.memPsw){
            document.getElementById('setDataBg').style.display = 'none';
            document.getElementById('setPassword').placeholder = pswRowCheck.memPsw;
            document.getElementById('setPasswordCheck').placeholder = pswRowCheck.memPsw;
            cancelSetDataForm();
            alert('密碼更新完成');
        }
    }
    xhr.open("post", "phps/userSetting_setData.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    console.log(memNo);
    console.log(setPassword);
    if (setPassword != '' && setPasswordCheck != '') {
        if(setPassword.length >= 8){
            if(!setPassword.match(/[^a-zA-Z0-9]+/)){
                if(setPassword == setPasswordCheck){
                    let data_info = `memNo=${memNo}&memPsw=${setPassword}`;
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
    }else {
        alert('欄位不可空白');
    }
}
//////////////////密碼修改表單發送鍵
let setDataBtn = document.getElementById('setDataBtn');
setDataBtn.onclick = function(){
    sendsetDataForm();
};

//////////////////密碼修改燈箱
var setDataBg = document.getElementById("setDataBg");
var showForm = document.getElementById("showForm");
var closeForm = document.getElementById("closeForm");
showForm.onclick = function(){
    let signIns = document.getElementById('cavMemberN').innerText;
    console.log("----------ggg",signIns);
    if(signIns == '會員:訪客身份-1'){
        alert('訪客密碼無法修改');
    }else{
        if(signIns!=0 && signIns!='會員:訪客身份-1'){
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



//////////////////信件打賞紀錄
function getLetLike(){
    let letLikememNo = document.getElementById('cavMemberH').innerText.toString().substring(6);
    console.log('airCoinmemNo:',letLikememNo);
    axios
    .get('phps/userSetting_letLike.php?memNo=' + letLikememNo)
    .then((res) => {
        let letLikeRow = res.data;
        let letLike = "";
        console.log(letLikeRow);
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
function getmsgLike(){
    let msgLikememNo = document.getElementById('cavMemberH').innerText.toString().substring(6);
    console.log('msgLikememNo:',msgLikememNo);
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


//////////////////顯示會員資料/密碼修改表單
function showMemData(json){
    let memdata = JSON.parse(json);
    document.getElementById('memNo').innerText = memdata.memName+'-'+memdata.memNo;
    document.getElementById('memEmail').innerText = memdata.memEmail;
    document.getElementById('letCount').innerText = memdata.letCount;
    document.getElementById('airCoin').innerText = memdata.airCoin;
    document.getElementById('mempic').src = memdata.matPosUrl;
    document.getElementById('setMempic').src = memdata.matPosUrl;
    document.getElementById('setMemNo_name').placeholder = memdata.memName+'-'+memdata.memNo;
    document.getElementById('setPassword').placeholder = memdata.memPsw;
    document.getElementById('setPasswordCheck').placeholder = memdata.memPsw;
}

//////////////////取得登入資訊 依登入狀況呈現登入資訊
function getUsersettingInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let member = JSON.parse(xhr.responseText);
        // console.log("usersetting_session資料_memNo:",member.memNo);
        // console.log("usersetting_session資料_memName:",member.memName);
        // console.log("usersetting_session資料_memEmail:",member.memEmail);
        // console.log("usersetting_session資料_letCount:",member.letCount);
        // console.log("usersetting_session資料_airCoin:",member.airCoin);
        // console.log("usersetting_session資料_intColor:",member.intColor);
        // console.log("usersetting_session資料_matPosUrl:",member.matPosUrl);
        // console.log("usersetting_session資料_memPsw:",member.memPsw);
        if (member.memNo) {
            showMemData(xhr.responseText);
            getLetLike();//信件打賞紀錄撈取
            getmsgLike();//留言打賞紀錄撈取
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