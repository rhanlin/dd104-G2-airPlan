Vue.component('memData', {
    template: `
        <div class="userSetting_memData">
            <table class="userSetting_memDataTable">
                <tr>
                    <td colspan="2"><img class="mempic" src="../img/chatroom/mark_1.png" alt="mempic"></td>
                </tr>
                <tr>
                    <td>會員帳號 :</td>
                    <td>波音777-1</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>aaa@gmail.com</td>
                </tr>
                <tr>
                    <td>Air幣 :</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>信紙</td>
                    <td>5</td>
                </tr>
            </table>
        </div>
    `,
});
Vue.component('airCoin', {
    template: `
        <div class="userSetting_airCoin">
            <table class="userSetting_airCoinTable">
                <tr>
                    <td>時間</td>
                    <td>信件</td>
                    <td>打賞者</td>
                </tr>
                <tr>
                    <td>2019/12/18 12:00</td>
                    <td>被遺忘的外套</td>
                    <td>不怕冷的小樺</td>
                </tr>
                <tr>
                    <td>2019/12/15 18:35</td>
                    <td>百岳烏拉拉</td>
                    <td>亂爬阿祥</td>
                </tr>
                <tr>
                    <td>2019/12/14 05:45</td>
                    <td>大零食家</td>
                    <td>洋芋片咬輝哥</td>
                </tr>
                <tr>
                    <td>2019/12/10 05:46</td>
                    <td>青鳥傳情</td>
                    <td>香菇姑姑咕咕咕</td>
                </tr>
                <tr>
                    <td>2019/12/09 05:46</td>
                    <td>&on旅社</td>
                    <td>咖啡翰</td>
                </tr>
                <tr>
                    <td>2019/12/07 08:46</td>
                    <td>睡眠很重要</td>
                    <td>早起的邱哥</td>
                </tr>
            </table>
        </div>
    `,
});
Vue.component('memcolor', {
    template: `
        <div class="userSetting_memcolor">
            <div class="memcolorBig">
                <img src="../img/share/blue-paint-bigline.svg" alt="blackB">
            </div>
            <div class="memcolorSmall">
                <div class="memcolorBlack">
                    <img src="../img/share/blue-paint-bigline.svg" alt="black">
                    <h3>黑色</h3>
                    
                </div>
                <div class="memcolorWhite">
                    <img src="../img/share/yellow-paint-bigline.svg" alt="white">
                    <h3>白色</h3>
                    
                </div>
            </div>
        </div>
    `,
});
new Vue({
    el: '#memKanban',
    data: {
        content: 'memData',
    },
});

Vue.component('manu', {
    template: `
        <div class="userSetting_manu">
            <div class="userSetting_item">
                <h3>會員</h3>
            </div>
            <div class="userSetting_item">
                <h3>寫信</h3>
            </div>
            <div class="userSetting_item">
                <h3>撈信</h3>
            </div>
            <div class="userSetting_item">
                <h3>倉庫</h3>
            </div>
            <div class="userSetting_item">
                <h3>商店</h3>
            </div>
            <div class="userSetting_item">
                <h3>聊天</h3>
            </div>
            <div class="userSetting_item">
                <h3>精華</h3>
            </div>
        </div>
     `,
});
Vue.component('ver', {
    template: `
    
        <div class="userSetting_ver">
            <h3>版本</h3>
            <p>1.0.0</p>
            <h3>版本內容</h3>
            <p>飛出手的紙飛機，若再次回到手上，會帶回什麼樣的感受呢?</p>
        </div>
            
       
     `,
});
new Vue({
    el: '#sysKanban',
    data: {
        content: 'manu',
    }
});


Vue.component('mike', {
    template: `
        <div class="userSetting_mike">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>峻瑜</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>UI視覺整合</li>
                    <li>首頁、精華區</li>
                    <li>後台管理員帳號管理</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901173/" target="_blank">
                        <span>Radara</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
                <img src="" alt="">
            </div>
        </div>
     `,
});
Vue.component('spencer', {
    template: `
        <div class="userSetting_spencer">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>宗翰</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>寫信、撈信</li>
                    <li>前台網站整合</li>
                    <li>Git版本控管</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901175/" target="_blank">
                        <span>&on</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
            </div>
        </div>
     `,
});
Vue.component('allen', {
    template: `
        <div class="userSetting_allen">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>耀輝</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>我的倉庫</li>
                    <li>明信片紀錄</li>
                    <li>後台審核檢舉</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901167/" target="_blank">
                        <span>Snack Snake</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
            </div>
        </div>
     `,
});
Vue.component('grace', {
    template: `
        <div class="userSetting_grace">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>雅珺</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>購物商品</li>
                    <li>製作客製化商品</li>
                    <li>後台商品管理</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901164/1103demo/" target="_blank">
                        <span>Powder Ski Resort</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
            </div>
        </div>
     `,
});
Vue.component('sharon', {
    template: `
        <div class="userSetting_sharon">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>湘文</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>即時聊天</li>
                    <li>邀約提醒</li>
                    <li>後台網站整合</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901158/" target="_blank">
                        <span>Bonheur</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
            </div>
        </div>
     `,
});
Vue.component('howard', {
    template: `
        <div class="userSetting_howard">
            <div class="userSetting_wrap">
                <div class="userSetting_Name">
                    <h3>開發者</h3>
                    <span>恒祥</span>
                </div>
                <ul class="userSetting_work">
                    <h3>分工項目</h3>
                    <li>用戶設定</li>
                    <li>後台會員管理</li>
                    <li>資料庫建置與控管</li>
                </ul>
                <div class="userSetting_portfolio">
                    <h3>作品</h3>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/" target="_blank">
                        <span>岳世界</span>
                    </a><br>
                    <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
                        <span>Air Plan</span>
                    </a>
                </div>
            </div>
        </div>
     `,
});
new Vue({
    el: '#admKanban',
    data: {
        content: 'mike',
    }
});