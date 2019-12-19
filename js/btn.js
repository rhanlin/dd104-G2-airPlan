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