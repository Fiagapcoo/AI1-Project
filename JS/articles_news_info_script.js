var id = window.location.search;
console.log(id);
if(id == ""){
    alert("Erro ao carregar a página!")
    window.location.href = "../index.html";
}
let actualId = id.split("=")[1];
let actualIdInt = parseInt(actualId);

let Articles = [];
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
    let article = Articles[actualIdInt];
    document.getElementById('title').innerHTML = article.Titulo;

    document.getElementById('img').innerHTML = `<img src="../assets/imgs/${article.IMG}" alt="ArtigoIMG" />`;

    document.getElementById('h1Title').innerHTML = article.Titulo;

    document.getElementById('pContent').innerHTML = article.Conteudo;
}