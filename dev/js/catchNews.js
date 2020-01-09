function catchNews(){
  fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=15d10159c7434cb08a1bb425ced4a544')
  .then(res=>res.json()).then(json=>{
    console.log(json)
  })
}

    