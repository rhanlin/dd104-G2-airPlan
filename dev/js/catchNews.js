function catchNews(){
  fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=15d10159c7434cb08a1bb425ced4a544')
  .then(res=>res.json()).then(json=>{
    let randNews = rand(1,20)
    console.log(json.articles[randNews])
    console.log(randNews)
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
  })
}

function rand(min,max){
  let range = max - min + 1;
  return Math.floor(Math.random() * range )+ min;
}
    