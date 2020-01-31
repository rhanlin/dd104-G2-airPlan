let canvas = new fabric.Canvas('canvas', {
  backgroundColor: "white"
}); //創建fabric環境
canvas.setHeight(470);
//=================剪裁飛機或郵戳畫板==========================
canvas.controlsAboveOverlay = true;


var clipPath2 = new fabric.Circle({
  radius: 230,
  top: 10,
  left: 160,

})
var clipPath2_2 = new fabric.Circle({
  radius: 230,
  top: 10,
  left: 140,

})
var clipPath2_3 = new fabric.Circle({
  radius: 230,
  top: 10,
  left: 80,

})

var clipPath3 = new fabric.Circle({
  radius: 230,
  top: 10,
  left: 40,

})

var clipPath4 = new fabric.Circle({
  radius: 190,
  top: 50,
  left: 10,

})
var clipPath5 = new fabric.Circle({
  radius: 120,
  top: 50,
  left: 10,

})

$('#boardSwitchBtn').on('click', switchBtn)
//切換畫板以便設定轉存圖檔的分類(郵戳或圖案)
var boardType = "plane";

function switchBtn() {
  orderText = document.querySelector('.orderText h6');
  orderText.innerHTML
  if (canvas.clipPath == null) {
    canvas.clipPath = clipPath2;
    boardType = "circle";
    orderText.innerHTML = "切換圖案畫板";
    // console.log(boardType)
    canvas.renderAll();
  } else {
    canvas.clipPath = null;
    canvas.backgroundColor = 'white';
    boardType = "plane";
    orderText.innerHTML = "切換郵戳畫板";
    // console.log(boardType)
    canvas.renderAll();
  }
}


//==================拖曳slide到畫板===============================

$('.figure').mousedown(function (e) {
  // alert(e);
  if (e.target.tagName.toLowerCase() === 'img') {
    movingImage = e.target
    // console.log(movingImage)
  }
})

function dropImg() {
  var image = new fabric.Image(movingImage, {

    width: movingImage.naturalWidth * 4,
    height: movingImage.naturalHeight * 4,
    scaleX: 80 / movingImage.naturalWidth,
    scaleY: 80 / movingImage.naturalHeight,
    top: 200,
    left: 200

  })
  canvas.renderAll();
  canvas.add(image)
}
canvas.on('drop', dropImg)


//==================點按slide到畫板===============================
drawingOptionArea = document.getElementById('drawingOptionArea');

$('.figure').click(function () {
  var itemImage = this.getAttribute('src'); //獲取點取物件的src路徑


  fabric.Image.fromURL(itemImage, function (img) { //使用fabric.Image方法
    // canvas.on('after:render', function () {
    //   this.calcOffset();
    //   console.log(this.calcOffset()); //每次渲染後抓到canvas的寬
    //   canvasWidth = this.width;
    //   canvasHeight = this.height;
    //   console.log(canvasHeight);
    // });
    img.scale(1).set({
      left: 200,
      top: 200,
      width: 450,
      height: 400,


    });
    img.scaleToHeight(300); //指定img寬
    img.scaleToWidth(300); //指定img高
    canvas.renderAll();
    canvas.add(img).setActiveObject(img);
  })
});

//=========================title==========================================

$('#group').attr('title', '合併群組')
$('#ungroup').attr('title', '解散群組')
$('#clear').attr('title', '全部清除')
$('#outputPngBtn').attr('title', '儲存圖檔')
$('#text').attr('title', '建立文字')
$('#eraser').attr('title', '橡皮擦工具')
$('#copy').attr('title', '複製圖形')
$('#filter_Grayscale').attr('title', '復古濾鏡')
$('.controlBox9').attr('title', '載入圖檔')

//=========================提示框變換======================================

$('#mode').mouseover(function () {
  $('.manualTitle').html('<h3>繪畫板</h3>');
  $('.manualinnerText').html('<h6>點選可切換畫筆狀態或是物件選取狀態</h6>')
})
$('#mode').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#clear').mouseover(function () {
  $('.manualTitle').html('<h3>清除全部</h3>');
  $('.manualinnerText').html('<h6>點選會直接清除畫板上全部物件喔</h6>')
})
$('#clear').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})


