function giveComment() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_giveComment").value = "giveComment";
    xhr.onload = function () {
        if (xhr.status == 200) {
            giveCommentData(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };

    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info = "type=" + document.getElementById("con_giveComment").value;
    xhr.send(data_info);
}

function giveCommentData(str) {
    let data = JSON.parse(str);
    // document.getElementById("memNo").innerHTML=data[0].memNo;

    console.log(data);
    // var arr = new Array();
    for (j = 0; j < data.length; j++) {
        var tr = document.createElement('tr');
        for (i = 0; i < 8; i++) {
            var td = document.createElement('td');
            arr = [data[j].msgLikeTime,data[j].msgLikeNo, data[j].meg_memNo, data[j].letNo, data[j].msgContent, data[j].like_memNo, data[j].memName, data[j].msgStatus];
            // console.log(td);
            td.innerHTML = arr[i];
            tr.appendChild(td);
            // console.log(tr.childNodes[i]);
            // console.log(tr.childNodes[i].innerHTML)
        };
        let giveCommentInfo = document.getElementById("giveComment_record");
        giveCommentInfo.appendChild(tr);
    }
    // console.log(writeInfo);
    // console.log(arr);
}


window.addEventListener('load', giveComment);