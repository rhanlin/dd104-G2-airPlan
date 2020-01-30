function catchNews(){
  fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=15d10159c7434cb08a1bb425ced4a544')
  .then(res=>res.json()).then(json=>{
    let randNews = rand(1,20)
    // console.log(json.articles[randNews])
    // console.log(randNews)
    vmCatchLetter.letteTittle = json.articles[randNews].title;
    vmCatchLetter.letterContant_1 = json.articles[randNews].description;
    vmCatchLetter.letterContant_2 = json.articles[randNews].content;
    vmCatchLetter.publishedAt = `publishedAt: ${json.articles[randNews].publishedAt}`;
    vmCatchLetter.author = `author: ${json.articles[randNews].author}`;
    // vmCatchLetter.letterContant_2 = `${json.articles[randNews].author}<br>${json.articles[randNews].publishedAt}`;
    vmCatchLetter.letterUploadImg = `url(${json.articles[randNews].urlToImage})`;


    //內頁
    vmCatchLet.letteTittle = json.articles[randNews].title;
    vmCatchLet.letterContant_1 = json.articles[randNews].description;
    vmCatchLet.letterContant_2 = json.articles[randNews].content;
    vmCatchLet.publishedAt = `publishedAt: ${json.articles[randNews].publishedAt}`;
    vmCatchLet.author = `author: ${json.articles[randNews].author}`;
    // vmCatchLet.letterContant_2 = `${json.articles[randNews].author}<br>${json.articles[randNews].publishedAt}`;
    vmCatchLet.letterUploadImg = `url(${json.articles[randNews].urlToImage})`;
    // console.log(vmImgWrap.letUrl);
    
  })
}

function catchALetter(){
  fetch('./phps/catchLetter.php',{
    method: 'POST',
    body: new URLSearchParams(`memNo=${vmCatchLet.userNo}`),
  })
  .then(res=>res.json()).then(json=>{
    // console.log(json);
    vmCatchLetter.letteTittle = json.letter.letTitle;
    vmCatchLetter.letterContant_1 = json.letter.letContent;
    vmCatchLetter.publishedAt = `寄件時間: ${json.letter.letTime}`;
    vmCatchLetter.author = `寄件人: ${json.writerName.memName}-${json.letter.memNo}`;
    vmCatchLetter.letterUploadImg = `url(${json.letter.imgUrl})`;

    //內頁
    vmCatchLet.letteTittle = json.letter.letTitle;
    vmCatchLet.letterContant_1 = json.letter.letContent;
    vmCatchLet.publishedAt = `寄件時間: ${json.letter.letTime}`;
    vmCatchLet.author = `寄件人: ${json.writerName.memName}-${json.letter.memNo}`;
    vmCatchLet.letterUploadImg = `url(${json.letter.imgUrl})`;

    //保存撈到信件的canvas圖檔
    vmImgWrap.letUrl = `url('${json.letter.letImgUrl}')`;//此信的canvas
    vmImgWrap.letPattern = `url('${json.letPattern.matPatUrl}')`;//此信的彩繪花紋

    //將留言存起來
    vmCatchLet.letNo = json.letter.letNo;

    if(json.msg){
      for(let i=0 ; i<json.msg.length ; i++){
        if(json.msg[i].memNo){
          if(json.msg[i].msgStatus != 1){
            vmCatchLet.msgUserId.push(`${json.msgUserName[i]}-${json.msg[i].memNo}`);
          }else{
            vmCatchLet.msgUserId.push(`此用戶已經遭到檢舉`);
          }
        }
      }
      for(let i=0 ; i<json.msg.length ; i++){
        if(json.msg[i].msgContent){
          if(json.msg[i].msgStatus != 1){
            vmCatchLet.levMsg.push(json.msg[i].msgContent);
          }else{
            vmCatchLet.levMsg.push("此留言已經被下架");
          }
        }
      }
      for(let i=0 ; i<json.msg.length ; i++){
        if(json.msg[i].msgNo){
          vmCatchLet.msgNo.push(`${json.msg[i].msgNo}`);
        }
      }
      //msgStatus
      for(let i=0 ; i<json.msg.length ; i++){
        if(json.msg[i].msgStatus){
          vmCatchLet.msgStatus.push(`${json.msg[i].msgStatus}`);
        }
      }
    }else{
      vmCatchLet.msgUserId.push("歡迎留言！");
      vmCatchLet.levMsg.push("目前沒有留言...");
    }
    
  

    // console.log(`canvas: ${vmImgWrap.letUrl}`);
    
  }).catch(err=>console.log(err))
  
}

function rand(min,max){
  let range = max - min + 1;
  return Math.floor(Math.random() * range )+ min;
}
    