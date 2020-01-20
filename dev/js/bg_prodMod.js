// 直接根據網頁上 HTML 的表單元素取得表單資料
// 取得表單

let productForm = document.forms.namedItem('productForm');

// document.getElementById("con_prodAdd").value = "prodAdd";

productForm.addEventListener('submit', function (e) {
    post_items(event, productForm);
    // e.preventDefault;
});


// productForm.addEventListener('submit', function (event) {
//     post_items(event, productForm)
// })

// function prodAdd() {
//     let xhr = new XMLHttpRequest();
//     document.getElementById("con_prodAdd").value = "prodAdd";
//     post_items(event, productForm);

//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             let prodModRow = JSON.parse(xhr.responseText);
//             document.getElementById("con_prodAdd").value = "prodAdd";
//             // prodModData(xhr.responseText);
//             // console.log(xhr.responseText);

//         } else {
//             alert(xhr.status);
//         };
//     }
//     xhr.open("post", "./phps/background.php", true);
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

//     let data_info = "type=" + document.getElementById("con_prodAdd").value + "&pname=" + document.getElementById("pname").value + "&pnameCH=" + document.getElementById("pnameCH").value + "&pInfo=" + document.getElementById("pInfo").value + "&pchance=" + document.getElementById("pchance").value + "&price=" + document.getElementById("price").value + "&image=" + document.getElementById("upFile").value + "&pStatus=null" + "&pLsort=" + document.getElementById("pLsort").value+ "&pSsort=" + document.getElementById("pSsort").value;
//     console.log(data_info)
//     // xhr.send(data_info);
// }

function post_items(event, form) {
    // 取消表單預設提交
    event.preventDefault()

    let pname = document.getElementById('pname').value;
    let pLsort = document.getElementById('pLsort').value;
    let pnameCH = document.getElementById('pnameCH').value;
    // let pnameENG = document.getElementById('pnameENG').value;

    let file = $('.upFile')[0].files[0] // 單個檔案

    // let pImg = document.getElementById('pImg').src;
    let pInfo = document.getElementById('pInfo').value;
    let pchance = document.getElementById('pchance').value;
    let price = document.getElementById('price').value;
    let pStatus = document.getElementById('pStatus').value;
    let pSsort = document.getElementById('pSsort').value;

    // 建立一個新的 FormData 物件     一開始表單的資料是空的

    var formData = new FormData();

    // 如果有需要動態增加表單的資料，
    // 不想直接使用 HTML 的表單元素，
    // 可以用 append 把欄位灌進去表單中

    formData.append('pname', pname); // 增加欄位
    formData.append('pLsort', pLsort);
    formData.append('pnameCH', pnameCH);
    // formData.append('pnameENG', pnameENG);

    formData.append('file', file); // 檔案也可以透過 append 放進來

    // formData.append('pImg', pImg);
    formData.append('pInfo', pInfo);
    formData.append('pchance', pchance)
    formData.append('price', price);
    formData.append('pStatus', pStatus);
    formData.append('pSsort', pSsort);

    // document.getElementById("con_prodAdd").value = "prodAdd";


    $.ajax({
            url: './phps/bg_prodMod.php',
            type: 'POST',
            data: formData,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false
        })
        .done(function (data) {
            console.log(data);
        }).fail(function (data) {
            alert("Error: Ajax Failed.");
        }).always(function (data) {
            console.log(data)
            // always do the following, no matter if it fails or not
        })
}




function prodModify() {
    let xhr = new XMLHttpRequest();
    document.getElementById("con_prodMod").value = "prodMod";
    xhr.onload = function () {

        if (xhr.status == 200) {
            let prodModRow = JSON.parse(xhr.responseText);
            let prodMod = "";
            // prodModData(xhr.responseText);
            // console.log(xhr.responseText);

            for (i = prodModRow.length - 1; i > -1; i--) {
                prodMod = patternWrap(
                    prodMod,
                    prodModRow[i].prodNo,
                    prodModRow[i].prodLSort,
                    prodModRow[i].matNameCH,
                    prodModRow[i].prodName,
                    prodModRow[i].prodUrl,
                    prodModRow[i].matInfo,
                    prodModRow[i].prodPrice,
                    prodModRow[i].prodStatus,
                );
                $("#productModify").html(prodMod);
            }

        } else {
            alert(xhr.status);
        };
        // alert(xhr.responseText);
    };

    xhr.open("post", "./phps/background.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info = "type=" + document.getElementById("con_prodMod").value;
    xhr.send(data_info);
};


function patternWrap(prodMod, prodNo, prodLSort, matNameCH, prodName, prodUrl, matInfo, prodPrice, prodStatus) {
    // console.log(data);

    prodMod += `
    <tr>
    <td>
        ${prodNo}
    </td>
    <td>${prodLSort}</td>
    <td>${matNameCH}</td>
    <td>${prodName}</td>
    <td>
        <img width="100" src="${prodUrl}" alt="">
    </td>
    <td>
        ${matInfo}
    </td>
    <td>${prodPrice}</td>
    <td>
        ${prodUrl}
    </td>
    <td>
        ${prodStatus}
    </td>
    <td>
        <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button class="btn btn-block btn-outline-primary" type="button">編輯</button>
        </div>
    </td>
    </tr>
        `;
    return prodMod;
};


window.addEventListener('load', prodModify);