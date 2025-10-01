/*
 Exo:
 - Placer la classe flex sur la balise <main>
 - Changer l'image img1.jpg par img2.jpg
 - Placer la classe grey sur le paragraphe
 - Placer la classe title sur tous les titres h2
 - Changer la taille du titre h3 a 20px
 - Changer le texte du 2eme élément de liste 'Sur les berges' par 'Un repos sur les berges'
 
*/

let main_flex = document.querySelector('main');

console.log(main_flex);

main_flex.classList.add('flex')

let image2 = document.querySelector('img')
image2.setAttribute('src', 'img2.png')
console.log(image2);

let para = document.querySelector("p")

console.log(para);
para.classList.add('grey')

let title = document.querySelectorAll('h2')

// title.classList.add('title')
console.log(title);
title.forEach(h2 => {
  h2.classList.add('title')
});


let h3 = document.querySelector('h3')

h3.style.fontSize = '20px'
console.log(h3);

let texte = document.querySelectorAll('li')
console.log(texte);

texte[1].textContent = 'Un repos sur les berges'


console.log(texte);