/**
 *  Script js permettant d'extraite des destinations de voyage
 */
(function(){
    console.log("destination.js")
    let categoryId = 3; // Remplacez par l'ID de la catégorie souhaitée
    const domaine = document.querySelector('base').href;
    /* la technique utilisée pour extraire l'url doit êtere généralisée */
    //const domaine = window.origin + "/4w4-gr2/"

    parcourir_bouton()
    mon_fetch(categoryId)

function parcourir_bouton(){
    const categorie__ul__li = document.querySelectorAll(".categorie__ul__li")
    console.log("categorie__ul__li.length = ", categorie__ul__li.length)
    categorie__ul__li.forEach(elm => {
        elm.addEventListener('mousedown', function(){
            console.log(elm.tagName)
            console.log("elm.dataset.category_id = " , elm.dataset.category_id)
            mon_fetch(elm.dataset.category_id)
        })
    })

}

function mon_fetch(id_category)
{
    apiUrl = `${domaine}wp-json/wp/v2/posts?categories=${id_category}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const destinationList = document.querySelector('.destination__list');
            destinationList.innerHTML = ""
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
    }  
})()