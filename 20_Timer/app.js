// Afficher le titre Bonjour puis après 3 secondes le remplacer par Enchanté

const title = document.createElement('h1')
const h2 = document.createElement('h2')
title.textContent = 'Bonjour'
document.body.appendChild(title)
setTimeout(() => {
  h2.textContent = 'Enchanté'
  document.body.replaceChild(h2, title)
}, 3000);



function wait(temps){
  return new Promise((resolve, reject) => {
    if(temps < 0){
      reject("Le temps dois être positif")
    }
    setTimeout(() => {
      resolve("Attente de " + temps + "ms terminée")
    }, temps);
  })
}

// async function waitFor(){
//   try{

// }