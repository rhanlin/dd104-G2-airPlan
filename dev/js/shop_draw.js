//=================素材點按進畫板==============================

let canvas = new fabric.Canvas('canvas'); //創建fabric環境
canvas.setHeight(400);
// canvas.setWidth(1900);


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

$('#group').click(function () {
  canvas.getActiveObject().toGroup()
})
$('#ungroup').click(function () {
  canvas.getActiveObject().toActiveSelection();
})


//===========title==========================

$('#group').attr('title', '合併群組')
$('#ungroup').attr('title', '解散群組')
$('#clear').attr('title', '全部清除')
$('#outputPngBtn').attr('title', '儲存圖檔')
$('#text').attr('title', '建立文字')
$('#eraser').attr('title', '橡皮擦工具')
$('#copy').attr('title', '複製圖形')
$('#filter').attr('title', '復古濾鏡')
$('.controlBox9').attr('title', '載入圖檔')


//=======================畫筆區===============
//畫筆顏色
$(".lineColorInput").change(function () {
  console.log(this.value)
  canvas.freeDrawingBrush.color = this.value

})


//切換
canvas.isDrawingMode = false;

$('#mode').click(function () {
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (!canvas.isDrawingMode) {
    drawingOptionArea.style.display = "none";
    $('#modeImg').attr('src', './img/product/tool/banWrite.png')
    $('#modeImg').attr('title', '物件選取狀態')

  } else {
    drawingOptionArea.style.display = "";
    $('#modeImg').attr('src', './img/product/tool/control_write.svg')
    $('#modeImg').attr('title', '繪畫板狀態')
    canvas.freeDrawingBrush.color = $(".lineColorInput").val()
  }
})


//清除畫面
$('#clear').click(function () {
  canvas.clear();
})

const width = parseInt(this.value, 10) || 10;
canvas.freeDrawingBrush.width = width
$(".lineWidthValue").html(width);

$(".lineWidthInput").change(function () {
  const newWidth = parseInt(this.value, 10) || 1;
  canvas.freeDrawingBrush.width = newWidth
  $(".lineWidthValue").html(newWidth);
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

//陰影顏色
$(".shadowColorInput").change(function () {
  myShadow.color = this.value
  canvas.freeDrawingBrush.setShadow(myShadow)
  canvas.freeDrawingBrush.shadow.color = this.value
})

//陰影模糊
$(".shadowBlurInput").change(function () {

  myShadow.blur = this.value
  console.log(this.value);
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
$(".brushSelect").change(function () {
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
  lineColorInput = document.querySelectorAll(".lineColorInput")
  canvas.freeDrawingBrush.color = lineColorInput.value

  lineWidthInput = document.querySelectorAll(".lineWidthInput");
  canvas.freeDrawingBrush.width = parseInt(lineWidthInput.value, 10) || 1

  canvas.freeDrawingBrush.setShadow(myShadow)
})


//橡皮擦功能
$("#eraser").click(function () {
  canvas.freeDrawingBrush.color = '#E5E5E5';
  canvas.freeDrawingBrush.width = $(".lineWidthInput").val()
});





//相片復古濾鏡功能

$('#filter_Sepia').on("click", function () {
  var filter = $(this).data("filter"),
    obj = canvas.getActiveObject();
  console.log(obj)
  var filter = new fabric.Image.filters.Grayscale();
  obj.filters.push(filter);
  obj.applyFilters(canvas.renderAll.bind(canvas));
});



//文字功能
$('#text').on("click", function () {
  canvas.add(new fabric.IText('Tap and Type', {
    left: 0,
    top: 0,
    fontFamily: 'arial black',
    fill: '#333',
    fontSize: 20,

  }));
})


//===========上傳圖檔========================




const imageUploader = document.getElementById("imageUploader");
const file = document.getElementById("file");
const imgset = document.getElementsByClassName("drawingPanel")[0];

$('.figure').mousedown(function (e) {
  console.log(e);
  if (e.target.tagName.toLowerCase() === 'img') {
    imgDragOffset.offsetX = e.clientX - e.target.offsetLeft
    imgDragOffset.offsetY = e.clientY - e.target.offsetTop
    movingImage = e.target
    console.log(imgDragOffset)
    console.log(canvas)
    console.log(movingImage)
  }

})



function uploadFile(e) {
  file.click()
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

      // img.filters.push(new fabric.Image.filters.Grayscale());
      // img.applyFilters();
      img.scaleToHeight(100); //指定img寬
      img.scaleToWidth(100); //指定img高
      img.center();
      img.setCoords();
      canvas.renderAll(); //選染畫布
      canvas.add(img); //畫布加入新的圖片
    })
  };
}

let imgDragOffset = {
  offsetX: 0,
  offsetY: 0
}

function dropImg(e) {
  e.preventDefault();
  console.log(123);
  const {
    offsetX,
    offsetY
  } = e.e
  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,
    scaleX: 100 / movingImage.naturalWidth,
    scaleY: 100 / movingImage.naturalHeight,
    top: offsetY - imgDragOffset.offsetY,
    left: offsetX - imgDragOffset.offsetX

  })
  canvas.renderAll();
  canvas.add(image)
}


imageUploader.addEventListener('click', uploadFile, true);
file.addEventListener('change', handleFile);


canvas.on('drop', dropImg)



// =======START RESPONSIVE CANVAS=======================
// canvas.on('after:render', function () {
//   this.calcOffset();
//   console.log(this.calcOffset()); //每次渲染後抓到canvas的寬
// });
widthscrencan = (window.innerWidth > 0) ? window.innerWidth : screen.width; // capture width screen onload
canvasScale = 1; //global 1倍大  

var ocw = canvas.width;
console.log('ocw: ', ocw);
var canvasBox = document.getElementById('canvasBox');
canvasBox.width = ocw;
console.log('canvasBox.width: ', canvasBox.width);


window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  if (window.innerWidth < 576) {
    canvasBox.width = (window.innerWidth * .75) + (window.innerWidth / 13)
  } else if (window.innerWidth < 768) {
    canvasBox.width = (window.innerWidth * .75) + (window.innerWidth / 11);
  } else if (window.innerWidth < 992) {
    canvasBox.width = (window.innerWidth * .75) + (window.innerWidth / 10);
  } else if (window.innerWidth < 1200) {
    canvasBox.width = (window.innerWidth * .56) + (window.innerWidth / 10);
  } else if (window.innerWidth < 1500) {
    canvasBox.width = 650 + (window.innerWidth / 65);
  } else if (window.innerWidth < 1700) {
    canvasBox.width = 690 + (window.innerWidth / 80);

  } else {
    canvasBox.width = 700 + (window.innerWidth / 90)

  }
  canvas.setWidth(canvasBox.width)

  console.log('window.innerWidth: ', window.innerWidth);
  canvas.renderAll();
}
resizeCanvas();