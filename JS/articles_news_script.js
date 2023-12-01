var Articles = [];
fetch ('../assets/JSON/articles.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(artigos => {
    Articles = artigos;
    handleArticles();
  })
  .catch(error => {
    console.error('Error fetching the file:', error.message);
  });

function handleArticles() {
    let size = Articles.length;
    console.log(size);
    for(let i=0; i<size; i++){
        let article = Articles[i];
        console.log(article);
        console.log(article.IMG);


        document.getElementById('card-container').innerHTML += `

        <article class="card">
        <div class='card-background'>
            <img src="../assets/imgs/${article.IMG}" alt="Card_background" />
        </div>
        <div class='content'>
            <h1>${article.Titulo}</h1>
            <p>
               ${article.Conteudo}
            </p>
        </div>
        <div class="action-bottom-bar">
            <a href="info_article_news.html?id=${i}">
                Saiba Mais
                <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l14 0"></path>
                    <path d="M15 16l4 -4"></path>
                    <path d="M15 8l4 4"></path>
                </svg>
            </a>
        </div>
    </article>
        
        
        `
        

    }
}
