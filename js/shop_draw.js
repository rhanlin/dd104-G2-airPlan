//=================素材點按進畫板==============================

let canvas = new fabric.Canvas('canvas'); //創建fabric環境
drawingOptionArea = document.getElementById('drawingOptionArea');

$('.figure').click(function () {
  var itemImage = this.getAttribute('src'); //獲取點取物件的src路徑
  // console.log(itemImage); //確認有沒有取到正確的圖片路徑
  let drawingPanel = document.getElementsByClassName('drawingPanel')[0]; //創建一個畫板空間
  // let canvas=document.getElementById('canvas');
  let divImage = document.createElement('div'); //創造div元素
  // divImage.style.width = '50px'; //決定div大小
  let image = document.createElement('img'); //創造img元素
  // image.style.width = '50px'; //決定img大小
  image.src = itemImage; //寫入img路徑
  divImage.appendChild(image); //img插入div
  console.log(divImage)
  console.log(image)
  drawingPanel.appendChild(divImage); //div插入畫板空間
  // canvas.appendChild(drawingPanel);

  fabric.Image.fromURL(itemImage, function (img) { //使用fabric.Image方法

    img.scaleToHeight(100); //指定img寬
    img.scaleToWidth(100); //指定img高
    img.center();
    img.setCoords();
    canvas.renderAll(); //選染畫布
    canvas.add(img); //畫布加入新的圖片
  })
});


//=======================畫筆區===============
//切換
canvas.isDrawingMode = false;

$('#mode').click(function () {
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (!canvas.isDrawingMode) {
    drawingOptionArea.style.display = "none";
    $('#modeImg').attr('src', '/img/product/tool/control_bar-01.svg')
  } else {
    drawingOptionArea.style.display = "";
    $('#modeImg').attr('src', '/img/product/tool/control_write-01.svg')
  }
})


//清除畫面
$('#clear').click(function () {
  canvas.clear();
})


$(".lineWidthInput").change(function () {
  const newWidth = parseInt(this.value, 10) || 1;
  canvas.freeDrawingBrush.width = newWidth
  $(".lineWidthValue").html(newWidth);
})


$("#lineColorInput").change(function () {
  canvas.freeDrawingBrush.color = this.value
})

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

//畫筆顏色
$("#shadowColorInput").change(function () {
  myShadow.color = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  canvas.freeDrawingBrush.shadow.color = this.value
})

//陰影顏色
$("#shadowBlurInput").change(function () {

  myShadow.blur = this.value
  console.log(this.value);
  canvas.freeDrawingBrush.setShadow(myShadow)
  $(".shadowBlurValue").html(this.value);
})

//陰影X位移
$("#shadowOffsetXInput").change(function () {
  myShadow.offsetX = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  $("#shadowOffsetXValue").html(this.value);
})


//陰影Y位移
$("#shadowOffsetYInput").change(function () {
  myShadow.offsetY = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  $("#shadowOffsetYValue").html(this.value);
})

//轉存成PNG
outputPngBtn = document.getElementById("outputPngBtn")
outputPngBtn.addEventListener('click', () => output('png'))

function output(formatType) {
  const dataURL = canvas.toDataURL({
    format: `image/${formatType}`,
    top: 0,
    left: 0,
    width: 800,
    height: 500,
    multiplier: 1,
    quality: 0.1
  })
  const a = document.createElement('a');
  a.href = dataURL
  a.download = `output.${formatType}`
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
}



//筆刷樣式下拉式選擇
// canvas.freeDrawingBrush.color = "rgba(0,0,0,0)";
// canvas.freeDrawingBrush.width = 10;
$("#brushSelect").change(function () {
  console.log(this.value);
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
  const lineColorInput = document.getElementById("lineColorInput")
  canvas.freeDrawingBrush.color = lineColorInput.value

  const lineWidthInput = document.getElementById("lineWidthInput");
  canvas.freeDrawingBrush.width = parseInt(lineWidthInput.value, 10) || 1

  canvas.freeDrawingBrush.setShadow(myShadow)
})