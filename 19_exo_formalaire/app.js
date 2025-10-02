const form = document.querySelector('form')
const pseudo = document.querySelector("#pseudo")

pseudo.addEventListener('change', () =>{
  console.log(pseudo.value);
  
  if(pseudo.value.includes(' ')){
    console.log('Erreur pas d\'espace');
    document.querySelector('span').textContent = 'Pas d\'espace dans le pseudo'
    pseudo.value = ''
  }else{
    document.querySelector('span').textContent = ''
  }
})



let password = document.querySelector("#password")

password.addEventListener('change', () =>{
  
  if(password.value.length < 5){
    console.log('Erreur nom trop court');
    document.querySelector('span').textContent = 'Mot de passe trop court'
    
  }else{
    document.querySelector('span').textContent = ''
  }
})

// Une liste sélective proposant 3 choix, Formule 1 15€, Formule 2 20€, formule 3 30€

let formule = document.querySelector('#formule')

formule.addEventListener('change', ()=>{ 
  let prix = 0
  switch(formule.value){
    case 'formule1':
      prix = 15
      break
    case 'formule2':
      prix = 20
      break
    case 'formule3':
      prix = 30
      break
    default:
      prix = 0
  }
  document.querySelector('#prix').textContent = prix + '€'
})