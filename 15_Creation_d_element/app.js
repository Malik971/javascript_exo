const newElement = document.querySelector('#H2')
const newElement2 = document.querySelector('#H3')
const newElement3 = document.querySelector('#Paragraphe')
const newElement4 = document.querySelector('#button')
const Nouveaux = document.querySelectorAll('.Nouveau')

let container = document.querySelector('#container')

function creation(html, text){
  const element = document.createElement(html)
  element.textContent = text
  container.append(element)
  return element
}

creation('h2', 'Titre de niveau 2 créé avec une fonction')
creation('h3', 'Titre de niveau 3 créé avec une fonction')


document.querySelector('#H2').addEventListener('click', () =>{
  creation('h2', 'Titre de niveau 2 créé avec une fonction')
})
document.querySelector('#H3').addEventListener('click', () =>{
  creation('h3', 'Titre de niveau 3 créé avec une fonction')
})
document.querySelector('#Paragraphe').addEventListener('click', () =>{
  creation('p', 'Paragraphe créé avec une fonction')
})
document.querySelector('#button').addEventListener('click', () =>{
  const button = creation('button', 'Bouton créé avec une fonction')
  button.addEventListener('click', () =>{
    alert("Vous avez cliqué sur le bouton créé avec une fonction")
  })
})





// MA VERSION TROP LONGUE

// Nouveaux.forEach(nouveau =>{
//   newElement.addEventListener('click', ()=>{
//     console.log(newElement);
//     const new_h2 = document.createElement('h2')
//     new_h2.textContent = "Nouveau titre h2"
//     document.body.append(new_h2)
//   })
  
//   newElement2.addEventListener('click', ()=>{
//     console.log(newElement2);
//     const new_h3 = document.createElement('h3')
//     new_h3.textContent = "Nouveau titre h3"
//     document.body.append(new_h3)
//   })

//   newElement3.addEventListener('click', ()=>{
//     console.log(newElement3);
//     const new_p = document.createElement('p')
//     new_p.textContent = "Nouveau paragraphe"
//     document.body.append(new_p)
//   }
//   )
  
//   newElement4.addEventListener('click', ()=>{
//     console.log(newElement4);
//     const new_button = document.createElement('button')
//     new_button.textContent = "Nouveau bouton"
//     document.body.append(new_button)
//     new_button.addEventListener('click', ()=>{
//       alert("Vous avez cliqué sur le nouveau bouton")
//     }
//     )
//   }
// )
// console.log(Nouveaux.contains(new_button));
// })

  
  
  
