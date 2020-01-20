window.addEventListener("load", function () {
    document.getElementById("closebox").addEventListener("click", function () {
        document.getElementById("primaryModal").style = "display:none";
        clearBox();
    });
    document.getElementById("boxBtn").addEventListener("click", function () {
        bg_login();
        clearBox();
    });
});

function bg_login() {
    let xhr = new XMLHttpRequest();
    let id = document.getElementById("admId").value;
    let psw = document.getElementById("admPsw").value;
    xhr.onload = function () {
        if (xhr.status == 200) {
            sendLogin(xhr.responseText);
            console.log(11111)
        } else {
            alert(xhr.status, xhr.statusText);
        }
    }
    xhr.open("post", "./phps/bg_login.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    if (id != "" && psw != "") {
        let data_info = `admId=${id}&admPsw=${psw}`;
        xhr.send(data_info);
    } else {
        alert("請輸入您的帳號及密碼");
    }
}

function sendLogin(str) {
    console.log(22222)
    let xhr = new XMLHttpRequest();
    console.log(str)
    let data = JSON.parse(str);
    if (data.admId) {
        document.getElementById("primaryModal").style = "display:none";
        clearBox();
        alert("登入成功");
        console.log(33333)
    } else {
        alert("您輸入的帳號或密碼錯誤");
    }
}

function clearBox() {
    document.getElementById("admId").value = "";
    document.getElementById("admPsw").value = "";
}