function showWrite() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_write").value = "write";
    xhr.onload = function () {
        if (xhr.status == 200) {
            writeData(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };

    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info = "type=" + document.getElementById("con_write").value;
    xhr.send(data_info);
}

function writeData(str) {
    let data = JSON.parse(str);
    // document.getElementById("memNo").innerHTML=data[0].memNo;

    console.log(data);
    // var arr = new Array();
    for (j = 0; j < data.length; j++) {
        var tr = document.createElement('tr');
        for (i = 0; i < 9; i++) {
            var td = document.createElement('td');
            arr = [data[j].memNo, data[j].memName, data[j].letNo, data[j].letSort, data[j].letTitle, data[j].letContent, data[j].mesCount, data[j].letTime, data[j].letStatus];
            // console.log(td);
            td.innerHTML = arr[i];
            tr.appendChild(td);
            // console.log(tr.childNodes[i]);
            // console.log(tr.childNodes[i].innerHTML)
        };
        let writeInfo = document.getElementById("letterRecord");
        writeInfo.appendChild(tr);
    }
    // console.log(writeInfo);
    // console.log(arr);
}


window.addEventListener('load', showWrite);