$('#group').mouseover(function () {
  $('.manualTitle').html('<h3>合併物件</h3>');
  $('.manualinnerText').html('<h6>點選可框選畫板上所有物件合併成一個物件</h6>')
})
$('#group').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#ungroup').mouseover(function () {
  $('.manualTitle').html('<h3>解除合併</h3>');
  $('.manualinnerText').html('<h6>點選可框選畫板上被合併的物件並解除群組</h6>')
})
$('#ungroup').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#text').mouseover(function () {
  $('.manualTitle').html('<h3>填寫文字</h3>');
  $('.manualinnerText').html('<h6>點選可召喚文字框，框內點兩下可自由修改內文喔</h6>')
})
$('#text').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#eraser').mouseover(function () {
  $('.manualTitle').html('<h3>橡皮擦工具</h3>');
  $('.manualinnerText').html('<h6>可使用筆畫粗細調整橡皮擦大小喔</h6>')
})
$('#eraser').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#eraser').mouseover(function () {
  $('.manualTitle').html('<h3>橡皮擦工具</h3>');
  $('.manualinnerText').html('<h6>可使用筆畫粗細調整橡皮擦大小喔</h6>')
})
$('#eraser').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#filter_Sepia').mouseover(function () {
  $('.manualTitle').html('<h3>復古濾鏡功能</h3>');
  $('.manualinnerText').html('<h6>點擊就可將選取的圖案加上復古濾鏡啦!</h6>')
})
$('#filter_Sepia').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#filter_Grayscale').mouseover(function () {
  $('.manualTitle').html('<h3>灰階濾鏡功能</h3>');
  $('.manualinnerText').html('<h6>點擊就可將選取的圖案加上灰階濾鏡啦!</h6>')
})
$('#filter_Grayscale').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#controlBox8').mouseover(function () {
  $('.manualTitle').html('<h3>上傳圖檔</h3>');
  $('.manualinnerText').html('<h6>點擊就可任意上傳你自己的圖檔來進行編輯喔</h6>')
})
$('#controlBox8').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})

$('#outputPngBtn').mouseover(function () {
  $('.manualTitle').html('<h3>轉存PNG圖檔</h3>');
  $('.manualinnerText').html('<h6>點擊就可將畫完的圖案轉存成PNG圖檔保存囉</h6>')
})
$('#outputPngBtn').mouseout(function () {
  $('.manualTitle').html('<h3>工具使用提示框</h3>');
  $('.manualinnerText').html(' <h6>滑鼠移入會提示您工具的使用方法喔</h6>')
})





//=======================畫筆區=====================================================
//群組
$(document).ready(function () {
  $('#group').click(function () {
    if ($('#controlBox4').hasClass('clicked') == false) {
      canvas.getActiveObject().toGroup()
    }
  })
})

$(document).ready(function () {
  $('#ungroup').click(function () {
    if ($('#controlBox5').hasClass('clicked') == false) {
      canvas.getActiveObject().toActiveSelection();
    }
  })
})


//畫筆顏色
$(".lineColorInput").change(function () {
  // console.log(this.value)
  canvas.freeDrawingBrush.color = this.value

})


//切換

canvas.isDrawingMode = false;

$(document).ready(function () {
  $('#mode').click(function () {
    if ($('#controlBox1').hasClass('clicked') == false) {
      canvas.isDrawingMode = !canvas.isDrawingMode;
      if (!canvas.isDrawingMode) {
        drawingOptionArea.style.display = "none";
        $('#modeImg').attr('src', './img/product/toolcontrolbar/cannotWrite.png')
        $('#modeImg').attr('title', '物件選取狀態')

      } else {
        drawingOptionArea.style.display = "";
        $('#modeImg').attr('src', './img/product/toolcontrolbar/control_write.svg')
        $('#modeImg').attr('title', '繪畫板狀態')
        canvas.freeDrawingBrush.color = $(".lineColorInput").val()
      }
    }
  })
})

//清除畫面
document.getElementById('clear').onclick = clearCanvas;

function clearCanvas() {

  canvas.clear();
  canvas.controlsAboveOverlay = true;
  canvas.backgroundColor = "white";
  canvas.renderAll();

}


canvas.freeDrawingBrush.width = 10;
var width = 10;
$(".lineWidthValue").html(width);


$(".lineWidthInput").change(function () {
  const newWidth = parseInt(this.value, 10) || 1;
  canvas.freeDrawingBrush.width = newWidth
  $(".lineWidthValue").html(newWidth);
})


//橡皮擦功能
$(document).ready(function () {
  $("#eraser").click(function () {
    if ($('#controlBox3').hasClass('clicked') == false) {
      canvas.freeDrawingBrush.color = '#ffffff';
      canvas.freeDrawingBrush.shadow.color = '#ffffff';
      canvas.freeDrawingBrush = squareBrush
      $(".lineWidthInput").val() = 10;
      canvas.freeDrawingBrush.width = $(".lineWidthInput").val()
    }
  });
});




