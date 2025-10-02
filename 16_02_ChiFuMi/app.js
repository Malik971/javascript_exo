const img_pierre = document.querySelector('#imgPierre')
const img_feuille = document.querySelector('#imgFeuille')
const img_ciseaux = document.querySelector('#imgCiseaux')
const resultat_du_joueur = document.querySelector('#resultat_du_joueur')
const resultat_de_l_ordinateur = document.querySelector('#resultat_de_l_ordinateur')
let score_joueur = 0
let score_ordi = 0
const Chi_Fu_Mi = ['Pierre', 'Feuille', 'Ciseaux']

function getRandomChoix(){
  const element = Math.floor(Math.random() * Chi_Fu_Mi.length)
  return Chi_Fu_Mi[element]
} 

function jouons(choix_utilisateur) {
  let choix_ordinateur = getRandomChoix(choix_utilisateur)
   
}