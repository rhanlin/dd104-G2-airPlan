function newAdminForm() {//新增後台管理員
    let admName = document.getElementById("admName").value;
    let admI = document.getElementById("admI").value;
    let admPsw = document.getElementById("admPsw").value;
    let admPswCheck = document.getElementById("admPsw").value;
    let xhr = new XMLHttpRequest();
    let newAdmin = `admName=${admName}&admI=${admI}&admPsw=${admPsw}`;
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        if (admin.admI) {
            location.reload();
        }
    }
    xhr.open("post", "phps/bg_newAdmin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    if (admName != '' && admI != '' && admPsw != '' && admPswCheck != '') {
        if (admPsw == admPswCheck) {
            xhr.send(newAdmin);
            alert('管理員新增完成');
        } else {
            alert('密碼確認與第一次輸入不同');
        }
    } else {
        alert('欄位不可空白');
    }
}

function patternWrap(managerMod, admNo, admName, admI, admPsw, admStatus, i) {//動態撈取管理者資料架構
    // console.log(data);
    if (admStatus == 0) {
        admStatus = '一般管理員'
    } else {
        admStatus = '最高管理員'
    }
    managerMod += `
    <tr>
        <td id="admNo${i}">${admNo}</td>
        <td><input id="admName${i}" type="text" value="${admName}" class="matNameCH form-control col-12"></td>
        <td><input id="admI${i}" type="text" value="${admI}" class="matNameCH form-control col-12"></td>
        <td><input id="admPsw${i}" type="text" value="${admPsw}" class="matNameCH form-control col-12"></td>
        <td id="admStatus${i}">${admStatus}</td>
        <td>
            <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button id="adminSave${i}" class="btn btn-block btn-outline-primary adminSave" type="button">儲存</button>
                <button id="adminDrop${i}" class="btn btn-block btn-outline-primary adminDrop" type="button">刪除</button>
            </div>
        </td>
    </tr>
        `
    return managerMod;
};

function adminUpdate(i) {//管理員資料修改儲存
    let admNo = document.getElementById("admNo" + i).innerText;
    let admName = document.getElementById("admName" + i).value;
    let admI = document.getElementById("admI" + i).value;
    let admPsw = document.getElementById("admPsw" + i).value;
    let xhr = new XMLHttpRequest();
    let adminSave = `admNo=${admNo}&admName=${admName}&admI=${admI}&admPsw=${admPsw}`;
    xhr.open("post", "phps/bg_adminUpdate.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(adminSave);
    alert('管理員資料修改成功');
}

function adminDrop(i) {//資料刪除
    let admNo = document.getElementById("admNo" + i).innerText;
    // let admName = document.getElementById("admName" + i).value;
    // let admI = document.getElementById("admI" + i).value;
    // let admPsw = document.getElementById("admPsw" + i).value;
    let xhr = new XMLHttpRequest();
    let adminSave = `admNo=${admNo}`;
    xhr.open("post", "phps/bg_adminDrop.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(adminSave);
    alert('已刪除該名管理員');
    location.reload();
}

function managerMod() {//動態生成管理者資料
    let xhr = new XMLHttpRequest();
    document.getElementById("con_manager").value = "manager";
    xhr.onload = function () {
        if (xhr.status == 200) {
            let managerModRow = JSON.parse(xhr.responseText);
            let managerMod = "";
            // prodModData(xhr.responseText);
            // console.log(xhr.responseText);
            for (i = 0; i < managerModRow.length; i++) {//動態新增管理者資料架構
                managerMod = patternWrap(
                    managerMod,
                    managerModRow[i].admNo,
                    managerModRow[i].admName,
                    managerModRow[i].admI,
                    managerModRow[i].admPsw,
                    managerModRow[i].admStatus,
                    i
                );
                $("#managerMod").html(managerMod);
            }
            for (i = 0; i < managerModRow.length; i++) {//動態註冊儲存按鈕
                document.getElementById('adminSave' + i).onclick = function (i) {
                    return function () {
                        adminUpdate(i);
                    }
                }(i)
            }
            for (i = 0; i < managerModRow.length; i++) {//動態註冊儲存按鈕
                document.getElementById('adminDrop' + i).onclick = function (i) {
                    return function () {
                        adminDrop(i);
                    }
                }(i)
            }
            document.getElementById('adminDrop5').style.display = 'none';
        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };
    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = "type=" + document.getElementById("con_manager").value;
    xhr.send(data_info);
};

function getSignInfo() {//依登入者權限開放添加管理者功能
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        document.getElementById('bg_logout').innerText = '登出';
        document.getElementById('adminUser').innerText = admin.admName;
        let adminDrop = document.querySelectorAll(".adminDrop");
        if (admin.admI) {
            // console.log("admin.admI", admin.admI);
            if (admin.admStatus == 0) {
                // console.log("admin.admStatus", admin.admStatus);
                // console.log("admin.admName", admin.admName);
                document.getElementById('addAdmin').style.display = "none";
                adminDrop.forEach(item => {//開啟登入燈箱
                    item.style.display = "none";
                })
            }
        }
    }
    xhr.open("get", "./phps/bg_getSignInfo.php", true);
    xhr.send(null);
}

window.addEventListener("load", function () {
    managerMod();
    getSignInfo();
    let adminDataBtn = document.getElementById('adminDataBtn');
    adminDataBtn.onclick = function () {
        newAdminForm();
    }
});