//加陰影
myShadow = new fabric.Shadow({
  blur: 1,
  offsetX: 1,
  offsetY: 1,
  affectStroke: true,
  color: 'black'
});
// 或是這樣使用 setShadow
// canvas.freeDrawingBrush.setShadow('10px 10px black');

//陰影顏色
$(".shadowColorInput").change(function () {
  myShadow.color = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  canvas.freeDrawingBrush.shadow.color = this.value
})

//陰影模糊
$(".shadowBlurInput").change(function () {

  myShadow.blur = this.value
  // console.log(this.value);
  canvas.freeDrawingBrush.setShadow(myShadow)
  $(".shadowBlurValue").html(this.value);
})

//陰影X位移
$(".shadowOffsetXInput").change(function () {
  myShadow.offsetX = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  $(".shadowOffsetXValue").html(this.value);
})


//陰影Y位移
$(".shadowOffsetYInput").change(function () {
  myShadow.offsetY = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  $(".shadowOffsetYValue").html(this.value);
})

//轉存成PNG
outputPngBtn = document.getElementById("outputPngBtn")
outputPngBtn.addEventListener('click', () => output('png'))


function output(formatType) {
  var patternName = $('#patternName').val();
  // console.log(patternName)
  if (patternName != "") {

    // console.log(boardType)
    circleMatSort = "postmark";
    planeMatSort = "pattern";

    if (boardType == "circle") {

      canvas.backgroundColor = "transparent";
      let dataURL = canvas.toDataURL({
        format: `image/${formatType}`,
        top: 0,
        left: 0,
        width: 800,
        height: 500,
        multiplier: 1,
        quality: 0.1
      });

      // console.log(dataURL)

      cavMemberH = document.getElementById('cavMemberH').innerHTML;
      cavMemberH = cavMemberH.toString().substring(6);
      $.ajax({
        type: "POST",
        url: "phps/shop_saveStamp.php",
        data: {
          memNo: cavMemberH,
          image: dataURL,
          matName: patternName,
          matLSort: circleMatSort,
        }
      })

      var a = document.createElement('a');
      a.href = dataURL
      // console.log(blobUrl);
      a.download = `ouput.${formatType}`
      // console.log(a);
      document.body.appendChild(a);
      a.click()
      document.body.removeChild(a)
      alert("圖檔已存入我的倉庫~~請到我的倉庫確認")
      clearCanvas();
      switchBtn()



    } else if (boardType == "plane") {

      let dataURL = canvas.toDataURL({
        format: `image/${formatType}`,
        top: 0,
        left: 0,
        width: 800,
        height: 500,
        multiplier: 1,
        quality: 0.1
      });


      cavMemberH = document.getElementById('cavMemberH').innerHTML;
      cavMemberH = cavMemberH.toString().substring(6);
      $.ajax({
        type: "POST",
        url: "phps/shop_savePattern.php",
        data: {
          memNo: cavMemberH,
          image: dataURL,
          matName: patternName,
          matLSort: planeMatSort,
        }
      })


      var a = document.createElement('a');
      a.href = dataURL
      // console.log(blobUrl);
      a.download = `ouput.${formatType}`
      // console.log(a);
      document.body.appendChild(a);
      a.click()
      document.body.removeChild(a)
      alert("圖檔已存入我的倉庫~~請到我的倉庫確認")
      clearCanvas();
    }

  } else {
    alert("請填寫欲儲存的圖檔名稱~~感謝您");
  }

}



//筆刷樣式下拉式選擇
// canvas.freeDrawingBrush.color = "rgba(0,0,0,0)";
// canvas.freeDrawingBrush.width = 10;
$(".brushSelect").change(function () {
  // console.log(this.value);
  if (this.value === "Square") {
    // canvas.freeDrawingBrush = new fabric.CircleBrush(canvas) 圓形畫筆
    // canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
    const squareBrush = new fabric.PatternBrush(canvas);
    //getPatternSrc 取得要重複繪製的圖形 Canvas
    squareBrush.getPatternSrc = function () {
      const squareWidth = 20;
      const squareDistance = 5;
      //創立一個暫存canvas來繪製要畫的圖案
      const patternCanvas = fabric.document.createElement('canvas');
      //canvas總大小為每一個畫筆的大小
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;

      const ctx = patternCanvas.getContext('2d');
      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);
      //回傳繪製完畢的canvas
      return patternCanvas;
    }
    canvas.freeDrawingBrush = squareBrush
  } else {
    canvas.freeDrawingBrush = new fabric[`${this.value}Brush`](canvas)
  }
  lineColorInput = document.querySelectorAll(".lineColorInput")
  canvas.freeDrawingBrush.color = lineColorInput.value

  lineWidthInput = document.querySelectorAll(".lineWidthInput");
  canvas.freeDrawingBrush.width = parseInt(lineWidthInput.value, 10) || 1

  canvas.freeDrawingBrush.setShadow(myShadow)
})



