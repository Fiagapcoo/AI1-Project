// Extract article ID from the URL query parameter
var id = window.location.search;
console.log(id);

// Check if the ID is empty; if so, display an error alert and redirect to the homepage
if (id == "") {
    alert("Erro ao carregar a página!");
    window.location.href = "../index.html";
}

// Extract and parse the actual article ID from the URL
let actualId = id.split("=")[1];
let actualIdInt = parseInt(actualId);

// Initialize an empty array to store articles
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
 * @brief  Function to handle the display of a specific article on the web page.  *
 *                                                                                *
 * @details This function retrieves the article with the specified ID from the    *
 *          Articles array and updates the HTML content on the web page            *
 *          accordingly.                                                          *
 **********************************************************************************/
function handleArticles() {
    // Retrieve the article with the specified ID
    let article = Articles[actualIdInt];

    // Update the HTML content with information from the retrieved article
    document.getElementById('title').innerHTML = article.Titulo;
    document.getElementById('image').innerHTML = `<img src="../assets/imgs/${article.IMG}" alt="ArtigoIMG" id = "img" class = "img"/>`;
    document.getElementById('h1Title').innerHTML = article.Titulo;
    document.getElementById('pContent').innerHTML = article.ConteudoCompleto;
}
