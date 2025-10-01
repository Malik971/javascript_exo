// Sélectionner l'élément qui va écouter l'évenement

const btn = document.querySelector("button");

//Aplication l'écouteur d'éenement

// 3 parametre possible sur le addEventListener

// 1er parametre => l'action que l'on va écouter

// 2eme parametre => Action a produire

// 3eme parametre => Objet d'option optionnelles
// btn.addEventListener(
//   "click",
//   function (event) {
//     alert("ça fonctionne");
//     // event.target renvoi la cible du click
//     console.log(event.target);

//     // event.currentTarget va renvoyer a cible qui lance l'évenement
//     console.log(event.currentTarget);
//   },
//   {
//     // once : lace l'action une seule fois
//     once: true,
//     // capture : Change le sens de propagation
//     capture: true,
//     // Désactive la vérification du prevent defaukt pour gagner en performance
//     passive: true
//   }
// );

let btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.addEventListener('click', (event)=>{
        console.log(event.currentTarget);
        if(event.currentTarget.value == 1){
            alert("J'ai cliqué !");
        }else if(event.currentTarget.value == 2){
            event.currentTarget.textContent = "Deja cliquer"
        }else{
            event.currentTarget.style.color = "blue"
        }
    })
});
 