//相片灰階濾鏡功能
$(document).ready(function () {
  $('#filter_Grayscale').on("click", function () {
    // console.log($('#controlBox7').hasClass('clicked'))
    if ($('#controlBox7').hasClass('clicked') == false) {
      obj = canvas.getActiveObject();
      obj.filters.push(new fabric.Image.filters.Grayscale({

      }));
      obj.applyFilters();
      canvas.renderAll()
    }
  });
})


//文字功能
$('#text').on("click", function () {
  // console.log(this)
  if ($('#controlBox6').hasClass('clicked') == false) {
    canvas.add(new fabric.IText('please key in text', {
      left: 0,
      top: 0,
      fontFamily: 'arial black',
      fill: '#333',
      fontSize: 20,
    }));
  }
})



//===========上傳圖檔========================
const imageUploader = document.getElementsByClassName("controlBox8_button")[0];
const file = document.getElementById("file");
const imgset = document.getElementsByClassName("drawingPanel")[0];


function uploadFile(e) {
  if ($('#controlBox8').hasClass('clicked') == false) {
    file.click()
  } else {
    alert("您尚未購買此工具喔!!")
  }
}

function handleFile() {

  const fileReader = new FileReader();
  fileReader.readAsDataURL(this.files[0]);
  fileReader.onload = e => {
    // 圖片 base64
    const dataURL = e.target.result;
    const divImage2 = document.createElement('div'); //創造div元素
    const updateimg = document.createElement('img');
    updateimg.draggable = true;
    updateimg.src = dataURL;
    divImage2.appendChild(updateimg); //img插入div
    imgset.appendChild(divImage2)
    // console.log(imgset)

    fabric.Image.fromURL(dataURL, function (img) { //使用fabric.Image方法

      img.scaleToHeight(100); //指定img寬
      img.scaleToWidth(100); //指定img高
      img.scale(0.5).set({
        left: 200,
        top: 200,
        selectable: true,
        originX: 'left',
        originY: 'top'
      });
      canvas.renderAll();
      canvas.add(img).setActiveObject(img);;

    })
  };
}


imageUploader.addEventListener('click', uploadFile, true);
file.addEventListener('change', handleFile);



let pngCanvas = new fabric.Canvas('pngCanvas', {
  backgroundColor: "white"
}); //創建fabric環境
pngCanvas.setWidth(200);
pngCanvas.setHeight(200);


// =======START RESPONSIVE CANVAS=======================
canvas.on('after:render', function () {
  this.calcOffset();
  // console.log(this.calcOffset()); //每次渲染後抓到canvas的寬
});
widthscrencan = (window.innerWidth > 0) ? window.innerWidth : screen.width; // capture width screen onload
canvasScale = 1; //global 1倍大  

var ocw = canvas.width;
// console.log('ocw: ', ocw);
var canvasBox = document.getElementById('canvasBox');
canvasBox.width = ocw;
// console.log('canvasBox.width: ', canvasBox.width);


window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  if (window.innerWidth < 375) {
    canvasBox.width = (window.innerWidth * .67) + (window.innerWidth / 70)
    canvas.setHeight(300);
    clipPath2 = clipPath5;
  } else if (window.innerWidth < 576) {
    canvas.setHeight(300);
    canvasBox.width = (window.innerWidth * .67) + (window.innerWidth / 70)
    clipPath2 = clipPath5;
  } else if (window.innerWidth < 768) {

    canvasBox.width = (window.innerWidth * .60) + (window.innerWidth / 11);
    clipPath2 = clipPath4;
  } else if (window.innerWidth < 992) {

    canvasBox.width = (window.innerWidth * .62) + (window.innerWidth / 30);
    clipPath2 = clipPath2_3;
  } else if (window.innerWidth < 1330) {

    canvasBox.width = (window.innerWidth * .50) + (window.innerWidth / 60);
    clipPath2 = clipPath3;
  } else if (window.innerWidth < 1500) {

    canvasBox.width = 670 + (window.innerWidth /45);
    clipPath2 = clipPath2_3;
  } else if (window.innerWidth < 1700) {

    canvasBox.width = 670 + (window.innerWidth / 68);
    clipPath2 = clipPath2_2;
  } else {
    canvasBox.width = 700 + (window.innerWidth / 50)
    canvas.setHeight(500);
  }
  canvas.setWidth(canvasBox.width)

  // console.log('window.innerWidth: ', window.innerWidth);
  canvas.renderAll();

}
resizeCanvas();