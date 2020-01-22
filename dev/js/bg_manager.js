function managerMod() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_manager").value = "manager";
    xhr.onload = function () {

        if (xhr.status == 200) {
            let managerModRow = JSON.parse(xhr.responseText);
            let managerMod = "";
            // prodModData(xhr.responseText);
            // console.log(xhr.responseText);

            for (i = 0; i < managerModRow.length; i++) {
                managerMod = patternWrap(
                    managerMod,
                    managerModRow[i].admNo,
                    managerModRow[i].admName,
                    managerModRow[i].admI,
                    managerModRow[i].admPsw,
                    managerModRow[i].admStatus,
                );
                $("#managerMod").html(managerMod);
            }

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


function patternWrap(managerMod, admNo, admName, admI, admPsw, admStatus) {
    // console.log(data);

    managerMod += `
    <tr>
        <td><input type="text" value="${admNo}" class="matNameCH form-control col-12"></td>
        <td><input type="text" value="${admName}" class="matNameCH form-control col-12"></td>
        <td><input type="text" value="${admI}" class="matNameCH form-control col-12"></td>
        <td><input type="text" value="${admPsw}" class="matNameCH form-control col-12"></td>
        <td><input type="text" value="${admStatus}" class="matNameCH form-control col-12"></td>
        <td>
            <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button id="adminSave${admNo}"  class="btn btn-block btn-outline-primary" type="button">儲存</button>
            </div>
        </td>
    </tr>
        `;
    return managerMod;
};



function newAdminForm() {
    let admName = document.getElementById("admName").value;
    let admI = document.getElementById("admI").value;
    let admPsw = document.getElementById("admPsw").value;
    let admPswCheck = document.getElementById("admPsw").value;
    let xhr = new XMLHttpRequest();
    let newAdmin = `admName=${admName}&admI=${admI}&admPsw=${admPsw}`;
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        if(admin.admI){
            location.reload();
        }
    }
    xhr.open("post", "phps/bg_newAdmin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    if(admName!='' && admI!='' && admPsw!='' && admPswCheck!= ''){
        if(admPsw == admPswCheck){
            xhr.send(newAdmin);
            alert('管理員新增完成');
        }else{
            alert('密碼確認與第一次輸入不同');
        }
    }else{
        alert('欄位不可空白');
    }
}            



function getSignInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        if (admin.admI) {
            console.log("admin.admI",admin.admI);
            if(admin.admStatus == 0){
                document.getElementById('addAdmin').style.display = "none";
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
    adminDataBtn.onclick = function(){
        newAdminForm();
    }
    // function adminChange(){
    //     alert("test");
    // }
    
    // let adminSave2 = document.getElementById('adminSave');
    // adminSave2.onclick = function(){
    //     adminChange();
    // }
});

