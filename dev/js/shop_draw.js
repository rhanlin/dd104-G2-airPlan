//=================素材點按進畫板==============================


let canvas = new fabric.Canvas('canvas', {
  backgroundColor: "white"
}); //創建fabric環境
canvas.setHeight(500);

canvas.controlsAboveOverlay = true;



var clipPath = new fabric.Group([
  new fabric.Polyline([{
      x: 10,
      y: 250
    },
    {
      x: 700,
      y: 10
    },
    {
      x: 670,
      y: 200
    },
    {
      x: 40,
      y: 250
    },
    {
      x: 670,
      y: 300
    },
    {
      x: 700,
      y: 490
    },
    {
      x: 10,
      y: 250
    },

  ], {
    stroke: 'red',
    color: 'red',
    left: 10,
    top: 10,
    fill: 'red'
  }),
  new fabric.Polyline([{
      x: 120,
      y: 248
    },

    {
      x: 670,
      y: 205
    },
    {
      x: 650,
      y: 248
    },
    {
      x: 120,
      y: 248
    },
  ]),
  new fabric.Polyline([{
      x: 120,
      y: 253
    },

    {
      x: 650,
      y: 253
    },
    {
      x: 670,
      y: 295
    },
    {
      x: 120,
      y: 253
    },
  ]),
]);
canvas.clipPath = clipPath;
canvas.renderAll();




$('#boardSwitchBtn').click(function () {
  clipPath = new fabric.Circle({
    radius: 100,
    top: 50,
    left: 50,
    // fill: 'bisque'
  });
  canvas.clipPath = clipPath;
  canvas.renderAll();
})


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
$('#filter_Grayscale').attr('title', '復古濾鏡')
$('.controlBox9').attr('title', '載入圖檔')

//======================提示框變換============

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

$('#imageUploader').mouseover(function () {
  $('.manualTitle').html('<h3>上傳圖檔</h3>');
  $('.manualinnerText').html('<h6>點擊就可任意上傳你自己的圖檔來進行編輯喔</h6>')
})
$('#imageUploader').mouseout(function () {
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



canvas.freeDrawingBrush.width = 10;
var width = 10;
$(".lineWidthValue").html(width);


$(".lineWidthInput").change(function () {
  const newWidth = parseInt(this.value, 10) || 1;
  canvas.freeDrawingBrush.width = newWidth
  $(".lineWidthValue").html(newWidth);
})


//橡皮擦功能
$("#eraser").click(function () {
  canvas.freeDrawingBrush.color = '#ffffff';
  $(".lineWidthInput").val() = 10;
  canvas.freeDrawingBrush.width = $(".lineWidthInput").val()
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


//相片灰階濾鏡功能



// $('#filter_Sepia').on("click", function () {
//   var filter = new fabric.Image.filters.BlendColor({
//     color: 'red',
//     mode: 'tint',
//     alpha: 0.5
//   });
//   obj = canvas.getActiveObject();
//   console.log(obj)
//   var filter = new fabric.Image.filters.Sepia();
//   obj.filters.push(filter);
//   obj.applyFilters(canvas.renderAll.bind(canvas));
// });

//相片灰階濾鏡功能

$('#filter_Grayscale').on("click", function () {
  obj = canvas.getActiveObject();
  var filter = new fabric.Image.filters.BlendImage({
    image: obj,
    mode: 'multiply',
    alpha: 0.5
  });

  console.log(obj)
  obj.filters.push(filter);
  obj.applyFilters();
  canvas.renderAll()
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




//=================剪裁飛機或郵戳畫板==========================






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