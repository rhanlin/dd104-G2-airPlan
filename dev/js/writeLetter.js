let previewPattern = document.getElementById('previewPattern');
let painteTypeBtn = document.querySelectorAll("#painteType > .type");

console.log(painteTypeBtn);

for(let i = 0 ; i<painteTypeBtn.length ; i++){
  painteTypeBtn[i].addEventListener('click',(e)=>{
    //解掉冒泡事件
    e.stopPropagation();
    // e.stopImmediatePropagation();
    // previewPattern.style.backgroundImage = `url(./img/pattern/plan-pattern-1.svg)`;
    // console.log(e.target.style);
    // console.log(e.currentTarget.querySelectorAll(".print-type-pattern"));//.....??
  })
}

