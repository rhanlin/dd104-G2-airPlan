function showMember() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_member").value = "member";
    xhr.onload = function () {
        if (xhr.status == 200) {
            memberData(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };

    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info = "type=" + document.getElementById("con_member").value;
    xhr.send(data_info);
}

function memberData(str) {
    let data = JSON.parse(str);
    // document.getElementById("memNo").innerHTML=data[0].memNo;

    console.log(data);
    // var arr = new Array();
    for (j = 0; j < data.length; j++) {
        var tr = document.createElement('tr');
        for (i = 0; i < 7; i++) {
            var td = document.createElement('td');
            arr = [data[j].memNo, data[j].memName, data[j].memPsw, data[j].memEmail, data[j].letCount, data[j].airCoin, data[j].intColor];
            // console.log(td);

            if(arr[6]==0){
                arr[6]="亮色";
            }else{
                arr[6]="暗色";
            }

            td.innerHTML = arr[i];
            tr.appendChild(td);
            // console.log(tr.childNodes[i]);
            // console.log(tr.childNodes[i].innerHTML)
        };
        let memberInfo = document.getElementById("memberInfo");
        memberInfo.appendChild(tr);
    }
    // console.log(arr);
    console.log(memberInfo);
}


window.addEventListener('load', showMember);