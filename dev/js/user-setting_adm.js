//Vue
//會員資訊
Vue.component('memData', {
    template: `
        <div class="userSetting_memData">
            <table class="userSetting_memDataTable">
                <tr>
                    <td colspan="6"><img class="mempic" src="./img/chatroom/mark_1.png" alt="mempic"></td>
                </tr>
                <tr>
                    <td id="memNo">會員帳號:</td>
                    <td colspan="5">波音777-1</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td colspan="5">aaa@gmail.com<img id="showForm" class="emailSet" src="./img/user-setting/gear.svg" alt="robotB3"></td>
                </tr>
                <tr>
                    <td>Air幣:</td>
                    <td colspan="5">50</td>
                </tr>
                <tr>
                    <td>信紙:</td>
                    <td colspan="5">5</td>
                </tr>
            </table>
        </div>
    `,
});
Vue.component('airCoin', {
    template: `
        <div class="userSetting_airCoin">
            <table class="userSetting_airCoinTable">
                <thead >
                    <th><h4>時間</h4></th>
                    <th><h4>信件</h4></th>
                    <th><h4>打賞者</h4></th>
                </thead>
                <tbody id="aa">
                    <tr>
                        <td id="td1"></td>
                        <td id="td2"></td>
                        <td id="td3"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});
Vue.component('memcolor', {
    template: `
        <div class="userSetting_memcolor">
            <div class="memcolorBig">
                <img id="memcolorBigLarge" src="img/share/blue-paint-bigline.svg" alt="blackB">
            </div>
            <div class="memcolorSmall">
                <img src="img/share/blue-paint-bigline.svg" alt="blackB">
                <img src="img/share/yellow-paint-bigline.svg" alt="white">
            </div>
        </div>
    `,
});
new Vue({
    el: '#memKanban',
    data: {
        content: 'memData',
    },
    methods:{
    changeName(){
        axios
        .post('http://localhost/dev/js/letLike.php')
        .then((res) => {
            var arr = res.data;
            console.log(arr[0].letLikeTime);
            console.log(arr[0].letTitle);
            console.log(arr[0].likeMemNo);
            var text9=arr[0].letLikeTime;
            var text8=arr[0].letTitle;
            var text7=arr[0].likeMemNo;
            var td1=document.getElementById('td1');
            var td2=document.getElementById('td2');
            var td3=document.getElementById('td3');
            td1.innerHTML=text9;
            td2.innerHTML=text8;
            td3.innerHTML=text7;
            // td=document.createElement('td')
            // span=document.createElement('span')
            // span.innerHTML=arr[0].letLikeTime
            // td.appendChild(span)
            // console.log(span)
            // tr.appendChild(td)
            console.log(td1);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    },
    mounted(){
        this.changeName();
    }
});

// new Vue({
//     el: '#userSetting_airCoin',
//     data: {
//         howard:'測試',
//     },

// })

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
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
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

//    <?php 
//     $letterlikeRow = $letterlike -> fetch_assoc()){
//     echo json_encode( $memRow);
//     ?>
//                 <tr>
//                     <td ><?=$letterlikeRow["letLikeTime"]?></td>
//                     <td><?=$letterlikeRow["letTitle"]?></td>
//                     <td><?=$letterlikeRow["likeMemNo"]?></td>
//                 </tr>
//                 <?php	
//                 }
//                 ?>

//JS
//會員資訊_外觀設定
function showLarge(e) {
    let memsmall = e.target;
    document.getElementById("memcolorBigLarge").src = memsmall.src;
};

let picture_small = document.querySelectorAll(".memcolorSmall img");
for (let i = 0; i < picture_small.length; i++) {
    picture_small[i].onclick = showLarge;
};



//會員資訊_會員資料修改燈箱
var setDataBg = document.getElementById("setDataBg");
var showForm = document.getElementById("showForm");
var closeForm = document.getElementById("closeForm");
showForm.onclick = function(){
    setDataBg.style.display = "block";
};
closeForm.onclick = function(){
    setDataBg.style.display = "none";
};


//會員資訊_頁籤樣式切換
var btnMemData = document.getElementById("btnMemData");
var btnAirCoin = document.getElementById("btnAirCoin");
var btnMemcolor = document.getElementById("btnMemcolor");
btnMemData.onclick = function(){
    btnMemData.style.backgroundImage = 'url("./img/share/red-note.svg")';
    btnAirCoin.style.backgroundImage = 'url("./img/share/blue-note.svg")';
    btnMemcolor.style.backgroundImage = 'url("./img/share/blue-note.svg")';
    btnMemData.style.color = 'white';
    btnAirCoin.style.color = 'black';
    btnMemcolor.style.color = 'black';
};
btnAirCoin.onclick = function(){
    btnMemData.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnAirCoin.style.backgroundImage = "url(./img/share/red-note.svg)";
    btnMemcolor.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnMemData.style.color = 'black';
    btnAirCoin.style.color = 'white';
    btnMemcolor.style.color = 'black';
};
btnMemcolor.onclick = function(){
    btnMemData.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnAirCoin.style.backgroundImage = "url(./img/share/blue-note.svg)";
    btnMemcolor.style.backgroundImage = "url(./img/share/red-note.svg)";
    btnMemData.style.color = 'black';
    btnAirCoin.style.color = 'black';
    btnMemcolor.style.color = 'white';
};

//系統資訊_頁籤樣式切換
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
