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
        <td>${admNo}</td>
        <td>${admName}</td>
        <td>${admI}</td>
        <td>${admPsw}</td>
        <td>
            ${admStatus}
        </td>
        <td>
            <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button class="btn btn-block btn-outline-primary" type="button">編輯</button>
            </div>
        </td>
    </tr>
        `;
    return managerMod;
};

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
// window.addEventListener('load', managerMod,getSignInfo);

window.addEventListener("load", function () {
    managerMod();
    getSignInfo();
});