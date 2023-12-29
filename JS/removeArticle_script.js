/**********************************************************************************
 * @brief  Fetches articles JSON and handles the population of the dropdown menu. *
 *                                                                                *
 * @details This code initiates a fetch request for the articles JSON file,       *
 *          processes the response, and then calls the handleArticles function   *
 *          to populate the dropdown menu with article titles.                    *
 **********************************************************************************/
var Articles = [];
fetch('../assets/JSON/articles.json')
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

/**********************************************************************************
 * @brief  Handles the population of the dropdown menu with article titles.       *
 *                                                                                *
 * @details This function creates a list of article titles with corresponding     *
 *          values, adds a default "Select an option" item, and updates the HTML  *
 *          content of the dropdown menu with the generated list.                 *
 **********************************************************************************/
function handleArticles() {
  const articlesTitle = Articles.map((article, index) => `
    <option value="${article.id}">${article.Titulo}</option>`);

  articlesTitle.unshift('<option value="none" selected disabled>Selecione uma opção</option>');

  document.getElementById('title').innerHTML = articlesTitle.join('');
}

/**********************************************************************************
 * @brief  Checks if a valid article is selected for removal.                      *
 *                                                                                *
 * @details This function retrieves the selected article's title, checks if it is  *
 *          valid, and displays an alert message based on the selection status.   *
 **********************************************************************************/
function check() {
  let title = document.getElementById('title').value;

  if (title == "none") {
    alert("Selecione um artigo para remover!");
    return false;
  }

  alert("Artigo removido com sucesso!");
  return true;
}
