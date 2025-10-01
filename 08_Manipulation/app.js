//Création d'élément

// Création dans la mémoire interne du JS

const new_li = document.createElement('li')

new_li.textContent = "Troisième ligne"

console.log(new_li);

const ul = document.querySelector('ul')

console.log(ul);

// ajoute à la fin de l'élément, dernier enfant
ul.append(new_li)

// Ajoute au debut du parent, premier enfant

ul.prepend(new_li)

const div = document.createElement('div')

console.log(div);

// Placement balise h2 via innerHTML, interpretation
div.innerHTML = "<h2> Je suis la div</h2>"

// Placement à coté du ul, insertAdjacentElement peremt un plus grand controle du placement
ul.insertAdjacentElement("afterend", div)

// Selection avancée

const premier_li = document.querySelector('.premier')

console.log(premier_li);
// Selectionne élément suivant
console.log(premier_li.nextElementSibling);
console.log(premier_li.previousElementSibling);

console.log(premier_li.parentElement);

// Selection de tous les enfants

let all_li = document.querySelectorAll('li')
console.log(ul.children);
console.log(all_li);

// ul.children récuperer dynamiquent les enfants, permet d'avoir une liste des enfants à jour meme après ajout ou suppression d'un enfant

console.log(ul.childElementCount);

// Cloner un élément exitant
// AJouter true en parametre pour cloner le contenu
const clone_li = premier_li.cloneNode(true)

// Placement dans le ul
ul.append(clone_li)

console.log(clone_li);

// clone de la div 
const clone_div = div.cloneNode(true)

// Modification du h2 du clone
clone_div.querySelector('h2').textContent = 'Clone de la div'

// Insertion apres la div déjà existante
div.insertAdjacentElement('afterend', clone_div)

// suppression d'un élément

clone_li.remove()

// Vérification de la présence d'un élément

console.log(ul.contains(clone_li));











