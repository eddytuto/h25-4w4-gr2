/**
 *  Script js permettant d'extraite des destinations de voyage
 */
(function(){
    console.log("destination.js")
    const categoryId = 3; // Remplacez par l'ID de la catégorie souhaitée
    const domaine = window.location.href
    const apiUrl = `${domaine}wp-json/wp/v2/posts?categories=${categoryId}`;
    console.log(apiUrl)
function parcourrir_bouton(){
    const categorie__ul__li = document.querySelectorAll(".categorie__ul__li")
    categorie__ul__li.forEach(elm => {
        
    })
}


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const destinationList = document.querySelector('.destination__list');
            data.forEach(article => {
                const articleElement = document.createElement('div');
                console.log(article.title.rendered)
                // <div>${article.excerpt.rendered}</div>
                articleElement.innerHTML = `
                    <h3>${article.title.rendered}</h3>

                    <a href="${article.link}">Lire plus</a>
                `;
                destinationList .appendChild(articleElement);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des articles:', error));
    })()