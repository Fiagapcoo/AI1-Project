// Fetch data from the articles.json file and handle it
var Articles = [];
fetch('../assets/JSON/articles.json')
  .then(response => {
    // Check if the fetch operation was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(artigos => {
    // Assign the fetched articles to the Articles array and call the handleArticles function
    Articles = artigos;
    handleArticles();
  })
  .catch(error => {
    // Log an error message if there was an issue fetching the file
    console.error('Error fetching the file:', error.message);
  });

/**********************************************************************************
 * @brief  Function to handle the display of articles on the web page.            *
 *                                                                                *
 * @details This function retrieves the articles from the Articles array and      *
 *          dynamically generates HTML content for each article, appending it to  *
 *          the 'card-container' element on the web page.                          *
 **********************************************************************************/
function handleArticles() {

  // Map over each article and generate HTML content
  const articlesHTML = Articles.map((article, index) => `
      <article class="card">
          <div class='card-background'>
              <img src="../assets/imgs/${article.IMG}" alt="Card_background" />
          </div>
          <div class='content'>
              <h1>${article.Titulo}</h1>
              <p>${article.Conteudo}</p>
          </div>
          <div class="action-bottom-bar">
              <a href="info_article_news.html?id=${index}">
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
  `);

  // Join the generated HTML content and append it to the 'card-container' element
  document.getElementById('card-container').innerHTML = articlesHTML.join('');
}

