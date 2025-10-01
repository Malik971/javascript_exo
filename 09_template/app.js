let template = document.querySelector('#template_principal')

// Cloner le contenu de la balise templete
// .content 
let contenu = template.content.cloneNode(true)

console.log(contenu);

// Modification du contenu
contenu.querySelector('h2').textContent = "Nouveau contenu"

contenu.querySelector('.user').textContent = "Malik"

// Ajoute à la page
document.body.append(contenu)
