/**********************************************************************************
 * @brief  Function to verify and initiate the process of displaying an article.  *
 *                                                                                *
 * @details This function retrieves the selected article's title, checks if it is  *
 *          valid, and then proceeds to fetch and display the corresponding       *
 *          article details using other helper functions.                         *
 **********************************************************************************/
function verificar() {
  let title = document.getElementById('title').value;

  if (title == "none") {
      alert("Selecione um artigo para alterar!");
      return false;
  } else {
      getArticle(title);
  }
}

/**********************************************************************************
* @brief  Function to fetch the articles JSON and initiate article handling.     *
*                                                                                *
* @details This function fetches the articles JSON file, processes the response, *
*          and calls the handleArticles function to populate the dropdown menu   *
*          with article titles.                                                  *
**********************************************************************************/
let Articles = [];

// Function to fetch articles from the articles.json file
function fetchArticles() {
  return new Promise((resolve, reject) => {
    fetch('../assets/JSON/articles.json')
      .then(response => {
        // Check if the fetch operation was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(articles => {
        // Resolve the promise with the fetched articles
        resolve(articles);
      })
      .catch(error => {
        // Reject the promise with the error message
        reject(error);
      });
  });
}

// Example of using the promise-based approach
fetchArticles()
  .then(articles => {
    // Assign the fetched articles to the Articles array
    Articles = articles;
    // Call the handleArticles function or perform any other operations
    handleArticles();
  })
  .catch(error => {
    // Log an error message if there was an issue fetching the file
    console.error('Error fetching the file:', error.message);
  });


/**********************************************************************************
* @brief  Function to handle the display of all articles in a dropdown menu.     *
*                                                                                *
* @details This function creates a list of article titles with corresponding     *
*          values and updates the HTML content of the dropdown menu.             *
**********************************************************************************/
function handleArticles() {
  const articlesTitle = Articles.map((article, index) => `
      <option value="${article.id}">${article.Titulo}</option>`);

  articlesTitle.unshift('<option value="none" selected disabled>Selecione uma opção</option>');

  document.getElementById('title').innerHTML = articlesTitle.join('');
}

/**********************************************************************************
* @brief  Function to fetch a specific article and update the web page.         *
*                                                                                *
* @details This function fetches the articles JSON, finds the specified article  *
*          by ID, and updates the HTML content with the article details.         *
**********************************************************************************/
function getArticle(id) {
  fetch('../assets/JSON/articles.json')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(artigos => {
          Articles = artigos;
          handleArticle(id);
      })
      .catch(error => {
          console.error('Error fetching the file:', error.message);
      });
}

/**********************************************************************************
* @brief  Function to update the web page with details of a specific article.    *
*                                                                                *
* @details This function retrieves the article with the specified ID from the    *
*          Articles array and updates the HTML content on the web page            *
*          accordingly.                                                          *
**********************************************************************************/
function handleArticle(id) {
  let article = Articles.find(article => article.id == id);
  console.log(article);
  document.getElementById('form').innerHTML = `<label for="title">Título</label>`
      + `<input type="text" id="title" name="title" value="${article.Titulo}">`
      + `<label for="img">Diretorio da Imagem</label>`
      + `<input type="text" id="img" name="img" value="${article.IMG}">`
      + `<label for="content">Conteudo</label>`
      + `<textarea id="content" name="content" rows="10" cols="40">${article.Conteudo}</textarea>`
      + `<input type="submit" value="Alterar">`;
}
