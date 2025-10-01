// Creer un chifumi en JS et afficher les résultat
// Créer 3 bouton générant chacun un résultat différent
// Générer un résultat aléatoire pour l'ordinateur
// Comparer les 2 résultats et retourner le résultat final (Voitoires ou défaite ou match nul)
// Mettre le tableau des scores à jour
// Créer un bloc pour afficher les résultat, Fond rouge pour défaite, font vert pour victoire et fond bleu pour match nul
// N'hésitez pas à créer vos propres fonctions

const btn_p = document.querySelector('#btn_p')
const btn_f = document.querySelector('#btn_f')
const btn_c = document.querySelector('#btn_c')
const result = document.querySelector('.resultat')
const score_joueur = document.querySelector('#score_joueur')
const score_ordi = document.querySelector('#score_ordi')
let scoreJ = 0
let scoreO = 0
const choix = ['Pierre', 'Feuille', 'Ciseaux']

function ChoixAleatoire() {
    const randomIndex = Math.floor(Math.random() * choix.length)
    return choix[randomIndex]
}
function play(userChoice) {
    const computerChoice = ChoixAleatoire()
    let resultText = `Vous avez choisi ${userChoice}. L'ordinateur a choisi ${computerChoice}. `
    if (userChoice == computerChoice) {
        resultText += "Match nul !"
        result.style.backgroundColor = 'blue'
    } else if ((userChoice == 'Pierre' && computerChoice == 'Ciseaux') ||
               (userChoice == 'Feuille' && computerChoice == 'Pierre') ||
               (userChoice == 'Ciseaux' && computerChoice == 'Feuille')) {
        resultText += "Vous gagnez !"
        scoreJ++
        score_joueur.textContent = scoreJ
        result.style.backgroundColor = 'green'
    } else {
        resultText += "Vous perdez !"
        scoreO++
        score_ordi.textContent = scoreO
        result.style.backgroundColor = 'red'
    }
    result.textContent = resultText
    result.style.color = 'white'
    result.style.padding = '10px'
    result.style.marginTop = '10px'
}

btn_p.addEventListener('click', () => play('Pierre'))
btn_f.addEventListener('click', () => play('Feuille'))
btn_c.addEventListener('click', () => play('Ciseaux'))