// Objet window automatiquement présent, possede des méthodes et des propriétés utiles pour diverse action en JS

// Selection 

// Selecteur CSS

// Selection d'élément HTML => le nom de la balise (h2) ul)
// Selection de classe => .nom_de_la_classe
// Selection d'ID => #nom_de_l_id
let h1 = document.querySelector('h1')

let h2_classe = document.querySelector('.select')

let id = document.querySelector('#id')

console.log(h1);
console.log(h2_classe);
console.log(id);

console.log(h1.textContent.toUpperCase());

// element.textContent => Répupère le texte brut de l'élément html

h1.textContent = "Le <span> texte </span> modifié"

h1.innerHTML = "<span> Le nouveau texte </span>"

let btn = document.querySelector('button')

console.log(btn.getAttribute('value'));

btn.setAttribute('value', 7)
btn.setAttribute('type', 'submit')
console.log(btn.getAttribute('value'));

btn.type = 'submit'

//modification de classe

let p = document.querySelector('.select')

console.log(p.classList);

// classList donne un objet DomTokenList, réfere toutes les classe existante sur l'élément HTML et donne acces a de nouvelles méthodes

// Ajouter une classe
p.classList.add('red')

// Retirer une classe
p.classList.remove('red')

//Retirer la classe toggle si elle existe, l'ajoute si elle n'exsite pas

setInterval(function() {
  p.classList.toggle('red')
}, 1000)

// Modification directe de style

let p2 = document.querySelector("#select")

console.log(p2.style);
p2.style.color = 'blue'
p2.style.backgroundColor = 'black'

// Selection multiples et avancée

let lis = document. querySelectorAll('li')

console.log(lis);

console.log(lis[2]);

for( const li of lis) {
  li.textContent = 'Salade'
}

lis.forEach(li => {
  li.textContent = 'Tomate'
})




































