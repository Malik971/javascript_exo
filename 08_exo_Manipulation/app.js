// Exo recreer une structure HTML

/*
    <h2>Titre de l'article</h2>
    <div class="card">
        <div class="right">
            <h3>Call to action</h3>
            <p>Texte de la carte</p>
        </div>
        <button>Voir plus</button>

    </div>

*/

// const h2 = document.createElement('h2')

// h2.textContent = "Titre de l'article"

// console.log(h2);

// const body = document.querySelector('body')

// body.append(h2)

// const div = document.createElement("div")

// console.log(div);
// div.classList.add('card')

// div.innerHTML = "<div class='right'>"

// const div2 = div.querySelector('.right')

// console.log(div2);
// const h3 = document.createElement('h3')
// const p = document.createElement('p')

// h3.textContent = "Call to action"

// p.textContent = "Texte de la carte"

// div2.append(h3)
// div2.append(p)

let h2 = document.createElement('h2')
h2.textContent = "Titre de l'article"

let div_pr = document.createElement('div')
div_pr.classList.add('card')
let div_sec = document.createElement('div')
div_pr.classList.add('right')

let h3 = document.createElement('h3')
h3.textContent = "Call to action"

let p = document.createElement('p')
p.textContent = "Texte de la carte"

let btn = document.createElement('button')
btn.textContent = 'voir plus'

div_sec.append(h3, p)
div_pr.append(div_sec, btn)

document.querySelector('#container').append(h2, div_pr)
