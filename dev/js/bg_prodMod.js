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
      // console.log(data);
      alert('管理員新增完成');//康加的
      location.reload();//康加的
    }).fail(function (data) {
      alert("跳窗送出資料失敗");
    }).always(function (data) {
      // console.log(data)
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

      for (i = prodModRow.length - 1; i > -1; i--) {
        prodMod = patternWrap(
          prodMod,
          prodModRow[i].prodNo,
          prodModRow[i].prodName,
          prodModRow[i].matNameCH,
          prodModRow[i].prodUrl,
          prodModRow[i].matInfo,
          prodModRow[i].prodPrice,


        );

        // document.getElementsByTagName('select')[0].selectedIndex = "DIY";
        $("#productModify").html(prodMod);
      }
      select = document.getElementsByClassName('selectSort');
      var y = 60
      for (x = 0; x < prodModRow.length; x++) {
        // console.log(prodModRow[59].prodLSort)

        select[x].selectedIndex = prodModRow[y].prodLSort;
        var y = y - 1;
      }



      $(document).on('click', 'button', function () {
        let prodNo_update = $(this).parent().parent().parent().children().first().html()

        let prodName_update = $(this).parent().parent().parent().children().next().first().children().val()
        let matNameCH_update = $(this).parent().parent().parent().children().next().next().first().children().val()
        let file_update = $(this).parent().parent().parent().children().next().next().next().first().children('.file')[0].files[0] // 單個檔案
        // console.log(file_update)
        let matInfo_update = $(this).parent().parent().parent().children().last().prev().prev().prev().prev().children().val()
        let prodPrice_update = $(this).parent().parent().parent().children().last().prev().prev().prev().children().val()
        let prodURL_update = $(this).parent().parent().parent().children().last().prev().prev().children().val()
        let prodLSort_update = $(this).parent().parent().prev().first().children().prop('selectedIndex');

        var formDataInput = new FormData();
        formDataInput.append('prodNo_update', prodNo_update);
        formDataInput.append('prodName_update', prodName_update);
        formDataInput.append('matNameCH_update', matNameCH_update);
        formDataInput.append('file_update', file_update);
        formDataInput.append('matInfo_update', matInfo_update);
        formDataInput.append('prodPrice_update', prodPrice_update);
        formDataInput.append('prodURL_update', prodURL_update);
        formDataInput.append('prodLSort_update', prodLSort_update);

        // console.log(formDataInput);

        $.ajax({
            url: './phps/bg_produpdate.php',
            type: 'POST',
            data: formDataInput,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false
          })
          .done(function (data) {
            alert('已順利更新商品相關資料')
            location.reload();
          }).fail(function (data) {
            alert("尚未更新圖片");
          }).always(function (data) {
            // console.log(data)
            // always do the following, no matter if it fails or not
          })
      })



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




function patternWrap(prodMod, prodNo, matNameCH, prodName, prodUrl, matInfo, prodPrice, prodLSort) {
  // console.log(data);

  prodMod += `
    <tr>
    <td> ${prodNo}</td>
 
    <td><input type="text" value="${matNameCH}" class="matNameCH form-control col-12"></td>
    <td><input type="text" value="${prodName}" class="prodName form-control col-12"></td>
    <td style="width:13%";>
    <input type="file" name="file" class="file" style="width:100%";>   
    </td>
    <td><textarea cols="30" rows="12" class="matInfo form-control col-12">${matInfo}</textarea></td>
    <td><input type="text" value="${prodPrice}" class="prodPrice form-control col-12"></td>
    <td>
    <img width="100" src="${prodUrl}" alt="" class="prodUrl">
    </td>  
    <td>
    <select class="selectSort">
    <option>figure</option>
    <option>postmark</option>
    <option>DIY</option>
    <option>letter</option>
    </select>
    </td>

    <td>
        <div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button class="btn btn-block btn-outline-primary" type="button" class="updataBtn">儲存</button>
        </div>
    </td>
    </tr>
        `;
  return prodMod;


};


// window.addEventListener('load', prodModify);

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
  prodModify();
});