function functionActive(e){
  let onglets = document.querySelectorAll(".onglet");
  let btns = document.querySelectorAll('button')
  for(let i = 0; i < onglets.length; i++){
    onglets[i].style.display="none"
    btns[i].classList.remove('active')
  }
  onglets[e].style.display = "block"
  btns[e].classList.add("active")
}