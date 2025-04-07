/**
 *  Script js permettant d'extraite des destinations de voyage
 */
(function(){
    console.log("destination.js")
    const categoryId = 3; // Remplacez par l'ID de la catégorie souhaitée
    const domaine = window.location.href
    const apiUrl = `${domaine}wp-json/wp/v2/posts?categories=${categoryId}`;
    console.log(apiUrl)
    parcourir_bouton()

function parcourir_bouton(){
    const categorie__ul__li = document.querySelectorAll(".categorie__ul__li")
    console.log("categorie__ul__li.length = ", categorie__ul__li.length)
    categorie__ul__li.forEach(elm => {
        elm.addEventListener('mousedown', function(){
            console.log(elm.tagName)
            console.log("elm.dataset.category_id = " , elm.dataset.category_id)
        })
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
                    <p>${article.excerpt.rendered}</p>
                    <a href="${article.link}">Lire plus</a>
                `;
                destinationList .appendChild(articleElement);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des articles:', error));
    })()