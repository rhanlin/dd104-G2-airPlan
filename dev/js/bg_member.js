arr = ['1', '波音33', '111666', 'i750307@iii.org.tw', '500', '50', '黃']
var tr = document.createElement('tr');
for (i = 0; i < 7; i++) {

    var td = document.createElement('td');
    // console.log(td);
    td.innerHTML = arr[i]
    tr.appendChild(td);
    // console.log(tr.childNodes[i]);
    // console.log(tr.childNodes[i].innerHTML)
};
let memberInfo=document.getElementById("memberInfo");
memberInfo.appendChild(tr);

console.log(memberInfo);



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
}


window.addEventListener('load', showMember);