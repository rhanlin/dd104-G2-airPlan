function giveArticle() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_giveArticle").value = "giveArticle";
    xhr.onload = function () {
        if (xhr.status == 200) {
            giveArticleData(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };

    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info = "type=" + document.getElementById("con_giveArticle").value;
    xhr.send(data_info);
}

function giveArticleData(str) {
    let data = JSON.parse(str);
    // document.getElementById("memNo").innerHTML=data[0].memNo;

    console.log(data);
    // var arr = new Array();
    for (j = 0; j < data.length; j++) {
        var tr = document.createElement('tr');
        for (i = 0; i < 9; i++) {
            var td = document.createElement('td');
            arr = [data[j].letLikeTime,data[j].letLikeNo, data[j].let_memNo, data[j].letNo, data[j].letTitle, data[j].letContent, data[j].like_memNo, data[j].mem_memName, data[j].letStatus];
            // console.log(td);

            if(arr[8]==0){
                arr[8]="未下架";
            }else{
                arr[8]="已下架";
            }

            td.innerHTML = arr[i];
            tr.appendChild(td);
            // console.log(tr.childNodes[i]);
            // console.log(tr.childNodes[i].innerHTML)
        };
        let giveArticleInfo = document.getElementById("giveArticle_record");
        giveArticleInfo.appendChild(tr);
    }
    // console.log(writeInfo);
    // console.log(arr);
}


// window.addEventListener('load', giveArticle);

function getSignInfo() {//依登入者權限開放添加管理者功能
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        document.getElementById('bg_logout').innerText = '登出';
        document.getElementById('adminUser').innerText = admin.admName;
    }
    xhr.open("get", "./phps/bg_getSignInfo.php", true);
    xhr.send(null);
}

window.addEventListener("load", function () {
    getSignInfo();
    giveArticle();
});