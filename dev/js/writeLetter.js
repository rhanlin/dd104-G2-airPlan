// 監聽所有的submit按鈕(用戶郵戳)，當觸發點擊事件後，前往下一步->摺紙
let submitStamp = document.querySelector('.stamp-type').children;
for(let i = 0 ; i<submitStamp.length ; i++){
  submitStamp[i].addEventListener('click',(e)=>{
    // e.preventDefault();//解掉冒泡事件
    e.stopPropagation();
    e.stopImmediatePropagation();
    confirmSubmit();
  })
}

// console.log(document.querySelector('.stamp-type').children);
