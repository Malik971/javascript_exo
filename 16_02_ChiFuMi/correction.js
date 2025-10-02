let btns=document.querySelectorAll('button')

function getOrdi(){

  const resultOrdi = Math.floor(Math.random() * 3 + 1)

  // if(resultOrdi == 1){
  //   // resultOrdi = 'Pierre'
  // }
  return resultOrdi
}

function checkResult(monChoix, choixOrdi){
  let result
  if(monChoix == choixOrdi){
    return result = 'Egalite'
  } else if((monChoix == 1 && choixOrdi == 2) || (monChoix == 2 && choixOrdi) == 3 || (monChoix == 3 && choixOrdi == 1)){
    return result = 'Victoire'
  }else{
  return result = 'Defaite'
}}

function traduction(choix){
  let traduction
  if(choix == 1){
    return traduction = 'Papier'
  }else if(choix == 2){
    return traduction = 'Pierre'
  }else{
    return traduction = 'Ciseaux'
  }
}

function generateHTML(monChoix, choixOrdi, result, score){
  console.log('coucou');
  
  let template = document.querySelector('#template')
  let div = template.content.cloneNode(true)
  div.querySelector('div').classList.add(result)
  let h2 = div.querySelector('h2')
  h2.textContent = "Resultat :" + result
  let p_comparaison = div.querySelector("#comparaison")
  p_comparaison.textContent = "Moi: " + traduction
  (monChoix) + " || " + traduction(choixOrdi)
  document.querySelector('.game').append(div)
  console.log(p_comparaison);

  document.querySelector('.game').append(div)
  
}
let score = {
  moi:0,
  ordi:0
}

btns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    let monChoix = btn.value
    let choixOrdi = getOrdi()
    console.log(btn.value);
    console.log(monChoix);
    console.log(choixOrdi);
    let result = checkResult(monChoix, choixOrdi);

    generateHTML(monChoix, choixOrdi, result)


    
    
    
    // btn.nextElementSibling.classList.toggle('visible')
  })
})

generateHTML()