/*
 * 3D按鈕: 基本款
 */
let btn = document.querySelectorAll('.btn3d');
// console.log(btn[0]);
btn[0].addEventListener('mouseup',btnFn);
btn[1].addEventListener('mouseup',btnFn);
btn[2].addEventListener('mouseup',btnFn);

function btnFn(e){
    // console.log(e.target);
    e.target.classList.add("clicked");
    setTimeout(()=>{
        e.target.classList.remove("clicked");
    },300)
}

/*
 * 3D按鈕: 重要按鈕(打賞、留言、購買)
 */
let bigBtn = document.getElementById('bigBtn');
    // console.log(btn[0]);
    bigBtn.addEventListener('mouseup',bigBtnFn);
    function bigBtnFn(){
            bigBtn.classList.add('bigBtnActive');
            setTimeout(()=>{
                bigBtn.classList.remove("bigBtnActive");
            },300)
            
    }